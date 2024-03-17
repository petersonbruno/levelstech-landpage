import styles from "../style";
import Image from "next/image";

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px16 px-6`}>
      <div
        className="flex flex-row items-center py-[6px] px-4
            bg-hero rounded-[10px] mb-2 
            "
      >
        <p className={`${styles.paragraph} ml-2 pt-16 sm:pl-32`}>
          <span className="text-black font-poppins ">
            {" "}
            We are Levels tech digital agency
          </span>
        </p>

        
      </div>
      <div className="flex flex-row justify-between items-center w-full">
            <h1 className="font-poppins font-semibold ss:text-[50px] ss:leading-[100px] text-blue-900 text-[30px] sm:pl-32">
                We get you when 
                <br />
                success needed
            </h1>
        </div>
        <p className={`${styles.paragraph} ml-2`}>
          <span className="text-black font-poppins sm:pl-32 pb-32">
            {" "}
            We are Levels tech digital agency Check out what's new in the latest release of Kali Linux!
          </span>
        </p>
        
    </div>
    <div>
       <Image src="/assets/hero.svg" alt="img"
      className={`${styles.flexCenter}`}
      width={500}
      height={500}
       />
    </div>
  </section>
);

export default Hero;
