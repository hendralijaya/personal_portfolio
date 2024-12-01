'use client';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import magicIcon from '@iconify/icons-fa/magic';
import timesIcon from '@iconify/icons-fa/times';
import linkedinIcon from '@iconify/icons-fa/linkedin';
import mediumIcon from '@iconify/icons-fa/medium';
import githubIcon from '@iconify/icons-fa/github';
import Image from 'next/image';
import Link from 'next/link';
import { profile } from '@/public/assets';

const ProfilePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCurtains = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav
        id="nav"
        className={`absolute top-5 right-5 flex items-center justify-center p-4 bg-gradient-to-r from-pink-500 to-red-500 rounded-full shadow-lg transition-opacity duration-200 z-30 ${isOpen ? 'opacity-100' : 'opacity-0 hidden'}`}
      >
        <Link href="/" className="text-white text-lg px-4 py-2 rounded hover:bg-white hover:bg-opacity-20">
          Home
        </Link>
        <Link href="/projects" className="text-white text-lg px-4 py-2 rounded hover:bg-white hover:bg-opacity-20">
          Projects
        </Link>
      </nav>
      <div className="relative w-screen h-screen bg-gray-900 overflow-hidden">
        <button
          id="toggle"
          onClick={toggleCurtains}
          className="absolute top-5 left-1/2 transform -translate-x-1/2 z-30 p-4 text-lg text-white bg-gradient-to-r from-pink-500 to-red-500 rounded-full shadow-lg transition-transform duration-200 hover:bg-gradient-to-r hover:from-red-500 hover:to-pink-500 active:translate-y-1"
        >
          <Icon icon={isOpen ? timesIcon : magicIcon} />
        </button>
        <div
          className={`z-20 absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-red-800 to-red-900 shadow-inner transition-transform duration-200 ${isOpen ? '-translate-x-full' : 'translate-x-0'}`}
          style={{ boxShadow: 'inset 0 0 20px rgba(0, 0, 0, 0.8)' }}
        ></div>
        <div
          className={`z-20 absolute top-0 right-0 w-1/2 h-full bg-gradient-to-r from-red-800 to-red-900 shadow-inner transition-transform duration-200 ${isOpen ? 'translate-x-full' : 'translate-x-0'}`}
          style={{ boxShadow: 'inset 0 0 20px rgba(0, 0, 0, 0.8)' }}
        ></div>
        <div className={`relative z-10 flex items-center justify-center h-full text-white transition-opacity duration-200 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex w-full h-full justify-center items-center">
            <div className="w-1/2 text-center">
              <Image src={profile} alt="Your Image" width={400} height={400} className="rounded-full mx-auto" />
            </div>
            <div className="w-1/2 text-center items-center justify-center">
              <h1 className="text-3xl">Hendra Lijaya</h1>
              <p className="mt-2 text-xl">Junior Software Engineer</p>
              <div className="mt-4 flex justify-center space-x-4">
                <Link href="https://www.linkedin.com/in/hendra-lijaya/" target="_blank" className="text-white bg-blue-500 rounded-full p-4 shadow-lg transition-transform duration-200 hover:bg-blue-800">
                  <Icon icon={linkedinIcon} />
                </Link>
                <Link href="https://medium.com/@hendralijaya" target="_blank" className="text-white bg-white rounded-full p-4 shadow-lg transition-transform duration-200 hover:bg-gray-400">
                  <Icon icon={mediumIcon} className="text-black" />
                </Link>
                <Link href="https://github.com/hendralijaya" target="_blank" className="text-white bg-white rounded-full p-4 shadow-lg transition-transform duration-200 hover:bg-gray-400">
                  <Icon icon={githubIcon} className="text-black" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
