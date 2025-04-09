
import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';

type SocialIconProps = {
  className?: string;
  iconSize?: number;
  vertical?: boolean;
};

const SocialIcons = ({ 
  className, 
  iconSize = 20, 
  vertical = false 
}: SocialIconProps) => {
  const icons = [
    { 
      name: 'LinkedIn', 
      Icon: Linkedin, 
      url: 'https://linkedin.com', 
      color: 'text-[#0077B5] hover:bg-[#0077B5]/10' 
    },
    { 
      name: 'Twitter', 
      Icon: Twitter, 
      url: 'https://twitter.com', 
      color: 'text-[#1DA1F2] hover:bg-[#1DA1F2]/10' 
    },
    { 
      name: 'Instagram', 
      Icon: Instagram, 
      url: 'https://instagram.com', 
      color: 'text-[#E4405F] hover:bg-[#E4405F]/10' 
    },
    { 
      name: 'Facebook', 
      Icon: Facebook, 
      url: 'https://facebook.com', 
      color: 'text-[#1877F2] hover:bg-[#1877F2]/10' 
    },
    { 
      name: 'WhatsApp', 
      Icon: MessageSquare, 
      url: 'https://whatsapp.com', 
      color: 'text-[#25D366] hover:bg-[#25D366]/10' 
    }
  ];

  return (
    <div 
      className={cn(
        vertical ? "flex flex-col space-y-4" : "flex space-x-4",
        className
      )}
    >
      {icons.map(({ name, Icon, url, color }) => (
        <a
          key={name}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "transition-all duration-300 rounded-full p-2",
            "hover:scale-110 hover:shadow-md",
            color
          )}
          aria-label={name}
        >
          <Icon size={iconSize} />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
