import React from 'react';
import LinkButton from './LinkButton';
import { Link } from '../data/links';

interface LinkContainerProps {
  links: Link[];
}

const LinkContainer: React.FC<LinkContainerProps> = ({ links }) => {
  return (
    <div className="w-full max-w-md mx-auto">
      {links.map((link) => (
        <LinkButton key={link.id} link={link} />
      ))}
    </div>
  );
};

export default LinkContainer;