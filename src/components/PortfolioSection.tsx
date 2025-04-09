
import React from 'react';
import Slideshow from './Slideshow';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  category: string;
}

const projects: ProjectCardProps[] = [
  {
    title: "Predictive Analytics Platform",
    description: "AI-driven analytics solution that helps businesses forecast trends and make data-driven decisions.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80",
    category: "Analytics"
  },
  {
    title: "Intelligent Customer Service",
    description: "AI chatbot system that provides personalized customer support and automates routine inquiries.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80",
    category: "Customer Support"
  },
  {
    title: "Supply Chain Optimization",
    description: "Machine learning solution that optimizes inventory management and supply chain operations.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80",
    category: "Operations"
  }
];

const ProjectCard = ({ title, description, image, category }: ProjectCardProps) => {
  return (
    <div className="group glass-card rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
      </div>
      <div className="p-6">
        <span className="inline-block px-3 py-1 bg-kwena-light-blue/10 text-kwena-blue text-xs font-semibold rounded-full mb-3">
          {category}
        </span>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-kwena-dark-gray text-sm mb-4">{description}</p>
        <Button
          variant="ghost"
          size="sm"
          className="text-kwena-blue hover:text-kwena-dark-blue hover:bg-kwena-blue/10 p-0 flex items-center group"
        >
          <span>View Case Study</span>
          <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Button>
      </div>
    </div>
  );
};

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-20 px-4 md:px-8 bg-gradient-radial from-kwena-light-blue/5 to-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">Our Portfolio</h2>
          <p className="text-kwena-dark-gray max-w-3xl mx-auto">
            Explore our successful AI implementations that have transformed businesses across industries.
          </p>
        </div>
        
        <div className="mb-16">
          <Slideshow />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button
            className="bg-blue-gradient text-white border-none shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            View All Projects <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
