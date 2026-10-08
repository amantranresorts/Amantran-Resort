"use client";
import React, { useState, useEffect } from 'react';
import LoadingPage from './LoadingPage';

const PageLoaderWrapper = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    
    if (document.readyState === "complete") {
      setIsLoaded(true);
    } else {
      
      const handleLoad = () => setIsLoaded(true);
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  
  return (
    <>
      { !isLoaded ? <LoadingPage /> : children }
    </>
  );
};

export default PageLoaderWrapper;