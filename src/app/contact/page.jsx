import Image from 'next/image';
// import { useEffect, useState } from "react";

export const metadata = {
  title: 'Contact Page',
  description: 'Contact description'
};

const ContactPage = () => {
  return (
    <section className='flex items-center gap-24'>
      <div className='flex-1 relative h-[550px] max-md:hidden'>
        <Image
          src={'/contact.png'}
          alt='contactImage'
          fill
          className='object-contain'
        />
      </div>
      <div className='flex-1'>
        <form action='' className='flex flex-col gap-5'>
          <input type='text' placeholder='Name and Surname' />
          <input type='text' placeholder='Email Address' />
          <input type='text' placeholder='Phone Number (Optional)' />
          <textarea
            name=''
            id=''
            cols={'30'}
            rows={'10'}
            placeholder='Message'
          ></textarea>
          <button className='p-5 bg-blue-700 font-bold rounded-md'>Send</button>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
