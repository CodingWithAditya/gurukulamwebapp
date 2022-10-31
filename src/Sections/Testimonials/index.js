import React, { lazy } from "react";
import styled from "styled-components";
import Asset from "../../assets/Assetd.png";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

const Card = lazy(() => import("../../components/Card/index"));

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
  font-size: calc(1rem + 1.5vw);
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
  width: 90vw;
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

const Testimonials = () => {
  const settings = {
   
    infinite: false,
    autoplay:false,

    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 3,
  };

  return (
    <Section id="best">
      <Title>श्रीनिवास सेवार्थ न्यास </Title>
      <Carousal>
        <Slider {...settings}>
          <Card
            text=""
            name="गौशाला "
            image="Gaushala"
          />

          <Card
            text=""
            name="डिस्पेंसरी"
            image="Dispencery"
          />

          <Card
            text=""
            name="हार्ट क्लिनिक "
            image="Heart"
          />

          <Card
            text=""
            name="गरीब कन्या विवाह "
            image="vivah"
          />

          </Slider>
      </Carousal>
    </Section>
  );
};

export default Testimonials;
