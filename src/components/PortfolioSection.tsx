
import React, { useState } from 'react';
import Slideshow from './Slideshow';
import { Button } from '@/components/ui/button';
import { ArrowRight, X } from 'lucide-react';
import { Dialog, DialogContent, DialogClose } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  category: string;
}

type ProjectWithCaseStudy = ProjectCardProps & {
  caseStudy: string;
}

const projects: ProjectWithCaseStudy[] = [
  {
    title: "Predictive Analytics Platform",
    description: "AI-driven analytics solution that helps businesses forecast trends and make data-driven decisions.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80",
    category: "Analytics",
    caseStudy: "Our client, a mid-sized retail chain, was struggling with inventory management and demand forecasting. We implemented a custom AI-driven analytics platform that analyzed historical sales data, market trends, and seasonal patterns.\n\nThe Result: Within 6 months, they reduced overstock by 34%, increased inventory turnover by 27%, and saw a 19% rise in quarterly profits. The platform continues to learn and improve, giving them a competitive edge in their market."
  },
  {
    title: "Intelligent Customer Service",
    description: "AI chatbot system that provides personalized customer support and automates routine inquiries.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80",
    category: "Customer Support",
    caseStudy: "A global SaaS company was facing scalability issues with their customer support team. Response times were increasing, and customer satisfaction was dropping. We developed an AI-powered customer service solution that could handle over 70% of routine inquiries.\n\nThe Result: Average response times decreased from 12 hours to under 30 minutes. Customer satisfaction scores improved by 42%, and the support team was able to focus on complex issues requiring human expertise. The system continuously improves through machine learning, adapting to new products and customer needs."
  },
  {
    title: "Supply Chain Optimization",
    description: "Machine learning solution that optimizes inventory management and supply chain operations.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80",
    category: "Operations",
    caseStudy: "A manufacturing company with international operations was experiencing significant inefficiencies in their supply chain. Delays, excess inventory, and communication issues were impacting their bottom line. We developed a comprehensive ML-based supply chain optimization system that integrated with their existing ERP.\n\nThe Result: Shipping delays reduced by 47%, inventory costs decreased by 31%, and overall supply chain efficiency improved by 28%. The AI system now provides predictive insights for potential disruptions and recommends proactive measures, ensuring smooth operations even during market volatility."
  }
];

const ProjectCard = ({ title, description, image, category, caseStudy }: ProjectWithCaseStudy) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
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
            onClick={() => setIsOpen(true)}
          >
            <span>View Case Study</span>
            <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] p-0 overflow-hidden">
          <div className="flex flex-col h-full">
            <div className="relative h-64 overflow-hidden">
              <img 
                src={image} 
                alt={title}
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <DialogClose className="absolute top-4 right-4 rounded-full bg-black/40 backdrop-blur-sm text-white p-2 hover:bg-black/60 transition-colors">
                <X className="h-5 w-5" />
              </DialogClose>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <span className="inline-block px-3 py-1 bg-kwena-blue/80 text-white text-xs font-semibold rounded-full mb-2">
                  {category}
                </span>
                <h2 className="text-2xl font-bold">{title}</h2>
              </div>
            </div>
            
            <ScrollArea className="flex-grow p-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Case Study</h3>
                {caseStudy.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="text-kwena-dark-gray">
                    {paragraph}
                  </p>
                ))}
              </div>
            </ScrollArea>
          </div>
        </DialogContent>
      </Dialog>
    </>
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
