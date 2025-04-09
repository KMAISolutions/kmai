
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center px-4 md:px-6">
      <div className="absolute inset-0 bg-gradient-radial from-kwena-light-blue/10 to-transparent -z-10" />
      
      <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
        <div className="flex justify-center">
          <img 
            src="/lovable-uploads/dd7673c6-7d95-4322-9cd3-950eda5b5dfb.png" 
            alt="Kwena Moloto A.I Solutions Logo" 
            className="max-w-full h-auto w-auto md:w-auto"
          />
        </div>
        
        <div className="glass-card rounded-xl p-6 md:p-8 max-w-2xl mx-auto">
          <p className="text-lg md:text-xl">
            Ready to transform your business with AI? Get in touch with us today to discover how our solutions can drive growth and innovation.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 pt-6">
          <Button
            asChild
            className={cn(
              "bg-blue-gradient text-white border-none shadow-lg transition-all duration-300",
              "hover:shadow-xl hover:-translate-y-1"
            )}
          >
            <a href="#contact">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          
          <Button
            variant="outline"
            asChild
            className="border-kwena-blue text-kwena-blue bg-transparent hover:bg-kwena-blue/10 hover:-translate-y-1 transition-all duration-300"
          >
            <a href="#about">
              Learn More
            </a>
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <a 
          href="#about" 
          className="flex flex-col items-center text-kwena-dark-gray hover:text-kwena-blue transition-colors duration-300"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-current rounded-full mt-2 animate-pulse" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
