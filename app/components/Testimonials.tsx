import React from "react";
import styles, { layout } from "../style";
import Image from "next/image";
import FAQ from "./FAQ";

const Card = () => (
  <section>
    <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
      praesentium natus sapiente commodi. Aliquid sunt tempore iste repellendus
      explicabo dignissimos placeat, autem harum dolore reprehenderit quis! Quo
      totam dignissimos earum
    </p>
  </section>
);
const Testimonials = () => (
  <section id="meeting" className={`${layout.section}`}>
    <div className={`${layout.sectionInfo} ${styles.paddingX}`}>
      <span className=" text-blue-900">Testimonial</span>
      <h2 className={styles.heading2}>
        What People say
      </h2>

      <div>
        <Card />
      </div>
    </div>
    <div className={`${layout.sectionInfo} ${styles.paddingX} ${styles.padding}`}>
      <span className=" text-blue-900">FAQ</span>
      <h2 className={styles.heading2}>
           Have any Questions?
      </h2>

      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      <FAQ/>
      </p>
    </div>
  </section>
);

export default Testimonials;
