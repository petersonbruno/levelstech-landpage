import styles from "../style";
import Image from "next/image";

const About = () => (
  <section
    id="about"
    className={`flex md:flex-row flex-col ${styles.paddingY}`}
  >
    <div>
      <Image
        src="/assets/hero.svg"
        alt="img"
        className={`${styles.flexCenter}`}
        width={500}
        height={500}
      />
    </div>
    <div
      className="flex flex-row items-center py-[6px] px-0
      bg-slate-300 rounded-[10px] mb-2 
            "
    >
      <p className={`${styles.paragraph} ml-0 sm:pl-32`}>
        <span className="text-black  font-poppins ">
          Why do we use it? It is a long established fact that a reader will be
          distracted by the readable content of a page when looking at its
          layout. The point of using Lorem Ipsum is that it has a more-or-less
          normal
        </span>
      </p>
    </div>
  </section>
);

export default About;
