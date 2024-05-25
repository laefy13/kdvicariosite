'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import '/public/css/global.css';
import Title from './modules/title';
import dynamic from 'next/dynamic';
import ProfileFooter from './modules/profileFooter';
import TailwWindButton from './modules/tailwindButton';
import { Suspense } from 'react';
import Loading from './modules/loading';
import TypingEffect from './modules/typewriter';

const Resume = dynamic(() => import('./modules/resume'));
import { motion, AnimatePresence } from 'framer-motion';
import NavBar from './modules/navBar';

export default function Page() {
  const [isMainMobile, setMainMobile] = useState(true);
  const toggleChangeMobile = () => {
    setMainMobile(!isMainMobile);
  };

  return (
    <Suspense fallback={<Loading />}>
      <main
        className="flex min-h-screen flex-col scroll-smooth"
        style={{
          background: 'linear-gradient(to left, #F0A500 65%, #082032 35%)',
        }}
      >
        <NavBar />
        <section>
          <div className="relative flex h-full items-center justify-center">
            <div className="main-container">
              <motion.div
                className="profile-container"
                style={{ width: isMainMobile ? '' : '285px' }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1 }}
              >
                <button
                  onClick={toggleChangeMobile}
                  type="button"
                  className="switch-main absolute inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-black md:hidden"
                >
                  <svg
                    className="h-6 w-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m16 10 3-3m0 0-3-3m3 3H5v3m3 4-3 3m0 0 3 3m-3-3h14v-3"
                    />
                  </svg>
                </button>
                <div
                  className={`profile flex justify-center ${
                    isMainMobile ? '' : 'hidden'
                  }`}
                >
                  <Image
                    src="https://kdvicario.blob.core.windows.net/img/karlos.png"
                    alt=""
                    className="profile-image"
                    width={175}
                    height={175}
                    unoptimized={true}
                    placeholder="blur"
                    blurDataURL="https://kdvicario.blob.core.windows.net/img/karlos-blur.png"
                  />
                </div>
                <div
                  className={`profile-title ${isMainMobile ? '' : 'hidden'}`}
                >
                  <Title
                    title="Karlos<>Daniel C.<>Vicario"
                    size={2}
                    mb={1}
                    color="white"
                    additional="text-center"
                  />
                  <div className="mx-auto w-1/4">
                    <div className="mb-4 border-t-4 border-sky-500" />
                  </div>

                  <div className="mb-0 text-center text-2xl font-extrabold leading-none tracking-tight text-gray-900 sm:text-2xl  md:text-2xl lg:text-2xl  dark:text-white">
                    BSCS STUDENT
                  </div>
                </div>

                <p className={`${isMainMobile ? 'hidden' : ''}`}>
                  Future Computer Science graduate with knowledge of various
                  programming languages such as Python PHP, JS and etc. Willing
                  to learn new things. Fast in doing tasks and hard working. Can
                  work within a team but can also work independently. Good time
                  management. Can speak and write in English and Filipino.
                </p>

                <ProfileFooter />
              </motion.div>
              <div className="main-content">
                <TypingEffect
                  text="Hello!"
                  cName="main-text mb-5 text-5xl font-extrabold leading-none tracking-tight text-gray-900 sm:text-4xl  md:text-5xl lg:text-5xl  dark:text-white"
                />

                <div className="main-buttons mb-5">
                  <TailwWindButton linkTo="#resume" name="Resume" />
                  <TailwWindButton
                    linkTo="#projects"
                    name="Projects"
                    delay={0.2}
                  />
                </div>

                <TypingEffect
                  text="Future Computer Science graduate with knowledge of various
                  programming languages such as Python PHP, JS and etc. Willing
                  to learn new things. Fast in doing tasks and hard working. Can
                  work within a team but can also work independently. Good time
                  management. Can speak and write in English and Filipino."
                />
              </div>
            </div>
          </div>
        </section>

        <Resume />
      </main>
    </Suspense>
  );
}
