import styles from "../style";
import Image from "next/image";
import { Button } from ".";

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY} bg-hero`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px16 px-6`}>
      <div
        className=""
      >
        {/* <p className={`${styles.paragraph} ml-32 xs:ml-2`}>
          <span className="text-black pl-32 sm:pl-6">
            {" "}
            We are Levels tech digital agency
          </span>
        </p> */}
      </div>
      <div className="flex flex-row justify-start items-center w-full">
        <h1 className={`${styles.flexCenter} ${styles.heading2}font-semibold ss:text-[50px] ss:leading-[100px] text-blue-900 text-[30px] lg:pl-[20%]
        sm:pl-[10px]
        leading-[30px]`}>
          We get you when {" "}
          <br className="sm:block hidden"/>
          success needed
         
        </h1>
      </div>
      <p className={`${styles.paragraph} ml-2 lg:pl-[20%]`}>
        <span className="text-black ">
          We are Levels tech digital agency Check out what's new in the latest
          release of Kali Linux!
        </span>
      </p>
      <div className="ml-2 lg:pl-[20%] py-2">
        <Button name="Get Quote"/>
      </div>
    </div>
    <div>
      <Image
        src="/assets/hero.svg"
        alt="img"
        className={`${styles.flexCenter}`}
        width={500}
        height={500}
      />
    </div>
  </section>
);

export default Hero;
