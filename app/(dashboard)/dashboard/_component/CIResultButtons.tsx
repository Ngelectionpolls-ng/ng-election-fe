import { TrendIcon } from '@/public/assets/icons';
import { CameraIcon } from 'lucide-react';
import React from 'react';

type Props = {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  toggleCamera: () => void;
  toggleInputResult: () => void;
};

export default function CIResultButtons({
  toggle,
  setToggle,
  toggleCamera,
  toggleInputResult,
}: Props) {
  return (
    <div
      className={`w-full h-full transition-all duration-300 z-10 origin-bottom-right fixed top-0 right-0 bg-[#D9D9D9] opacity-90 ${
        toggle
          ? 'animate-open-info'
          : 'opacity-0 invisible delay-700 animate-close-info'
      }`}
      onClick={() => setToggle(false)}
    >
      <ul
        className={` flex flex-col gap-4 items-end text-right absolute bottom-28 right-6 bg-[#D9D9D9]`}
      >
        <li
          className={`flex transition-all duration-500 items-center gap-3 ${
            toggle ? '' : 'delay-500 translate-y-28'
          }`}
          onClick={toggleCamera}
        >
          <span
            className={`transition-all ${
              toggle
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
            toggle ? '' : 'delay-500 translate-y-16'
          }`}
          onClick={toggleInputResult}
        >
          <span
            className={`transition-all ${
              toggle
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
