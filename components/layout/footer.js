import Link from 'next/link'
import { CiLinkedin } from 'react-icons/ci'
import { AiFillGithub } from 'react-icons/ai'

const footer = () => {
  return (
    <footer className='font-inter flex gap-4 px-8 mb-32 lg:px-32 justify-center'>

        <p className='text-lg' >© Maximiliano Maiz 2023</p>
        <div className='flex gap-2'>
        <Link href='https://www.linkedin.com/in/maximilianomaiz/' target="_blank" rel="noopener noreferrer">
          <CiLinkedin className='w-6 h-6 cursor-pointer hover:text-custom-blue-3 transition-colors' />
        </Link>
        <Link href='https://github.com/maximaizrw' target="_blank" rel="noopener noreferrer">
          <AiFillGithub className='w-6 h-6 cursor-pointer hover:text-custom-blue-3 transition-colors' />
        </Link>
        </div>
        

    </footer>
  )
}

export default footer