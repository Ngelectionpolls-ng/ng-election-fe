'use client'; // Necessary for Next.js to indicate this is a client-side component

import { dummyNewsArr } from '@/utils/data/DummyObjects'; // Importing dummy data
import CollapsibleComponent from '@/components/ui/collapsible'; // Importing a reusable collapsible component
import {
  CameraIcon,
  ElectionMaterialIcon,
  ResultIcon,
  TrendIcon,
} from '@/public/assets/icons'; // Importing icons
import Activities from './_component/Activities'; // Importing Activities component
import Modal from '@/components/common/Modal'; // Importing Modal component
import { useCallback, useEffect, useRef, useState } from 'react'; // React hooks
import Svg from '@/components/common/Svg'; // Importing Svg component
import Camera from '@/components/common/Camera'; // Importing Camera component
import { Button } from '@/components/ui/button'; // Button component from your UI library
import { SquareChevronLeft, X, SwitchCamera, Video } from 'lucide-react'; // Icon components from Lucide-React
import Webcam from 'react-webcam'; // Importing Webcam for capturing camera input
import Image from 'next/image'; // Importing next/image for optimized image rendering
import VideoControl from './_component/VideoControl';
import { time } from 'console';
import { Play } from 'lucide-react';
import { Upload } from 'lucide-react';

