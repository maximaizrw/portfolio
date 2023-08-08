import React from 'react';
import { BiLogoJavascript, BiLogoTailwindCss } from 'react-icons/bi';
import { FaReact, FaNodeJs, FaHtml5, FaCss3 } from 'react-icons/fa';
import { TbBrandNextjs } from 'react-icons/tb';

const Chip = ({ techName }) => {
  const tech = techName.toLowerCase();
  const getIconForTech = (tech) => {
    switch (tech) {
      case 'react':
        return <FaReact className='w-4 h-4' />;
      case 'node':
        return <FaNodeJs className='w-4 h-4' />;
      case 'html':
        return <FaHtml5 className='w-4 h-4' />;
      case 'css':
        return <FaCss3 className='w-4 h-4' />;
      case 'javascript':
        return <BiLogoJavascript className='w-4 h-4' />;
      case 'tailwind':
        return <BiLogoTailwindCss className='w-4 h-4' />;
      case 'next':
        return <TbBrandNextjs className='w-4 h-4' />;
      default:
        return null;
    }
  };

  const icon = getIconForTech(tech);

  const hoverBgClasses = {
    react: 'hover:bg-blue-400 hover:bg-opacity-20 hover:text-blue-400 hover:border-blue-400 border-opacity-20',
    node: 'hover:bg-green-400 hover:bg-opacity-20 hover:text-green-400 hover:border-green-400 border-opacity-20',
    html: 'hover:bg-orange-400 hover:bg-opacity-20 hover:text-orange-400 hover:border-orange-400 border-opacity-20',
    css: 'hover:bg-purple-400 hover:bg-opacity-20 hover:text-purple-400 hover:border-purple-400 border-opacity-20',
    javascript: 'hover:bg-yellow-400 hover:bg-opacity-20 hover:text-yellow-400 hover:border-yellow-400 border-opacity-20',
    tailwind: 'hover:bg-blue-400 hover:bg-opacity-20 hover:text-blue-400 hover:border-blue-400 border-opacity-20',
    next: 'hover:bg-white hover:bg-opacity-20 hover:text-white hover:border-white border-opacity-20',
  };



  const hoverBg = hoverBgClasses[tech];

  return (
    <div
      className={`flex items-center justify-center gap-1 rounded-full border border-custom-gray-1 p-3 font-fira text-sm leading-none hover:scale-105 transition-opacity duration-300 ${hoverBg} `}
    >
      <div className='text-white'>
        {icon}
      </div>

      <span
        className={`text-opacity-100 `}
      >
        {techName}
      </span>
    </div>
  );
};

export default Chip;
