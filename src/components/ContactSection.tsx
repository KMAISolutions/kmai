
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import SocialIcons from './SocialIcons';
import { Phone, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Form data
      const formData = new FormData(e.target as HTMLFormElement);
      const formValues = Object.fromEntries(formData.entries());
      
      // You would typically use a service like EmailJS or a backend API here
      // For now, we'll simulate sending an email
      console.log("Sending email to kwenamolotoai@gmail.com with content:", formValues);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message Sent",
        description: "Thank you for your message. We will get back to you shortly.",
      });
      
      // Reset form
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">Contact Us</h2>
          <p className="text-kwena-dark-gray max-w-3xl mx-auto">
            Ready to transform your business with AI? Get in touch with us today to discover how our solutions can drive growth and innovation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="glass-card rounded-xl p-8">
            <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <Input 
                    id="name" 
                    name="name"
                    placeholder="Your Name" 
                    required 
                    className="border-kwena-blue/20 focus:border-kwena-blue focus:ring-kwena-blue"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input 
                    id="email" 
                    name="email"
                    type="email" 
                    placeholder="your.email@example.com" 
                    required 
                    className="border-kwena-blue/20 focus:border-kwena-blue focus:ring-kwena-blue"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                <Input 
                  id="subject" 
                  name="subject"
                  placeholder="How can we help you?" 
                  required 
                  className="border-kwena-blue/20 focus:border-kwena-blue focus:ring-kwena-blue"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <Textarea 
                  id="message" 
                  name="message"
                  placeholder="Tell us about your project or inquiry..." 
                  required 
                  className="min-h-32 border-kwena-blue/20 focus:border-kwena-blue focus:ring-kwena-blue"
                />
                <input type="hidden" name="recipient" value="kwenamolotoai@gmail.com" />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-blue-gradient text-white border-none shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
          
          <div>
            <div className="glass-card rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="bg-blue-gradient rounded-full p-3 mr-4">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email Us</h4>
                    <p className="text-kwena-dark-gray">kwenamolotoai@gmail.com</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="bg-blue-gradient rounded-full p-3 mr-4">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Call Us</h4>
                    <p className="text-kwena-dark-gray">+27 71 796 3515</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="glass-card rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
              <p className="text-kwena-dark-gray mb-6">
                Follow us on social media to stay updated with the latest in AI technology and our newest solutions.
              </p>
              
              <SocialIcons className="justify-center" iconSize={24} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
