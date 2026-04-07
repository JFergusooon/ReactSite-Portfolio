import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

export default function ModernFooter() {
  const contactInfo = {
    address: {
      //line1: "Ferguson Software Solutions",
      line1: "",
      line2: "Dryden, VA",
      line3: "United States"
    },
    phone: "385-499-1578",
    email: "jfergusooon@gmail.com"
  };

  const socialLinks = [
    { icon: Github, url: "https://github.com/jfergusooon", label: "GitHub" },
    { icon: Linkedin, url: "https://www.linkedin.com/in/jeffrey-ferguson-dev/", label: "LinkedIn" }
  ];

  return (
    <footer className="bg-gray-700 border-t-8 border-gray-900">

      {/* Bottom Footer Bar */}
      <div className="bg-gray-900 py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-row items-center gap-4">
          {/* Copyright */}
          <div className="text-gray-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Jeffrey Ferguson - <a href="/" className="text-orange-400 hover:text-orange-300">Terms of Service</a>
          </div>

          {/* Social Media Links */}
          <div className="flex gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="bg-gray-700 hover:bg-orange-600 text-gray-300 hover:text-white p-3 rounded-full transition-all transform hover:scale-110"
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}