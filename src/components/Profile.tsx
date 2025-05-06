import React from 'react';
import { UserIcon, Languages } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface ProfileProps {
  name: string;
  bio: string;
  avatarUrl?: string;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Profile: React.FC<ProfileProps> = ({ 
  name, 
  bio,
  avatarUrl,
  isDarkMode,
  toggleDarkMode
}) => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'pt' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="flex flex-col items-center mb-8">
      {avatarUrl ? (
        <img 
          src={avatarUrl} 
          alt={name} 
          className="w-24 h-24 rounded-full border-4 border-white shadow-md mb-4 object-cover"
        />
      ) : (
        <div className="w-24 h-24 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-4 shadow-md">
          <UserIcon size={40} className="text-white" />
        </div>
      )}
      
      <h1 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
        {name}
      </h1>
      
      <p className="text-gray-600 dark:text-gray-300 text-center mb-6 max-w-xs">
        {t('bio')}
      </p>
      
      <div className="flex gap-2 mb-6">
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-200 focus:outline-none"
          aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {isDarkMode ? (
            <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg className="w-5 h-5 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          )}
        </button>
        <button
          onClick={toggleLanguage}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-200 focus:outline-none text-gray-800 dark:text-gray-200"
          aria-label={t('switchLanguage')}
          title={t('switchLanguage')}
        >
          <Languages size={20} />
        </button>
      </div>
    </div>
  );
};

export default Profile;