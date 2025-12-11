'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageCarouselProps {
  images: string[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export default function ImageCarousel({ images, autoPlay = true, autoPlayInterval = 5000 }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Get basePath from window location or use empty string
  const getImageSrc = (imagePath: string) => {
    if (typeof window === 'undefined') return imagePath;
    // Check if we're on GitHub Pages subdirectory
    const pathname = window.location.pathname;
    const basePath = pathname.startsWith('/hjff-website') ? '/hjff-website' : '';
    // Ensure image path starts with / and combine with basePath
    const cleanPath = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
    return `${basePath}${cleanPath}`;
  };

  useEffect(() => {
    if (!autoPlay || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (!images || images.length === 0) {
    return (
      <div className="w-full h-full bg-neutral-200 rounded-xl flex items-center justify-center">
        <p className="text-neutral-500">No images available</p>
      </div>
    );
  }

  return (
      <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl">
      {/* Main Image */}
      <div className="relative w-full h-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px]">
        <img
          src={getImageSrc(images[currentIndex])}
          alt={`Image ${currentIndex + 1} of ${images.length}`}
          className="w-full h-full object-cover"
          loading={currentIndex === 0 ? 'eager' : 'lazy'}
          onError={(e) => {
            // Fallback if image fails to load
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            console.error('Failed to load image:', images[currentIndex]);
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-primary-600 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110 z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-primary-600 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110 z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? 'bg-white w-8'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Image Counter */}
      {images.length > 1 && (
        <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium z-10">
          {currentIndex + 1} / {images.length}
        </div>
      )}
    </div>
  );
}
