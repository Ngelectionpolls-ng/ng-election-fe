'use client';
import React from 'react';
import { TrendIcon } from '@/public/assets/icons';
import { Undo2 } from 'lucide-react';
import Camera from '@/components/common/Camera';
import { CameraIcon } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import CameraFeatures from './CameraFeatures';
import PictureAndVideoBtn from './PictureAndVideoBtn';
import Webcam from 'react-webcam';
import CIResultButtons from './CIResultButtons';
import Modal from '@/components/common/Modal';
import FormControl from '@/components/common/FormControl';
import { Button } from '@/components/ui/button';
import { Controller, FieldValues, useForm } from 'react-hook-form';
import InputResult from './InputResult';
import { partyArr, resultData as data } from '@/utils/data/DummyObjects';
import DialogDemo from '@/components/ui/Dialog';

export default function Capture() {
  const [toggle, setToggle] = useState(false);
  const [postMode, setPostMode] = useState<'camera' | 'inputResult' | 'nil'>('nil'); // Camera open state
  const [capturedImage, setCapturedImage] = useState<string | null>(null); // State to hold captured image
  const [facingMode, setFacingMode] = useState<'user' | {exact: 'environment'}>({exact: 'environment'});
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const webcamRef = useRef<Webcam>(null); // Ref to control the Webcam component
  const [mediaStream, setMediaStream] = useState<MediaStream | null>(null);
  const [isLandscape, setIsLandscape] = useState(true); // Track if it's landscape or portrait mode
  const [recordedChunks, setRecordedChunks] = useState<Blob[]>([]); // Store video data chunks
  const [playbackURL, setPlaybackURL] = useState<string | null>(null); // URL for video playback
  const [videoTimer, setVideoTimer] = useState<string | null>(null); // Timer for recording duration
  const [formStep, setFormStep] = useState<boolean>(false)

  // Function to update dimensions dynamically based on the screen size
  const updateDimensions = () => {
    setDimensions({ width: window.innerWidth, height: window.innerHeight });
    const isLandscapeOrientation = window.innerWidth > window.innerHeight; // Check if the width is greater than height
    setIsLandscape(isLandscapeOrientation); // Set the orientation mode (landscape or portrait)
    // Set appropriate dimensions for landscape or portrait mode
    if (isLandscapeOrientation) {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    } else {
      setDimensions({ width: window.innerHeight, height: window.innerWidth });
    }
  };
  // Effect to update dimensions on window resize
  useEffect(() => {
    updateDimensions(); // Set initial dimensions
    window.addEventListener('resize', updateDimensions); // Update dimensions when window is resized
    return () => window.removeEventListener('resize', updateDimensions); // Cleanup the event listener on component unmount
  }, []);

  useEffect(() => {
    if (postMode === 'camera') {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices
          .getUserMedia({
            video: { facingMode: facingMode },
            audio: true,
          })
          .then((stream) => {
            setMediaStream(stream);
            if (webcamRef.current) {
              webcamRef.current.stream = mediaStream; 
            }
          })
        .catch((error) => {
            console.error("Error accessing webcam", error);
        });
      }
      document.body.style.overflow = 'hidden';
    } else {
      if (mediaStream) {
        mediaStream.getTracks().forEach((track) => {
          track.stop();
        });
      }
      setMediaStream(null);
      document.body.style.overflow = 'auto';
    }
  
    return () => {
      if (mediaStream) {
        mediaStream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [postMode, facingMode]); 

  const switchCamera = () => {
    setFacingMode((prevMode) =>
      prevMode === 'user' ? { exact: 'environment' } : 'user',
    );
  };

  // Video constraints for the Webcam component
  const videoConstraints = {
    facingMode: facingMode,
    width: { ideal: dimensions.width }, // Numeric value for width
    height: { ideal: dimensions.height }, // Numeric value for height
    aspectRatio: !isLandscape ? 16 / 9 : 9 / 16, // Set aspect ratio based on orientation
  };

  // Handle the upload of both images and videos
  const handleUpload = async (mediaType: 'image' | 'video') => {
    let blob: Blob | null = null;
    // Create the Blob based on media type
    if (mediaType === 'video' && recordedChunks.length > 0) {
      blob = new Blob(recordedChunks, { type: 'video/webm' });
    } else if (mediaType === 'image' && webcamRef.current) {
      // Capture the image from the webcam
      const imageSrc = webcamRef.current.getScreenshot();
      if (imageSrc) {
        const byteString = atob(imageSrc.split(',')[1]);
        const mimeString = imageSrc.split(',')[0].split(':')[1].split(';')[0];
        const ab = new ArrayBuffer(byteString.length);
        const ia = new Uint8Array(ab);
        for (let i = 0; i < byteString.length; i++) {
          ia[i] = byteString.charCodeAt(i);
        }
        blob = new Blob([ab], { type: mimeString });
      }
    }
    if (blob) {
      const formData = new FormData();
      const fileName =
        mediaType === 'video' ? 'recorded-video.mp4' : 'captured-image.jpg';
      formData.append('file', blob, fileName); // Append the blob to form data
      try {
        const response = await fetch('https://your-backend-api/upload', {
          method: 'POST',
          body: formData,
        });
        if (response.ok) {
          console.log(`${mediaType} upload successful`);
        } else {
          console.log(`${mediaType} upload failed`);
        }
      } catch (error) {
        console.error(`Error uploading ${mediaType}:`, error);
      }
    }
  };

  const CameraProps = {
    postMode, // Required by PictureAndVideoBtn
    webcamRef, // Required by PictureAndVideoBtn
    videoTimer, // Required by CameraFeatures
    dimensions, // Required by CameraFeatures
    playbackURL, // Required by CameraFeatures
    capturedImage, // Required by both components
    recordedChunks, // Required by VideoControl
    mediaStream,
    setMediaStream,
    setRecordedChunks, // Required by CameraFeatures
    setCapturedImage, // Required by both components
    setPlaybackURL, // Required by both components
    setVideoTimer, // Required by PictureAndVideoBtn
    handleUpload, // Required by CameraFeatures
    switchCamera, // Required by both components
    setPostMode, // Required by PictureAndVideoBtn
    facingMode,
  };

  const resProps = {data}

  const { control, handleSubmit, formState: { errors } } = useForm<FieldValues>({ mode: "onChange" });


  return (
    <>
      <div onClick={() => setToggle((prev) => !prev)}
        className="fixed bottom-12 cursor-pointer z-20 flex gap-2 items-center right-5"
      >
        <span className={`transition-all 
          ${toggle ? 'delay-500 translate-x-0' : 'delay-300 translate-x-9 opacity-0'}`}
        >
          back
        </span>
        <div className="rounded-full p-3 text-white bg-black">
          {toggle ? <Undo2 /> : <CameraIcon />}
        </div>
      </div>
      <CIResultButtons 
        toggleInputResult={() => setPostMode('inputResult')}
        toggleCamera={() => setPostMode('camera')}
        setToggle={setToggle}
        toggle={toggle}
      />
      {postMode === 'camera' && (
        <div className="flex flex-col z-20 fixed top-0 left-0 bg-black h-full w-full gap-8">
          <Webcam
            audio={false}
            ref={webcamRef}
            className={'h-full w-[100%]'}
            screenshotFormat={'image/jpeg'}
            videoConstraints={videoConstraints}
            mirrored={facingMode === 'user' ? true : false}
          />
          {playbackURL || capturedImage ? null : (
            <PictureAndVideoBtn props={CameraProps} />
          )}
          <CameraFeatures props={CameraProps} />
        </div>
      )}
      {postMode === 'inputResult' && (
        // <DialogDemo />
        <Modal isVisible={!!postMode} closeModal={() => setPostMode('nil')}
          className='bg-black w-full max-w-[30rem] p-4 text-accent'>
            <InputResult props={resProps} />
        </Modal>
      )}
    </>
  );
}
