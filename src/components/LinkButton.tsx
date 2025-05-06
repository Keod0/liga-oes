import React from 'react';
import { Link } from '../data/links';

interface LinkButtonProps {
  link: Link;
}

const LinkButton: React.FC<LinkButtonProps> = ({ link }) => {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center justify-between w-full px-6 py-4 mb-4 ${link.color} text-white rounded-xl font-medium 
                  transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100`}
    >
      <span className="text-lg">{link.title}</span>
      <link.icon size={24} />
    </a>
  );
};

export default LinkButton;