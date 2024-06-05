import React from "react";
import styles, { layout } from "../style";
import Image from "next/image";

const Meetings = () => (
  <section id="meeting" className={`${layout.sectionReverse} bg-slate-200`}>
    <div className={`${layout.sectionImgReverse}`}>
      <Image
        src="/assets/hero.svg"
        alt="img"
        className=""
        width={500}
        height={500}
      />
    </div>

    <div className={`${layout.sectionInfo}`}>
      <span className=" text-blue-900">Meeting</span>


      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        To create a meeting with a customer,
        start by defining the purpose and choosing a suitable platform.
        Propose several date and time options, then send a formal invitation
        with all relevant details. Prepare an agenda and materials,
        confirm the meeting a day prior, and conduct the meeting punctually.
        Afterward, send a summary and schedule any necessary follow-ups.
      </p>
    </div>
  </section>

);

export default Meetings;