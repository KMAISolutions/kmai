
import React from 'react';
import { Award, Cpu, BarChart3, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

const features = [
  {
    icon: Cpu,
    title: "Advanced AI Solutions",
    description: "Leverage cutting-edge artificial intelligence to automate processes and gain valuable insights from your data."
  },
  {
    icon: BarChart3,
    title: "Performance Optimization",
    description: "Enhance your business operations with AI-driven analytics and decision-making tools."
  },
  {
    icon: Users,
    title: "Client-Focused Approach",
    description: "We work closely with your team to develop tailored solutions that address your specific challenges."
  },
  {
    icon: Award,
    title: "Industry Excellence",
    description: "Our innovative AI implementations have helped companies transform their operations and achieve measurable results."
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">About Us</h2>
          <p className="text-kwena-dark-gray max-w-3xl mx-auto">
            Kwena Moloto AI Solutions specializes in developing and implementing advanced artificial intelligence 
            technologies that empower high-performance companies to reach new heights of efficiency and innovation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={cn(
                "glass-card rounded-xl p-6 hover-scale",
                "border border-kwena-blue/10 hover:border-kwena-blue/30",
                "transition-all duration-300"
              )}
            >
              <div className="bg-blue-gradient rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <feature.icon className="text-white h-6 w-6" />
              </div>
              <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
              <p className="text-kwena-dark-gray text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 glass-card rounded-xl p-8 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h3>
              <p className="text-kwena-dark-gray mb-6">
                We are dedicated to making advanced AI technologies accessible and practical for businesses 
                across industries. Our team of experts works tirelessly to develop innovative solutions 
                that drive tangible results and create competitive advantages for our clients.
              </p>
              <p className="text-kwena-dark-gray">
                With a focus on excellence and continuous improvement, we ensure that our AI implementations 
                not only meet but exceed the expectations of the high-performance companies we serve.
              </p>
            </div>
            <div className="bg-blue-gradient rounded-xl p-6 text-white">
              <h3 className="text-2xl font-semibold mb-4">Why Choose Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-white/20 rounded-full p-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Customized AI solutions for your specific needs</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-white/20 rounded-full p-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Expertise in cutting-edge AI technologies</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-white/20 rounded-full p-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Proven track record of successful implementations</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-white/20 rounded-full p-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Ongoing support and continuous improvement</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
