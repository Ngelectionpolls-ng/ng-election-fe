import { TrendIcon } from '@/public/assets/icons';
import { PencilIcon } from 'lucide-react';
import { CameraIcon } from 'lucide-react';
import React, { Dispatch } from 'react';

interface ButtonProps {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  setPostMode: Dispatch<React.SetStateAction<'camera' | 'inputResult' | 'post' | 'nil'>>;
};

export default function CIResultButtons({props}: {props: ButtonProps}) {
  return (
    <div
      className={`w-full h-full transition-all duration-300 z-10 origin-bottom-right fixed top-0 right-0 bg-[#D9D9D9] opacity-90 ${
        props.toggle
          ? 'animate-open-info'
          : 'opacity-0 invisible delay-700 animate-close-info'
      }`}
      onClick={() => props.setToggle(false)}
    >
      <ul
        className={` flex flex-col gap-4 items-end text-right absolute bottom-28 right-6 bg-[#D9D9D9]`}
      >
        <li
          className={`flex transition-all duration-500 items-center gap-3 ${
            props.toggle ? '' : 'delay-500 translate-y-44'
          }`}
          onClick={() => props.setPostMode('post')}
        >
          <span
            className={`transition-all ${
              props.toggle
                ? ' delay-500 translate-x-0'
                : 'delay-300 translate-x-9 opacity-0'
            }`}
          >
            Make a Post
          </span>
          <div className="p-2 text-sky-400 rounded-full bg-black">
            <PencilIcon className="w-6 h-6" />
          </div>
        </li>
        <li
          className={`flex transition-all duration-500 items-center gap-3 ${
            props.toggle ? '' : 'delay-500 translate-y-28'
          }`}
          onClick={() => props.setPostMode('camera')}
        >
          <span
            className={`transition-all ${
              props.toggle
                ? ' delay-500 translate-x-0'
                : 'delay-300 translate-x-9 opacity-0'
            }`}
          >
            Capture
          </span>
          <div className="p-2 text-sky-400 rounded-full bg-black">
            <CameraIcon className="w-6 h-6" />
          </div>
        </li>
        <li
          className={`flex transition-all duration-500 items-center gap-3 ${
            props.toggle ? '' : 'delay-500 translate-y-16'
          }`}
          onClick={() => props.setPostMode('inputResult')}
        >
          <span
            className={`transition-all ${
              props.toggle
                ? ' delay-500 translate-x-0'
                : 'delay-300 translate-x-9 opacity-0'
            }`}
          >
            Input Result
          </span>
          <div className="p-2 text-sky-400 rounded-full bg-black">
            <TrendIcon className="w-6 h-6" />
          </div>
        </li>
      </ul>
    </div>
  );
}
