import Image from 'next/image';
import TechButton from '../components/chip';
import Link from 'next/link';
import FreaturedCard from '../components/freaturedCard';
import Card from '../components/projects/card';
import SecondaryButton from '@/components/secondaryButton';
import Divider from '@/components/divider';

export default function Home() {
  const projectData = {
    "name": "Rock Paper Scissors",
    "image": "https://images2.imgbox.com/7a/6f/GRIOqqKR_o.png",
    "technologies": ["Tailwind", "JavaScript"],
    "github": "https://github.com/maximaizrw/Pieda_Papel_Tijera",
    "website": "https://pieda-papel-tijera.vercel.app/",
    "description": "A simple Rock Paper Scissors game implemented with HTML, CSS, and JavaScript. The player can select an option and compete against the computer in this classic game."
  };

  return (
    <>
      <section className='flex flex-col items-start gap-12 pb-14 pt-8 sm:pb-26 sm:pt-16 lg:flex-row lg:items-center lg:gap-20'>
        <Image src="/profile-img.webp" alt="Picture of the author" width={298} height={298} quality={100} className='h-44 w-44 rounded shadow-lg sm:h-72 sm:w-72' />
        <div className='flex flex-col gap-8'>
          <div className='flex flex-col'>
            <span className='text-custom-blue-3 font-fira text-base sm:text-lg'>Hi, my name is</span>
            <h1 className='mt-2 text-4xl font-semibold leading-tight sm:text-6xl'>Maximiliano Maiz</h1>
            <p className=' text-custom-gray-1 pt-4 text-lg'>Hello, my name is Maxi. I am currently studying University Technical Degree in Software Development at the University of Chubut, Argentina, where I am already 75% through the program. </p>
          </div>
          <div className='flex flex-wrap gap-2 items-center'>
            <TechButton techName="Html" />
            <TechButton techName="Javascript" />
            <TechButton techName="React" />
            <TechButton techName="Tailwind" />
            <TechButton techName="Next" />
          </div>
          <div className='font-fira flex gap-4 pt-8'>
            <Link href="/about" className="flex items-center justify-center px-7 h-14 bg-custom-blue-1 hover:bg-opacity-50 transition-colors duration-100 text-white rounded-md py-2">
              More about me
            </Link>
            <SecondaryButton text="Resume" href="/resume/english.pdf" download="resume-maximiliano-maiz.pdf" />
          </div>
        </div>
      </section>
      <Divider />
      <section className='py-14 !pb-0 sm:py-26'>
        <h2 className='text-3xl font-semibold leading-tight sm:text-5xl'>Freatured projects</h2>
        <div className="mt-14 flex flex-col gap-16 sm:gap-26">

          <FreaturedCard
            name={projectData.name}
            image={projectData.image}
            technologies={projectData.technologies}
            github={projectData.github}
            website={projectData.website}
            description={projectData.description}
          />
        </div>
      </section>
      <section className='flex flex-col py-14 sm:pb-26 sm:pt-36 [&>a]:mx-auto' >
        <h3 className='text-center text-2xl font-semibold sm:text-4xl'>Other projects</h3>
        <div className='mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 pb-16'>
          <Card />
          <Card />
          <Card />
          <Card />

        </div>
        <SecondaryButton text={"View all"} href="/projects" className="self-center" />
      </section>
      <Divider />
      <section className='py-14 sm:py-26'>
        <div className='flex flex-col items-center'>
          <h3 className='text-center text-3xl font-semibold leading-tight sm:text-5xl'>Get In Touch</h3>
          <p className=' text-custom-gray-1 mt-8 text-xl text-center leading-6 mb-10 sm:mb-14'>I&apos; m always open to chat, so please don&apos; hesitate contacting me! </p>
          <SecondaryButton text={"Say Hello"} href="malito:maximaizrw@gmail.com"/>
        </div>


      </section>
    </>
  )
}
