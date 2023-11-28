import React from 'react';
import Link from 'next/link';
import {FaLinkedin, FaGithub, FaMedium, FaTwitter} from 'react-icons/fa';
import {AiOutlineClose, AiOutlineMail, AiOutlineMenu} from 'react-icons/ai';

const Main = () => {
  return (
    <div id='main' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-5 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-500'>Building Products</p>
            <h1 className='py-4 text-gray-600'>Darshen Patel</h1>
            <h4 className='py-2 text-gray-500'>Senior Product Manager</h4>
            <p classname='py-4 text-gray-700 max-w-[20%] m-auto'>
            </p>
            <container className='flex items-center justify-between max-w-[500px] m-auto py-4'>

                <a
                  href='https://www.linkedin.com/in/darshenpatel'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-300 m-2 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <FaLinkedin />
                  </div>
                </a>


                <a
                  href='https://www.github.com/darshenpatel'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-300 m-2 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <FaGithub />
                  </div>
                </a>


                <a
                  href='https://darshen.medium.com/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-300 m-2 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <FaMedium />
                  </div>
                </a>


                <a
                  href='https://twitter.com/darshenpatel'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-300 m-2 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <FaTwitter />
                  </div>
                </a>


                <a a href='mailto:darshen.patel10@gmail.com'>
                  <div className='rounded-full shadow-lg shadow-gray-300 m-2 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <AiOutlineMail />
                  </div>
                </a>

            </container>
        </div>
      </div>
    </div>
  )
}

export default Main