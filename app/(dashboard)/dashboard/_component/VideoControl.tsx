import { VideoOff } from 'lucide-react';
import { Video } from 'lucide-react';
import { useState, useRef } from 'react';
import Webcam from 'react-webcam';

function VideoControl({
  webcamRef,
  setVideoTime,
  setRecordedChunks,
}: {
  setRecordedChunks: React.Dispatch<React.SetStateAction<Blob[]>>;
  webcamRef: React.RefObject<Webcam>;
  setVideoTime: React.Dispatch<React.SetStateAction<string | null>>;
}) {
  const [isRecording, setIsRecording] = useState(false); // Track recording state
  // Ref for Webcam component
  const mediaRecorderRef = useRef<MediaRecorder | null>(null); // Ref for MediaRecorder
  const [timer, setTimer] = useState(0); // Timer for recording duration
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null); // Store interval ID for clearing

const handleStartRecording = () => {
    if (webcamRef.current?.stream) {
      // Clear previous recording chunks
      setRecordedChunks([]); // Reset chunks to start fresh recording

      mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
        mimeType: 'video/webm',
      });

      mediaRecorderRef.current.addEventListener('dataavailable', (event) => {
        if (event.data.size > 0) {
          setRecordedChunks((prev) => prev.concat(event.data)); // Collect new video chunks
        }
      });

      mediaRecorderRef.current.start(); // Start recording
      setIsRecording(true); // Update state to show recording status
      startTimer(); // Start the timer
    }
  };

  // Stop recording the video
  const handleStopRecording = () => {
    mediaRecorderRef.current?.stop(); // Stop the recorder
    setIsRecording(false); // Update state to stop recording
    stopTimer()
    setVideoTime(null)
  };

  // Start the timer when the recording starts
  const startTimer = () => {
    setTimer(0); // Reset the timer
    const id = setInterval(() => {
      setTimer((prev) => prev + 1); // Increment the timer every second
    }, 1000);
    setIntervalId(id); // Save interval ID to clear later
  };

  // Stop the timer when the recording stops
  const stopTimer = () => {
    if (intervalId) {
      clearInterval(intervalId); // Clear the interval
    }
  };

  // Format the timer (mm:ss)
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    isRecording && setVideoTime(`${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`);
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(
      2,
      '0',
    )}`;
  };

  return (
    <div>
      {/* Recording Timer */}
      {isRecording && (
        <div className="hidden">{formatTime(timer)}</div>
      )}
      {/* Recording Controls */}
      <div className="controls">
        {isRecording ? (
          <div
            onClick={handleStopRecording}
            className="border flex justify-center items-center rounded-full w-14 h-14 bg-black text-white"
          >
            <VideoOff />
          </div>
        ) : (
          <div
            onClick={handleStartRecording}
            className="border flex justify-center items-center rounded-full w-14 h-14 bg-black text-white"
          >
            <Video />
          </div>
        )}

        {/* Button for playback */}
        
      </div>

      {/* Video playback */}
    </div>
  );
}

export default VideoControl;
