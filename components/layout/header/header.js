'use client'

import Link from 'next/link';
import Nav from './nav';

const Header = () => {

  return (
    <header className='fixed top-0 z-50 h-20 w-full border-b border-custom-gray-3 border-accent-border bg-[rgba(253,253,254,0.75)] backdrop-blur-md dark:bg-[rgba(19,22,32,0.75)]'>
      <div className='container flex h-full items-center justify-between'>
        <Link href="/" className="flex items-center gap-2 hover:scale-110 transition-all ">
          <div className="bg-custom-blue-2 p-1 w-8 h-8 rounded-lg flex items-center justify-center ">MM</div>
          <span className="hidden lg:block ">Maximiliano Maiz</span>
        </Link>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
