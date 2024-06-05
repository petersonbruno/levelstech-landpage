"use client";

import style from "./style";
import { Navbar, Hero, About, Partners, Project } from "./components";
import Footer from "./components/Footer";
import Testimonials from "./components/Testmonial";
import Meetings from "./components/Meeting";
import Collaboration from "./components/Collaboration";
import CTA from "./components/CTA";
import { Transition } from '@headlessui/react';
import { InView } from 'react-intersection-observer';

const Page = () => (
  <div className="bg-primary text-black overflow-hidden">
    <div className={`${style.paddingX} ${style.flexCenter}`}>
      <div className={`${style.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    <InView triggerOnce>
      {({ inView, ref }) => (
        <div ref={ref} className={`bg-hero ${style.flexStart}`}>
          <Transition
            show={inView}
            enter="transition-opacity duration-700"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-700"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className={`${style.boxWidth}`}>
            <Hero />
            </div>
          </Transition>
        </div>
      )}
    </InView>

    <InView triggerOnce>
      {({ inView, ref }) => (
        <div ref={ref} className={`bg-primary ${style.flexStart}`}>
          <Transition
            show={inView}
            enter="transition-opacity duration-700"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-700"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className={`${style.boxWidth}`}>
              <About />
            </div>
          </Transition>
        </div>
      )}
    </InView>

    <InView triggerOnce>
      {({ inView, ref }) => (
        <div ref={ref} className={`bg-primary ${style.flexStart}`}>
          <Transition
            show={inView}
            enter="transition-opacity duration-800"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-800"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className={`${style.boxWidth}`}>
              <Partners />
            </div>
          </Transition>
        </div>
      )}
    </InView>

    <InView triggerOnce>
      {({ inView, ref }) => (
        <div ref={ref} className={`bg-primary ${style.flexStart}`}>
          <Transition
            show={inView}
            enter="transition-opacity duration-900"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-900"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className={`${style.boxWidth}`}>
              <Project />
            </div>
          </Transition>
        </div>
      )}
    </InView>

    <InView triggerOnce>
      {({ inView, ref }) => (
        <div ref={ref} className={`bg-primary ${style.flexStart}`}>
          <Transition
            show={inView}
            enter="transition-opacity duration-1000"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-1000"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className={`${style.boxWidth}`}>
              <Meetings />
              <Collaboration />
            </div>
          </Transition>
        </div>
      )}
    </InView>

    <InView triggerOnce>
      {({ inView, ref }) => (
        <div ref={ref} className={`bg-primary ${style.flexStart}`}>
          <Transition
            show={inView}
            enter="transition-opacity duration-1100"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-1100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className={`${style.boxWidth}`}>
              <Testimonials />
            </div>
          </Transition>
        </div>
      )}
    </InView>

    <InView triggerOnce>
      {({ inView, ref }) => (
        <div ref={ref} className={`bg-primary ${style.flexStart}`}>
          <Transition
            show={inView}
            enter="transition-opacity duration-1200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-1200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className={`${style.boxWidth}`}>
              <CTA />
            </div>
          </Transition>
        </div>
      )}
    </InView>

    <div className={`bg-primary ${style.flexStart}`}>
      <div className={`${style.boxWidth}`}>
        <Footer />
      </div>
    </div>
  </div>
);

export default Page;
