import React from "react";
import styles, { layout } from "../style";
import Image from "next/image";

const CTA = () => (
  <section
    id="meeting"
    className={`${layout.section} ${styles.flexCenter} bg-blue-700 text-white p-30`}
  >
    <div className={`${layout.sectionInfo} ${styles.paddingX}`}>
      <span className=" ">Subscribe</span>
      <h2 className={`${styles.heading2} text-white`}>Let's work Together</h2>

      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-white`}>
        "Ready to elevate your IT solutions? Contact us now for expert support,
        innovative solutions, and seamless integration. Let's transform your
        technology challenges into opportunities for growth. Get in touch today!
      </p>

      <form action="#" className={` ${styles.paddingY} sm:flex sm:gap-4`}>
        <div className="sm:flex-1">
          <label htmlFor="email" className="sr-only">
            Email
          </label>

          <input
            type="email"
            placeholder="Email address"
            className="w-full rounded-md border-gray-200 divide-solid bg-white p-3 text-gray-700 ring-white-400 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-yellow-400"
          />
        </div>

        <button
          type="submit"
          className="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-blue-700 transition focus:outline-none focus:ring focus:ring-yellow-400 sm:mt-0 sm:w-auto"
        >
          <span className="text-sm font-medium"> Subscribe </span>

          <svg
            className="size-5 rtl:rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </button>
      </form>
    </div>
    <div className={`${layout.sectionImg}`}>
      <Image
        src="/assets/send-email.svg"
        alt="img"
        className=""
        width={500}
        height={500}
      />
    </div>
  </section>
);
export default CTA;
