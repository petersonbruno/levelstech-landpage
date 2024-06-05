import { Button } from ".";
import styles from "../style";
import Image from "next/image";

const About = () => (

  <section className="py-20 bg-white">
    <div className="container mx-auto flex flex-col md:flex-row flex-col-reverse items-center bg-white p-6 rounded-lg ">
      <div className="md:w-1/2 w-full mb-10 md:mb-0  p-4 rounded-lg">
        <img src="/assets/about.svg" alt="About Image" className="max-w-full h-auto" />
      </div>
      <div className="md:w-1/2 w-full text-center md:text-left px-4 bg-gray-100">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="text-lg mb-4">
          Crafting Tomorrow's Solutions Today: We're a dynamic software development company committed to innovation, excellence, and client satisfaction. With a passion for cutting-edge technology and a dedication to turning ideas into reality, we specialize in creating tailored software solutions that empower businesses to thrive in the digital age. Our team of skilled developers, designers, and strategists work collaboratively to deliver customized, scalable, and robust software products that meet the unique needs of our clients. From concept to deployment, we're your trusted partner on the journey to success in the ever-evolving landscape of technology.
        </p>
        <p className="text-lg mb-4">
          With years of experience in the industry, we offer a range of services designed to elevate your digital presence and drive your business forward.
        </p>
        <p className="text-lg mb-4">
          Our mission is to provide innovative solutions that meet the unique needs of our clients, ensuring their growth and success in the digital world.
        </p>
      </div>
    </div>
  </section>
);

export default About;