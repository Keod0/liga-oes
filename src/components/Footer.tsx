import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="mt-8 mb-4 text-center text-sm text-gray-500 dark:text-gray-400">
    </footer>
  );
};

export default Footer;