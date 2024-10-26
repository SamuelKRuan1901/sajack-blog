import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <section className='flex gap-24'>
      <div className='flex-1 flex flex-col gap-12 max-md:text-center max-md:items-center'>
        <h1 className='md:text-8xl text-6xl'>Creative Thoughts Agency.</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
          blanditiis adipisci minima reiciendis a autem assumenda dolore.
        </p>
        <div className='flex gap-5'>
          <button className='p-5 min-w-32 border-none rounded-md bg-blue-500 text-white'>
            Learn More
          </button>
          <Link
            href={'/contact'}
            className='p-5 min-w-32 border-none rounded-md bg-gray-200 text-black'
          >
            Contact
          </Link>
        </div>
        <div className='max-md:w-full h-12 relative'>
          <Image src={'/brands.png'} alt='brandImage' fill />
        </div>
      </div>
      <div className='flex-1 relative max-lg:hidden'>
        <Image src={'/hero.gif'} alt='heroImgae' fill></Image>
      </div>
    </section>
  );
}
