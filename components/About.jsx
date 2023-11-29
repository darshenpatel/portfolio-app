import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/headshot.jpg';
import { BsFillPersonLinesFill } from 'react-icons/bs';


const About = () => {
  return (
    <div id='about' className='w-full p-2 flex items-center py-3'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <h3 className='pb-4'>About</h3>
          <p>I am an adept Senior Product Manager with a unique background that seamlessly bridges healthcare aspirations and technological innovation. Having transitioned from the pursuit of medical school to embracing the dynamism of tech and entrepreneurship, I possess a rare blend of experiences. My expertise is further enriched by substantial involvement in supply chain management across two different startups. Now, I am poised to channel my skills and passion into a mission-driven role within the healthcare sector, eager to contribute to a company that aligns with my commitment to making a difference in people's lives through technology.</p>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-5 hover:scale-105 ease-in duration-300'>
          <Image className='rounded-md' src={AboutImg} alt=''/>
        </div>

        <div className='pb-6'>
          <a 
            href='/Darshen-Patel-Resume.pdf'
            download='Darshen-Patel-Resume.pdf'
          >
            <div className='flex items-center border-2 border-black p-2 rounded-md cursor-pointer hover:bg-gray-100 -mt-12'>
              <img width="30" height="30" src="https://img.icons8.com/ios/50/resume.png" alt="resume"/>
              <p className='ml-5'>Darshen Patel's Resume</p>
            </div>
          </a>
        </div>

      </div>
    </div>
  )
}

export default About