function Page() {
  const [open, setOpen] = useState(false); // Modal open state
  const [camera, setCamera] = useState(false); // Camera open state
  const [capturedImage, setCapturedImage] = useState<string | null>(null); // State to hold captured image
  const [facingMode, setFacingMode] = useState<'user' | 'environment'>(
    'environment',
  );
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 }); // State to hold dynamic camera dimensions
  const webcamRef = useRef<Webcam>(null); // Ref to control the Webcam component

  // video recording
  const [recordedChunks, setRecordedChunks] = useState<Blob[]>([]); // Store video data chunks
  const [playbackURL, setPlaybackURL] = useState<string | null>(null); // URL for video playback
  const [videoTimer, setVideoTimer] = useState<string | null>(null); // Timer for recording duration

  console.log(playbackURL);
  // Function to convert base64 image data to Blob
  const base64ToBlob = (base64: string) => {
    const byteString = atob(base64.split(',')[1]);
    const mimeString = base64.split(',')[0].split(':')[1].split(';')[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mimeString });
  };

  // Function to capture the image from the webcam
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) {
      const blob = base64ToBlob(imageSrc);
      const objectURL = URL.createObjectURL(blob);
      setCapturedImage(objectURL); // Store the object URL instead of base64 string
    }
  }, [webcamRef]);

  // Function to update dimensions dynamically based on the screen size
  const updateDimensions = () => {
    const width = window.innerWidth * 0.99; // 80% of the screen width
    const height = window.innerHeight * 0.99; // 80% of the screen height
    setDimensions({ width, height });
  };

  // Effect to update dimensions on window resize
  useEffect(() => {
    updateDimensions();
    window.addEventListener('resize', updateDimensions); // Update dimensions when window is resized
    return () => window.removeEventListener('resize', updateDimensions); // Cleanup the event listener on component unmount
  }, []);

  const toggleCamera = () => {
    console.log(facingMode);
    setFacingMode((prevMode) =>
      prevMode === 'environment' ? 'user' : 'environment',
    );
  };
  console.log(playbackURL);
  // Video constraints for the Webcam component
  const videoConstraints = {
    facingMode: facingMode, // Front camera
    width: dimensions.width,
    height: dimensions.height,
  };

  //video functions
  // Playback the recorded video
  const handlePlayback = () => {
    if (recordedChunks.length > 0) {
      const blob = new Blob(recordedChunks, { type: 'video/webm' });
      const videoURL = URL.createObjectURL(blob);
      setPlaybackURL(videoURL); // Set URL for video playback
    }
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
    const fileName = mediaType === 'video' ? 'recorded-video.webm' : 'captured-image.jpg';
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


  return (
    <section className="grid gap-10 p-4">
      {/* Collapsible Component for Capture Results */}
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

      {/* Modal for Camera Capture */}
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
        {/* Options for different capture types */}
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

        {/* Camera View */}
        {camera ? (
          <div className="flex flex-col gap-8">
            {videoTimer && (
              <div className="flex gap-1 z-10 absolute top-6 mx-2">
                <div className="bg-red-600 text-red-600 rounded-full w-5 h-5" />
                <p>{videoTimer}</p>
              </div>
            )}
            {playbackURL && (
              <div className="absolute z-30 top-0 w-full">
                {/* <h2>Recorded Video:</h2> */}
                <Button
                  onClick={() => {setPlaybackURL(null); setRecordedChunks([])}}
                  className="absolute top-6 z-40 right-6"
                  variant={'destructive'}
                  size={'icon'}
                >
                  <X />
                </Button>
                <video src={playbackURL} controls />
                <div onClick={() => handleUpload('video')}
                  className="absolute bottom-20 right-4 z-40 border flex justify-center items-center rounded-full w-14 h-14 bg-black text-white"
                >
                  <Upload />
                </div>
              </div>
            )}
            <div
              onClick={toggleCamera}
              className={`border flex justify-center items-center rounded-full w-14 h-14 bg-white text-black-500 z-10 absolute top-3 right-3
                ${(playbackURL || capturedImage) && 'hidden'}`}
            >
              <SwitchCamera />
            </div>
            <Camera
              className={'h-[auto] rounded-2xl'}
              audio={false}
              ref={webcamRef}
              width={dimensions.width} // Dynamic width
              height={dimensions.height} // Dynamic height
              disablePictureInPicture={false}
              forceScreenshotSourceSize={false}
              imageSmoothing={false}
              mirrored={true}
              videoConstraints={videoConstraints}
              onUserMedia={() => null}
              onUserMediaError={() => null}
              screenshotFormat={'image/jpeg'}
              screenshotQuality={0.8}
            />

            {/* Controls for capturing images */}
            <div
              className={`absolute bottom-0 w-full justify-center items-center flex-row flex gap-4 z-10
                ${camera && 'py-6 px-2'}`}
            >
              <div
                className="bg-white flex justify-center items-center rounded-full w-12 h-12 text-black-500 text-2xl"
                onClick={() => setCamera(false)}
              >
                <SquareChevronLeft />
              </div>
              <div
                onClick={capture}
                className="border flex justify-center items-center rounded-full w-14 h-14 bg-white text-black-500"
              >
                <Svg width={'1.5rem'} height={'1.5rem'} SvgIcon={CameraIcon} />
              </div>
              <VideoControl
                setRecordedChunks={setRecordedChunks}
                setVideoTime={setVideoTimer}
                webcamRef={webcamRef}
              />
              {capturedImage && (
                <div onClick={() => handleUpload('image')}
                className="border flex justify-center items-center rounded-full w-14 h-14 bg-black text-white"
              >
                <Upload />
              </div>
              )}
              {recordedChunks.length > 0 && (
                <div
                  onClick={handlePlayback}
                  className="border flex justify-center items-center rounded-full w-14 h-14 bg-black text-white"
                >
                  <Play />
                </div>
              )}
            </div>

            {/* Display captured image */}
            {capturedImage && (
              <div className="absolute top-0">
                <Button
                  onClick={() => setCapturedImage(null)}
                  className="absolute top-6 right-6"
                  variant={'destructive'}
                  size={'icon'}
                >
                  <X />
                </Button>
                <Image
                  src={capturedImage}
                  alt="Captured"
                  width={dimensions.width} // Dynamic image width
                  height={dimensions.height} // Dynamic image height
                />
              </div>
            )}
          </div>
        ) : null}
      </Modal>

      {/* Activities Section */}
      <Activities arr={dummyNewsArr} />
    </section>
  );
}

export default Page;
