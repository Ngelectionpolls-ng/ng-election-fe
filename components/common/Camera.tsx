"use client";
import React, { forwardRef } from "react";
import Webcam, { WebcamProps } from "react-webcam";

// Use forwardRef to pass the ref down to the Webcam component
const Camera = forwardRef<Webcam, WebcamProps>(({ ...props }, ref) => {
  return <Webcam ref={ref} {...props} />;
});

Camera.displayName = "Camera"; // Optional: useful for debugging and development

export default Camera;
