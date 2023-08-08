import "@theme-toggles/react/css/Classic.css";
import { Classic } from "@theme-toggles/react";
import { useState } from 'react';
import Link from 'next/link';

const Nav = () => {
    const [isToggled, setToggle] = useState(true)
    return (
        <nav className="flex items-center gap-2 sm:gap-8">

            <Link href="/about" className='rounded-lg hover:bg-custom-dark-3 hover:text-custom-blue-3 transition-colors py-2 px-3'>
                About
            </Link>

            <Link href="/projects" className='rounded-lg hover:bg-custom-dark-3 hover:text-custom-blue-3 transition-colors py-2 px-4'>
                Projects
            </Link>

            <Classic className='rounded-lg hover:bg-custom-dark-3 hover:scale-150 duration-300 text-2xl' toggled={isToggled} toggle={setToggle} forceMotion />

        </nav>
    )
}

export default Nav