import React from "react";
import { useState, useEffect } from "react";
import { useReadingProgress } from "../../hooks/useReadingProgress";

const Progress = () => {
  const completion = useReadingProgress();
  return (
    <span
      className="border-b-4 top-0 h-1 w-full border-blue-400 fixed"
      style={{ transform: `translateX(${completion - 100}%)` }}
    ></span>
  );
};

export default Progress;
