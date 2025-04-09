
import React, { useState } from 'react';
import { Menu, Home, User, Briefcase, Mail, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type NavItem = {
  name: string;
  href: string;
  icon: React.ElementType;
};

const navItems: NavItem[] = [
  { name: 'Home', href: '#home', icon: Home },
  { name: 'About Us', href: '#about', icon: User },
  { name: 'Portfolio', href: '#portfolio', icon: Briefcase },
  { name: 'Contact Us', href: '#contact', icon: Mail },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleSidebar = () => setIsOpen(!isOpen);
  
  const handleNavClick = (section: string) => {
    setActiveSection(section);
    setIsOpen(false);
  };

  // Observer for scroll sections
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => {
      document.querySelectorAll('section[id]').forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 right-4 z-50 bg-white/70 backdrop-blur-md shadow-md lg:hidden"
        onClick={toggleSidebar}
      >
        {isOpen ? <X className="h-6 w-6 text-kwena-blue" /> : <Menu className="h-6 w-6 text-kwena-blue" />}
      </Button>

      {/* Sidebar overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transition-transform duration-300 ease-in-out lg:translate-x-0",
          isOpen ? "translate-x-0" : "translate-x-full lg:relative lg:w-60 lg:min-h-screen lg:flex lg:flex-col"
        )}
      >
        <div className="p-6 flex justify-between items-center border-b border-gray-200">
          <h2 className="text-xl font-bold text-gradient">Kwena AI</h2>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={toggleSidebar}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <nav className="py-6">
          <ul className="space-y-2 px-4">
            {navItems.map((item) => {
              const section = item.href.replace('#', '');
              return (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 rounded-md text-gray-700 hover:bg-kwena-light-gray hover:text-kwena-blue transition-colors duration-200",
                      activeSection === section && "sidebar-link-active"
                    )}
                    onClick={() => handleNavClick(section)}
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.name}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        
        <div className="mt-auto p-6 border-t border-gray-200">
          <div className="text-sm text-kwena-dark-gray">
            <p>© {new Date().getFullYear()} Kwena Moloto</p>
            <p>AI Solutions</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
