'use client';
import { dummyNewsArr } from '@/utils/data/DummyObjects';
import CollapsibleComponent from '@/components/ui/collapsible';
import {
  CameraIcon,
  ElectionMaterialIcon,
  ResultIcon,
  TrendIcon,
} from '@/public/assets/icons';
import Activities from './_component/Activities';
import Modal from '@/components/common/Modal';
import { useEffect, useRef, useState } from 'react';
import Svg from '@/components/common/Svg';
import Camera from '@/components/common/Camera';
import { Video } from 'lucide-react';
import Webcam from 'react-webcam';
import PictureAndVideoBtn from './_component/PictureAndVideoBtn';
import CameraFeatures from './_component/CameraFeatures';

export default function Page() {
  const [open, setOpen] = useState(false); // Modal open state
  const [camera, setCamera] = useState(false); // Camera open state
  const [capturedImage, setCapturedImage] = useState<string | null>(null); // State to hold captured image
  const [facingMode, setFacingMode] = useState<'user' | { exact: "environment" }>({ exact: "environment" });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 }); // State to hold dynamic camera dimensions
  const webcamRef = useRef<Webcam>(null); // Ref to control the Webcam component
  const [isLandscape, setIsLandscape] = useState(true); // Track if it's landscape or portrait mode
  const [recordedChunks, setRecordedChunks] = useState<Blob[]>([]); // Store video data chunks
  const [playbackURL, setPlaybackURL] = useState<string | null>(null); // URL for video playback
  const [videoTimer, setVideoTimer] = useState<string | null>(null); // Timer for recording duration
  
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

  const switchCamera = () => {
    setFacingMode((prevMode) =>
      prevMode === 'user' ? { exact: "environment" } : 'user',
    );
  };

  // Video constraints for the Webcam component
  const videoConstraints = {
    facingMode: facingMode,
    width: {ideal: dimensions.width}, // Numeric value for width
    height: {ideal: dimensions.height}, // Numeric value for height
    aspectRatio: isLandscape ? 16 / 9 : 9 / 16, // Set aspect ratio based on orientation
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
    camera, // Required by PictureAndVideoBtn
    webcamRef, // Required by PictureAndVideoBtn
    videoTimer, // Required by CameraFeatures
    dimensions, // Required by CameraFeatures
    playbackURL, // Required by CameraFeatures
    capturedImage, // Required by both components
    recordedChunks, // Required by VideoControl
    setRecordedChunks, // Required by CameraFeatures
    setCapturedImage, // Required by both components
    setPlaybackURL, // Required by both components
    setVideoTimer, // Required by PictureAndVideoBtn
    handleUpload, // Required by CameraFeatures
    switchCamera, // Required by both components
    setCamera, // Required by PictureAndVideoBtn
    facingMode,
  };

  return (
    <section className="grid gap-10 p-4">
      <CollapsibleComponent header="Capture Results">
        <span className="border-[3px] w-max rounded-md border-gray-400 text-lg p-3">
          LGA
        </span>
        <div>
          <h5>Ward</h5>
          <span>IGUEGBEN - EKEKHEN/IDUMU/OGO/EGBIKE</span>
        </div>
        <div>
          <h5>Pulling Unit</h5>
          <span>IGUEGBEN - EKEKHEN/IDUMU/OGO/EGBIKE</span>
        </div>
        <div className="flex gap-4">
          <div
            onClick={() => setOpen(true)}
            className="flex flex-col justify-between p-4 w-full max-w-[18rem] h-[9rem] rounded-xl bg-current"
          >
            <Svg width={'3rem'} height={'3rem'} SvgIcon={TrendIcon} />
            <span className="text-accent md:text-2xl font-bold">
              Input Result
            </span>
          </div>
          <div
            onClick={() => setOpen(true)}
            className="flex bg-[#A5E2ACCC] flex-col justify-between p-4 w-full max-w-[18rem] h-[9rem] rounded-xl border border-dashed border-green-700"
          >
            <Svg
              width={'3rem'}
              height={'3rem'}
              SvgIcon={CameraIcon}
              fill="#A5E2ACCC"
            />
            <span className="md:text-2xl font-bold">Capture</span>
          </div>
        </div>
      </CollapsibleComponent>
      <Modal
        isVisible={open}
        btnClass={camera ? 'hidden' : ''}
        closeModal={() => {
          setCamera(false);
          setOpen(false);
        }}
        className={`min-w-[18rem] gap-16 text-white bg-black ${
          camera ? 'py-0 px-0 rounded-3xl' : 'px-10 py-5'
        }`}
      >
        <div
          onClick={() => setCamera(true)}
          className={`cursor-pointer flex gap-6 ${camera && 'hidden'}`}
        >
          Result (EC8A) <Svg SvgIcon={ResultIcon} />
        </div>
        <div
          onClick={() => setCamera(true)}
          className={`cursor-pointer flex gap-6 ${camera && 'hidden'}`}
        >
          Election material <Svg SvgIcon={ElectionMaterialIcon} />
        </div>
        <div
          onClick={() => setCamera(true)}
          className={`cursor-pointer flex gap-6 ${camera && 'hidden'}`}
        >
          Eyewitness Report <Video />
        </div>
        {camera ? (
          <div className="flex flex-col fixed left-0 bg-black h-[100%] w-[100%] top-0 gap-8">
            <Camera
              className={'h-[100%] w-[100%]'}
              audio={false}
              aria-orientation="vertical"
              ref={webcamRef}
              disablePictureInPicture={false}
              forceScreenshotSourceSize={false}
              imageSmoothing={false}
              mirrored={facingMode === 'user' ? true : false}
              videoConstraints={videoConstraints}
              onUserMedia={() => null}
              onUserMediaError={() => null}
              screenshotFormat={'image/jpeg'}
              screenshotQuality={0.8}
            />
            <PictureAndVideoBtn props={CameraProps} />
            <CameraFeatures props={CameraProps} />
          </div>
        ) : null}
      </Modal>
      <Activities arr={dummyNewsArr} />
    </section>
  );
}
