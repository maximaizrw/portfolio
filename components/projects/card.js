'use client'

import Image from 'next/image';
import Link from 'next/link'
import { AiFillGithub } from 'react-icons/ai'
import TechButton from "../chip"
import { ScrollingCarousel } from '@trendyol-js/react-carousel';

const card = () => {
    return (
        <div href={'/'} className='w-[300px] group overflow-hidden cursor-pointer transition duration-200 hover:scale-105'>
            <Image src="https://images2.imgbox.com/7a/6f/GRIOqqKR_o.png" alt="Picture of the author" width={320} height={200} className="object-cover group-hover:brightness-90" />
            <div className='bg-custom-dark-3 p-4 flex flex-col gap-y-4'>
                <div className='flex justify-between'>
                    <h2 className='text-lg font-semibold transition hover:text-custom-blue-3'>Project Name</h2>
                    <div className='flex items-center gap-x-2'>
                        <Link href='https://github.com/maximaizrw' target="_blank" rel="noopener noreferrer">
                            <AiFillGithub className='w-5 h-5 cursor-pointer hover:text-custom-blue-3 transition-colors' />
                        </Link>
                        <Link href='https://github.com/maximaizrw' target="_blank" rel="noopener noreferrer">
                            <AiFillGithub className='w-5 h-5 cursor-pointer hover:text-custom-blue-3 transition-colors' />
                        </Link>
                    </div>
                </div>
                <p className='text-custom-gray-1 line-clamp-3'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                </p>
                <div className='flex'>
                    <ScrollingCarousel>
                        <TechButton techName="Html" />
                        <TechButton techName="Javascript" />
                        <TechButton techName="Tailwind" />
                    </ScrollingCarousel>
                </div>
            </div>
        </div>
    )
}

export default card