import Chip from "./chip";
import Image from 'next/image';
import Link from 'next/link';

const freaturedCard = ({ name, image, technologies, website, description, direction }) => {
    return (
        <div className="relative flex justify-end">
            <Link href={website}>
                <div className="absolute top-[100px] -z-10 h-[216px] w-full overflow-hidden rounded border border-accent-border lg:relative lg:top-auto lg:z-auto lg:h-[328px] lg:w-[602px] ">
                    <Image
                        src={image}
                        alt={name}
                        sizes="100%"
                        layout="fill"
                        className="object-cover transition-transform hover:scale-105 lg:hover:transform-none"
                    />
                </div>
            </Link>
            <div className="flex w-full flex-col lg:absolute lg:top-1/2 lg:w-[430px] lg:-translate-y-1/2 items-start left-0">
                <Link href={website} className="hover:text-custom-blue-3 transition-colors">
                    <h3 className="text-2xl font-semibold leading-tight sm:text-3xl">
                        {name}
                    </h3>
                </Link>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                    {technologies.map((tech, index) => (
                        <Chip key={index} techName={tech} />
                    ))}
                </div>
                <div className="mt-40 w-[80vw] rounded bg-custom-dark-3 p-6 shadow-lg lg:mt-6 lg:w-auto text-left">
                    <p className="leading-normal">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default freaturedCard