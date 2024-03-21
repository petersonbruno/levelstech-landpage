import styles, { layout } from "../style";
import Image from "next/image";

const Collaboration = () => (
  <section id="meeting" className={`${layout.section} bg-slate-200 `}>
    <div className={`${layout.sectionInfo} ${styles.paddingX}`}>
      <span className=" text-blue-900">Collaboration</span>
      <h2 className={styles.heading2}>
        Stay up to date with new <br className="sm:block hidden" />
        business idea
      </h2>

      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
        of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
        Cicero, written in
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
