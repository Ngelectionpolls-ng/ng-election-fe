'use client';
import React from 'react';
import { Undo2 } from 'lucide-react';
import { CameraIcon } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import CameraFeatures from './CameraFeatures';
import PictureAndVideoBtn from './PictureAndVideoBtn';
import Webcam from 'react-webcam';
import CIResultButtons from './CIResultButtons';
import { FieldValues, useForm } from 'react-hook-form';
import { resultData as data } from '@/utils/data/DummyObjects';
import  {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import ResultTable from './ResultTable';
import Results from './Results';
import InputResult from './InputResult';
import PostReport from './PostReport';
import { toast } from 'sonner';

export default function Capture() {
  const [toggle, setToggle] = useState(false);
  const [postMode, setPostMode] = useState<'camera' | 'inputResult' | 'post' | 'nil'>('nil'); // Camera open state
  const [capturedImage, setCapturedImage] = useState<string | null>(null); // State to hold captured image
  const [facingMode, setFacingMode] = useState<'user' | {exact: 'environment'}>({exact: 'environment'});
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const webcamRef = useRef<Webcam>(null); // Ref to control the Webcam component
  const [mediaStream, setMediaStream] = useState<MediaStream | null>(null);
  const [isLandscape, setIsLandscape] = useState(true); // Track if it's landscape or portrait mode
  const [recordedChunks, setRecordedChunks] = useState<Blob[]>([]); // Store video data chunks
  const [playbackURL, setPlaybackURL] = useState<string | null>(null); // URL for video playback
  const [videoTimer, setVideoTimer] = useState<string | null>(null); // Timer for recording duration
  const [formStep, setFormStep] = useState<1 | 2 | 3 >(1);
  const [formData, setFormData] = useState<FieldValues[]>([])

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
  }, [postMode, facingMode, mediaStream]); 

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
          toast.success('Upload successful'); 
          // console.log(`${mediaType} upload successful`);
        } else {
          // console.log(`${mediaType} upload failed`);
          toast.error('Upload failed');
        }
      } catch (error) {
        console.error(`Error uploading ${mediaType}:`, error);
      }
    }
  };
  
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
    register,
  } = useForm<FieldValues>({ mode: 'onChange' });

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
    toggle,
    setToggle,
  };

  const resProps = {data, isValid, errors, control, formData, setValue, register, setFormStep, setFormData, handleSubmit}

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
      <CIResultButtons props={CameraProps} />
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
        <Dialog open={!!postMode} onOpenChange={() => setPostMode('nil')}>
          <DialogContent className='bg-black border-none text-white'>
            <DialogHeader>
              <DialogTitle className={formStep === 3 ? 'text-left' : ''}>
              {formStep === 1 && 'Input Result'}
              {formStep === 2 && 'Result Table'}
              {formStep === 3 && 'Results'}
              </DialogTitle>
            </DialogHeader>
            {formStep === 1 && <InputResult props={resProps} />}
            {formStep === 2 && <ResultTable props={resProps} />}
            {formStep === 3 && <Results props={resProps} />}
          </DialogContent>
        </Dialog>
      )}
      {postMode === 'post' && (
        <Dialog open={!!postMode} onOpenChange={() => setPostMode('nil')}>
          <DialogContent className='bg-black border-none text-white'>
            <DialogHeader>
              <DialogTitle>Make A Post</DialogTitle>
            </DialogHeader>
            <PostReport props={resProps} />
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
