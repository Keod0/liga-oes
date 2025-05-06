import React, { useState, useEffect } from 'react';
import Profile from './components/Profile';
import LinkContainer from './components/LinkContainer';
import Footer from './components/Footer';
import AnimatedCube from './components/AnimatedCube';
import AnimatedLines from './components/AnimatedLines';
import { socialLinks } from './data/links';
import { useTranslation } from 'react-i18next';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    if (
      localStorage.theme === 'dark' || 
      (!('theme' in localStorage) && 
      window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50/80 dark:bg-gray-900/80 transition-colors duration-300 flex flex-col items-center backdrop-blur-sm">
      <AnimatedCube />
      <AnimatedLines />
      <div className="container px-4 py-12 max-w-xl mx-auto flex flex-col items-center">
        <Profile 
          name="Rafael Roldao" 
          bio={t('bio')}
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
        />

        <LinkContainer links={socialLinks} />
        
        <Footer />
        <div className="mt-8 text-sm text-gray-600 dark:text-gray-400 text-center">
          <p className="font-medium">Desenvolvido por Rafael Roldao®</p>
          <div className="mt-3 space-y-2">
            <p className="text-base font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Transforma a tua presença digital
            </p>
            <p className="text-sm italic">
              Entre em contato para criar o seu projeto personalizado
            </p>
            <a 
              href="https://github.com/yourusername/ligacoes" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              Ver no GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;