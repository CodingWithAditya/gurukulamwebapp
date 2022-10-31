import React, { lazy } from "react";
import styled from "styled-components";
import Asset from "../../assets/Asset3.png"
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

const CARD = lazy(() => import("../../components/Card About Us/index"));

const Section = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${Asset});
 
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0rem 0;
`;

const Title = styled.h1`
  color: #0a0b10;
  display: inline-block;
  font-size: calc(2rem + 1.5vw);
  margin-top: 2.5rem;
  margin-bottom:-5rem;
  position: relative;
  &::before {
    content: "";
    height: 1px;
    width: 50%;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0.5rem);
    /* or 100px */
    border-bottom: 2px solid var(--purple);
  }
`;

const Carousal = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only Screen and (max-width: 40em) {
    width: 90vw;
    .slick-slider .slick-arrow {
      display: none;
    }
  }
  .slick-slider .slick-arrow:before {
    color: #0a0b10;
    font-size: 1.5rem;
    @media only Screen and (max-width: 40em) {
      display: none;
    }
  }
  .slick-slider .slick-dots button:before {
    color: #0a0b10;
    font-size: 1.5rem;
  }
  .slick-slide.slick-active {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0;
    padding: 0;
    margin-bottom: 3rem;
  }
`;

const Abouts = () => {
  const settings = {
   
    infinite: true,
    autoplay:true,

    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Section id="aboutus">
      <Title>About Us</Title>
      <Carousal>
        <Slider {...settings}>
        
           <CARD
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,."
            name="Guruji "
            image="avtar-9"
          />
          <CARD
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
            name="acharya ji"
            image="avtar-9"
          />
         
          
        
          
          </Slider>
      </Carousal>
    </Section>
  );
};

export default Abouts;
