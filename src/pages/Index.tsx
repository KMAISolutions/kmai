
import React, { useEffect } from 'react';
import Sidebar from '@/components/Sidebar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import PortfolioSection from '@/components/PortfolioSection';
import ContactSection from '@/components/ContactSection';
import SocialIcons from '@/components/SocialIcons';

const Index = () => {
  // Add PWA capabilities
  useEffect(() => {
    // Register service worker for PWA
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').then(
          (registration) => {
            console.log('ServiceWorker registration successful');
          },
          (err) => {
            console.log('ServiceWorker registration failed: ', err);
          }
        );
      });
    }
  }, []);

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <main className="flex-grow lg:ml-60">
        <div className="fixed bottom-4 left-4 z-30 lg:hidden">
          <SocialIcons 
            vertical 
            className="bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg"
            iconSize={16}
          />
        </div>
      
        {/* Hero Section */}
        <Hero />
        
        {/* About Section */}
        <AboutSection />
        
        {/* Portfolio Section */}
        <PortfolioSection />
        
        {/* Contact Section */}
        <ContactSection />
        
        {/* Footer */}
        <footer className="bg-gradient-to-r from-kwena-blue to-kwena-dark-blue text-white py-8 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Kwena Moloto</h3>
                <p className="text-sm opacity-80">
                  AI Solutions for high-performance companies
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#home" className="hover:underline">Home</a></li>
                  <li><a href="#about" className="hover:underline">About Us</a></li>
                  <li><a href="#portfolio" className="hover:underline">Portfolio</a></li>
                  <li><a href="#contact" className="hover:underline">Contact</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Connect</h4>
                <SocialIcons className="mb-4" />
                <p className="text-xs opacity-70">
                  © {new Date().getFullYear()} Kwena Moloto AI Solutions.<br />
                  All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
