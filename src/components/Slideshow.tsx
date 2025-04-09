
import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// Images for the slideshow
const slides = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80",
    alt: "Technology innovation",
    caption: "Cutting-edge AI Solutions"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80",
    alt: "Circuit board",
    caption: "Advanced Technology Integration"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80",
    alt: "Programming code",
    caption: "Custom AI Development"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80",
    alt: "Laptop with code",
    caption: "Innovative Business Solutions"
  },
];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    }
  };

  const goToSlide = (index: number) => {
    if (!isTransitioning && index !== currentIndex) {
      setIsTransitioning(true);
      setCurrentIndex(index);
    }
  };

  useEffect(() => {
    const transitionTimer = setTimeout(() => {
      setIsTransitioning(false);
    }, 600);

    return () => clearTimeout(transitionTimer);
  }, [currentIndex]);

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isTransitioning]);

  return (
    <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-xl shadow-xl">
      {/* Glass overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
      
      {/* Slides */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={cn(
              "absolute top-0 left-0 w-full h-full transition-all duration-500 ease-in-out",
              index === currentIndex ? "opacity-100 translate-x-0" : "opacity-0",
              index === (currentIndex + 1) % slides.length ? "translate-x-full" : "",
              index === (currentIndex - 1 + slides.length) % slides.length ? "-translate-x-full" : ""
            )}
          >
            <img
              src={slide.url}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
            
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white z-20">
              <h3 className="text-xl md:text-2xl font-bold">{slide.caption}</h3>
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/40 text-white rounded-full w-10 h-10"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/40 text-white rounded-full w-10 h-10"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
      
      {/* Dot indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-2.5 h-2.5 rounded-full transition-all duration-300",
              index === currentIndex ? "bg-white w-6" : "bg-white/50 hover:bg-white/80"
            )}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
