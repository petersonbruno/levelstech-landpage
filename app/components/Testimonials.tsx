import React from "react";
import styles, { layout } from "../style";
import Image from "next/image";
import FAQ from "./FAQ";

const Card = () => (
  <section>
    <a
      href="#"
      className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
    >
      <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

      <div className="mt-4">
        <p className="text-pretty text-sm text-gray-500">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit
          illum provident a, ipsa maiores deleniti consectetur nobis et eaque.
        </p>
        
      </div>

      <dl className="mt-6 flex gap-4 sm:gap-6">
      <div className="hidden sm:block sm:shrink-0">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
            className="size-16 rounded-lg object-cover shadow-sm"
          />
        </div>

        <div className="flex flex-col">
          <h3 className="text-sm font-bold text-gray-600">Jonathan</h3>
          <span className="text-xs font-medium text-gray-500">Director</span>
        
        </div>
      </dl>
    </a>
  </section>
);
const Testimonials = () => (
  <section id="meeting" className={`${layout.section}`}>
    <div className={`${layout.sectionInfo} ${styles.paddingX}`}>
      <span className=" text-blue-900">Testimonial</span>
      <h2 className={styles.heading2}>What People say</h2>

      <div>
        <Card />
      </div>
    </div>
    <div
      className={`${layout.sectionInfo} ${styles.paddingX} ${styles.padding}`}
    >
      <span className=" text-blue-900">FAQ</span>
      <h2 className={styles.heading2}>Have any Questions?</h2>

      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        <FAQ />
      </p>
    </div>
  </section>
);

export default Testimonials;
