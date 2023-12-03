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
          <p>
            As an experienced Senior Product Manager, I have a diverse background that uniquely positions me at the intersection of healthcare, technology, and entrepreneurship. Initially aspiring towards a career in medicine, I shifted focus to harness the dynamic potential of technology and innovation. This transition has endowed me with a rare combination of insights and skills. My journey in the tech world has been marked by significant involvement in supply chain management, where I have played pivotal roles in two startups. This experience has not only honed my abilities in streamlining operation workflows but also given me a profound understanding of how to criticality and efficiently, handle the technical foundations for scale. My commitment lies in leveraging technology to make a tangible difference in people's lives. I am particularly interested in opportunities that align with my dedication to healthcare innovation, sustainable supply chain management, environmental stewardship, and educational advancement.
          </p>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-5 hover:scale-105 ease-in duration-300'>
          <Image className='rounded-md' src={AboutImg} alt=''/>
        </div>

        <div className='pb-6'>
          <a 
            href='/Darshen-Patel-Resume.pdf'
            download='Darshen-Patel-Resume.pdf'
          >
            <div className='flex items-center border-2 border-black p-2 rounded-md cursor-pointer hover:bg-gray-100 -mt-1'>
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