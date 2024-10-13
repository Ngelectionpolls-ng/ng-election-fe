"use client"
import Svg from '@/components/common/Svg'
import { SquareChevronLeft, CameraIcon, Upload, Play } from 'lucide-react'
import React, { Dispatch, useCallback } from 'react'
import VideoControl from './VideoControl'
import Webcam from 'react-webcam'

interface ControlProps {
  recordedChunks: Blob[];
  capturedImage: string | null;
  mediaStream: MediaStream | null;
  webcamRef: React.RefObject<Webcam>;
  postMode: 'camera' | 'inputResult' | 'post' | 'nil';
  setMediaStream: Dispatch<React.SetStateAction<MediaStream | null>>;
  setPostMode: Dispatch<React.SetStateAction<'camera' | 'inputResult' | 'post' | 'nil'>>;
  setCapturedImage: Dispatch<React.SetStateAction<string | null>>;
  handleUpload: (mediaType: 'image' | 'video') => Promise<void>;
  setPlaybackURL: Dispatch<React.SetStateAction<string | null>>;
  setVideoTimer: Dispatch<React.SetStateAction<string | null>>;
  setRecordedChunks: Dispatch<React.SetStateAction<Blob[]>>;
  facingMode: 'user' | { exact: "environment" }
}

export default function PictureAndVideoBtn({props}: {props: ControlProps}) {
  const capture = useCallback(() => {
    const imageSrc = props.webcamRef.current?.getScreenshot();
    if (imageSrc) {
      const blob = base64ToBlob(imageSrc);
      const objectURL = URL.createObjectURL(blob);
      props.setCapturedImage(objectURL); // Store the object URL instead of base64 string
    }
  }, [props.webcamRef]);

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

  const handlePlayback = () => {
    if (props.recordedChunks.length > 0) {
      const blob = new Blob(props.recordedChunks, { type: 'video/mp4' });
      const videoURL = URL.createObjectURL(blob);
      props.setPlaybackURL(videoURL); // Set URL for video playback
    }
  };

  const stopWebcamStream = () => {
    if (props.webcamRef.current?.stream) {
      const stream = props.webcamRef.current.stream;
      stream.getTracks().forEach((track) => track.stop());
    }
    if (props.mediaStream) {
      props.mediaStream.getTracks().forEach((track) => {
        track.stop();
      });
    }
    props.setMediaStream(null); // Reset media stream
    props.setPostMode('nil'); // Set postMode off state
  };
  
  return (
    <div
    className={`absolute bottom-0 w-full justify-center items-center flex-row flex gap-4 z-10
      ${props.postMode && 'py-6 px-2'}`}
  >
    <div
      className="bg-white flex justify-center items-center rounded-full w-16 h-16 text-black-500 text-2xl"
      onClick={() => stopWebcamStream()}
    >
      <SquareChevronLeft />
    </div>
    <div
      onClick={capture}
      className="border flex justify-center items-center rounded-full w-16 h-16 bg-white text-black-500"
    >
      <Svg width={'1.5rem'} height={'1.5rem'} SvgIcon={CameraIcon} />
    </div>
    <VideoControl
      mediaStream={props.mediaStream}
      setVideoTime={props.setVideoTimer}
      setRecordedChunks={props.setRecordedChunks}
    />
    {props.recordedChunks.length > 0 && (
      <div
        onClick={handlePlayback}
        className="border z-50 flex justify-center items-center rounded-full w-16 h-16 bg-black text-white"
      >
        <Play />
      </div>
    )}
  </div>
  )
}