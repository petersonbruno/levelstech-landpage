"use client";

import Image from "next/image";
import TypingAnimator from 'react-typing-animator';
import Styles from "./Hero.module.css";

const Hero = () => {
  const textArray = [
    'Graphics Designer',
    'Web App Development',
    'Mobile App Development',
    'System Development',
  ];

  return (
    <section className="bg-pink-200 py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-4xl font-bold mb-4">
            Levels Pro Tech
            <div className="text-2xl text-gray-700">
              <TypingAnimator
                loop
                textArray={textArray}
                cursorColor="#333"
                textColor="#555"
                fontSize="24px"
                typingSpeed={60}
                delaySpeed={1000}
                height={'40px'}
                backspace
              />
            </div>
          </h1>
          <p className="text-lg mb-8">
            We specialize in system development, web app development, and mobile app development, delivering custom solutions to meet your business needs. Our expert team leverages the latest technologies to create seamless, innovative, and user-friendly applications. From concept to deployment, we ensure high-quality, scalable, and secure solutions for enterprises and startups alike. Partner with us to drive your digital transformation and achieve your business goals.
          </p>
          <button className="bg-blue-600 text-white py-3 px-6 rounded transition duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105 mt-4">
            Get A Quote
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <Image src="/assets/hero.svg" width={500} height={500} alt="Hero Image" className="max-w-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
