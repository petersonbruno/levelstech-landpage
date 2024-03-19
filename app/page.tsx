import style from "./style";
import {Navbar, Hero, About, Partners, Project, Meetings, Collaboration, Testimonials} from "./components";

const page = () =>  (
    <div className="bg-primary text-black overflow-hidden">
      <div className={`${style.paddingX} ${style.flexCenter}`}>
        <div className={`${style.boxWidth}`}>
          <Navbar/>
        </div>
      </div>

      <div className={`${style.flexStart}`}>
        <div className={`${style.boxWidth}`}>
          <Hero/>
          <About/>
          <Partners/>
          <Project/>
          <Meetings/>
          <Collaboration/>
          <Testimonials/>

        </div>
      </div>

      

    </div>
  );


export default page
