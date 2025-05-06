import { InstagramIcon, TwitterIcon, GithubIcon, LinkedinIcon, GlobeIcon, MusicIcon } from 'lucide-react';

export interface Link {
  id: string;
  title: string;
  url: string;
  icon: React.ElementType;
  color: string;
  isCustom?: boolean;
}

export const socialLinks: Link[] = [
  {
    id: '1',
    title: 'Instagram',
    url: 'https://www.instagram.com/',
    icon: InstagramIcon,
    color: 'bg-gradient-to-r from-purple-500 to-pink-500',
  },
  {
    id: '2',
    title: 'Portfólio',
    url: 'https://keod0.github.io/portfolio/',
    icon: GlobeIcon,
    color: 'bg-gradient-to-r from-blue-500 to-purple-500',
    isCustom: true,
  },
  {
    id: '3',
    title: 'Twitter',
    url: 'https://twitter.com/Keodo4',
    icon: TwitterIcon,
    color: 'bg-sky-500',
  },
  {
    id: '4',
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/',
    icon: LinkedinIcon,
    color: 'bg-blue-700',
  },
  {
    id: '5',
    title: 'GitHub',
    url: 'https://github.com/Keod0',
    icon: GithubIcon,
    color: 'bg-gray-800',
  },
  {
    id: '6',
    title: 'TikTok',
    url: 'https://www.tiktok.com/@rapphaeeel',
    icon: MusicIcon,
    color: 'bg-black',
  }
];