//This is home page, It will contains all the sections require in this page.

//Import all the require sections here
import HeroSection from "../Sections/Hero/index";
import Abouts from "../Sections/About/index";

import Services from "../Sections/Services/index";
import Testimonials from "../Sections/Testimonials/index";
import Contact from "../Sections/Contact/index";
import styled from "styled-components";
import Nearu from "../Sections/Nearu";
import About2 from "../Sections/About copy";
;



const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* position: relative; */
`;

const Home = () => {
  return (
    <Container>
      <HeroSection />
      <Testimonials />
      <Nearu/>
      <Abouts/>
      <About2/>
      <Contact />
    </Container>
  );
};

export default Home;
