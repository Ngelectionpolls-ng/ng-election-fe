'use client';
import { Button } from '@/components/ui/button';
import { X, Upload, SwitchCamera } from 'lucide-react';
import Image from 'next/image';
import React, { Dispatch } from 'react';

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
  return (
    <>
      {props.videoTimer && (
        <div className="flex gap-1 absolute top-6 mx-2">
          <div className="bg-red-600 text-red-600 rounded-full w-5 h-5" />
          <p>{props.videoTimer}</p>
        </div>
      )}
      {props.playbackURL && (
        <div className="absolute flex justify-center top-0 h-full left-0 bg-black w-full">
          <Button
            onClick={() => {
              props.setPlaybackURL(null);
              props.setRecordedChunks([]);
            }}
            className="absolute top-6 z-30 right-6"
            variant={'destructive'}
            size={'icon'}
          >
            <X />
          </Button>
          <video className="z-20 bg-black" src={props.playbackURL} controls />
          <div
            onClick={() => props.handleUpload('video')}
            className="absolute z-30 bottom-20 right-4 border flex justify-center items-center rounded-full w-14 h-14 bg-black text-white"
          >
            <Upload />
          </div>
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
      {props.capturedImage && (
        <div className="absolute h-full flex items-center top-0 left-0">
          <Button
            onClick={() => props.setCapturedImage(null)}
            className="absolute top-6 right-6"
            variant={'destructive'}
            size={'icon'}
          >
            <X />
          </Button>
          <Image
            alt="Captured"
            src={props.capturedImage}
            width={props.dimensions.width} // Dynamic image width
            height={props.dimensions.height} // Dynamic image height
          />
        </div>
      )}
    </>
  );
}
