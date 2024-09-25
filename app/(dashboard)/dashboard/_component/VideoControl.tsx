"use client"
import { VideoOff } from 'lucide-react';
import { Video } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import Webcam from 'react-webcam';

function VideoControl({
  webcamRef,
  setVideoTime,
  setRecordedChunks,
  facingMode,
}: {
  setRecordedChunks: React.Dispatch<React.SetStateAction<Blob[]>>;
  webcamRef: React.RefObject<Webcam>;
  setVideoTime: React.Dispatch<React.SetStateAction<string | null>>;
  facingMode: 'user' | { exact: "environment" };
}) {
  const [isRecording, setIsRecording] = useState(false); // Track recording state
  const mediaRecorderRef = useRef<MediaRecorder | null>(null); // Ref for MediaRecorder
  const [timer, setTimer] = useState(0); // Timer for recording duration
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null); // Store interval ID for clearing

  console.log(facingMode);

  const handleStartRecording = () => {
    // Check if the browser supports media devices
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({
          video: { facingMode: facingMode },
          audio: true,
        })
        .then((stream) => {
          // Set the stream for the webcam if not already set
          if (webcamRef.current) {
            webcamRef.current.stream = stream; // Attach the stream to the webcam reference
          }
  
          // Clear any previously recorded chunks
          setRecordedChunks([]); // Reset chunks to start fresh recording
  
          // Select the appropriate MIME type for recording
          const mimeType = MediaRecorder.isTypeSupported('video/mp4')
            ? 'video/mp4'
            : 'video/webm';
  
          // Initialize the MediaRecorder with the stream
          mediaRecorderRef.current = new MediaRecorder(stream, {
            mimeType: mimeType,
          });
  
          // Collect video data when available
          mediaRecorderRef.current.addEventListener('dataavailable', (event) => {
            if (event.data.size > 0) {
              setRecordedChunks((prev) => prev.concat(event.data)); // Collect new video chunks
            }
          });
  
          // Start recording
          mediaRecorderRef.current.start();
          setIsRecording(true); // Update state to show recording status
          startTimer(); // Start the recording timer
        })
        .catch((err) => {
          console.error('Error accessing media devices.', err);
          alert('Could not access camera and microphone. Please grant permissions.');
        });
    } else {
      console.error('Media devices not supported by this browser.');
      alert('Your browser does not support media devices.');
    }
  };
  

  const handleStopRecording = () => {
    // Stop the media recorder if it exists
    mediaRecorderRef.current?.stop(); 
  
    // Stop the video/audio tracks from the webcam stream
    if (webcamRef.current?.stream) {
      const stream = webcamRef.current.stream;
      stream.getTracks().forEach((track) => track.stop()); // Stop all tracks (video and audio)
    }
  
    setIsRecording(false); // Update state to stop recording
    stopTimer(); // Stop the timer
    setVideoTime(null); // Reset the video timer
  };
  

  const startTimer = () => {
    setTimer(0); // Reset the timer
    const id = setInterval(() => {
      setTimer((prev) => prev + 1); // Increment the timer every second
    }, 1000);
    setIntervalId(id); // Save interval ID to clear later
  };

  const stopTimer = () => {
    if (intervalId) {
      clearInterval(intervalId); // Clear the interval
    }
  };

  // Format the timer (mm:ss)
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(
      2,
      '0',
    )}`;
  };

  // Update video time whenever the timer changes
  useEffect(() => {
    if (isRecording) {
      setVideoTime(formatTime(timer));
    }
  }, [timer, isRecording, setVideoTime]);

  return (
    <div>
      {isRecording && <div className="hidden">{formatTime(timer)}</div>}
      <div className="controls">
        {isRecording ? (
          <div
            onClick={handleStopRecording}
            className="border flex justify-center items-center rounded-full w-16 h-16 bg-black text-white"
          >
            <VideoOff />
          </div>
        ) : (
          <div
            onClick={handleStartRecording}
            className="border flex justify-center items-center rounded-full w-16 h-16 bg-black text-white"
          >
            <Video />
          </div>
        )}
      </div>
    </div>
  );
}

export default VideoControl;
