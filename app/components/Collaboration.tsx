import styles, { layout } from "../style";
import Image from "next/image";

const Collaboration = () => (
  <section id="meeting" className={`${layout.section} bg-slate-200 `}>
    <div className={`${layout.sectionInfo} ${styles.paddingX}`}>
      <span className=" text-blue-900">Collaboration</span>

      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        We collaborate through a
        comprehensive process starting with an initial
        consultation to understand your needs. We then move to
        requirement analysis, design, and planning, followed by
        iterative development using agile methodologies. After rigorous
        testing, we deploy and integrate the solution, providing ongoing
        support and maintenance to ensure continuous improvement and optimal
        performance.
      </p>
    </div>
    <div className={`${layout.sectionImg}`}>
      <Image
        src="/assets/about.svg"
        alt="img"
        className=""
        width={500}
        height={500}
      />
    </div>
  </section>
);
export default Collaboration;