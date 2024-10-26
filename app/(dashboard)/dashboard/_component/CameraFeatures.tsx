'use client';
import FormControl from '@/components/common/FormControl';
import { Button } from '@/components/ui/button';
import { Pause } from 'lucide-react';
import { Play } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import { Upload, SwitchCamera, RefreshCcwDot } from 'lucide-react';
import Image from 'next/image';
import React, { Dispatch, useRef, useState } from 'react';

interface CameraFeaturesProps {
  videoTimer: string | null;
  playbackURL: string | null;
  capturedImage: string | null;
  dimensions: { width: number; height: number };
  setRecordedChunks: Dispatch<React.SetStateAction<Blob[]>>;
  setPlaybackURL: Dispatch<React.SetStateAction<string | null>>;
  setCapturedImage: Dispatch<React.SetStateAction<string | null>>;
  handleUpload: (mediaType: 'image' | 'video') => Promise<void>;
  switchCamera: () => void;
}

export default function CameraFeatures({ props }: { props: CameraFeaturesProps }) {
  const [close, setClose] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      {props.videoTimer && (
        <div className="flex gap-1 absolute bg-black rounded-md p-2 text-white top-6 mx-2">
          <div className="bg-red-600 text-red-600 rounded-full w-5 h-5" />
          <p>{props.videoTimer}</p>
        </div>
      )}
      <div
        onClick={props.switchCamera}
        className={`border flex justify-center items-center rounded-full 
          w-14 h-14 bg-white text-black-500 absolute top-3 right-3
          ${(props.playbackURL || props.capturedImage) && 'hidden'}`}
      >
        <SwitchCamera />
      </div>
      {props.playbackURL || props.capturedImage ? (
        <div className="absolute h-full w-full flex flex-col justify-center top-0 left-0">
          {props.playbackURL ? (
            <>
              <video
                ref={videoRef}
                controls={false} 
                src={props.playbackURL}
                onClick={togglePlayPause}
                className="bg-black h-full w-full"
                onContextMenu={(e) => e.preventDefault()} 
              />
              <div className='w-full absolute bottom-10 flex justify-center'>
              <Button onClick={togglePlayPause}
                className='flex justify-center items-center rounded-full w-16 h-16 bg-black text-white'>
                {isPlaying ? <Pause /> : <Play />}
              </Button>
              </div>
            </>
          ) : (
            <Image
              alt="Captured"
              src={props.capturedImage ?? ''}
              width={props.dimensions.width} // Dynamic image width
              height={props.dimensions.height} // Dynamic image height
              onContextMenu={(e) => e.preventDefault()} 
            />
          )}
          <div className={`bg-black transition-all text-accent w-full absolute bottom-0 z-10 p-4 flex flex-col gap-1 
            ${close ? 'translate-y-[7.5rem]' : ''}`}>
            <FormControl
              as="input"
              placeholder="Add a caption here"
              labelText="Caption"
            />
            <Button
              onClick={() => setClose(prev => !prev)}
              className={`z-50 absolute w-7 h-7 bg-black border-none rounded-sm bottom-32 right-6`}
              size={'icon'}
              variant={'outline'}
            >
              <ChevronDown />
            </Button>
            <div className="flex gap-1">
              <Button
                onClick={() => {
                  props.setPlaybackURL(null);
                  props.setRecordedChunks([]);
                  props.setCapturedImage(null);
                }}
                className="flex gap-1 text-black rounded-sm"
                variant={'outline'}
              >
                <RefreshCcwDot /> reset
              </Button>
              <Button
                onClick={() =>
                  props.handleUpload(props.playbackURL ? 'video' : 'image')
                }
                className="flex gap-1 rounded-sm"
                variant={'default'}
              >
                <Upload /> Post
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
