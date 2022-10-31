import styled from "styled-components";

const CARD = styled.div`
  height: calc(9rem + 12vw);
  width: calc(7rem + 12vw);
  background-color: var(--nav3);
  border-radius: 30px;
  position: relative;
  margin-top: calc(5rem + 5vw);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Image = styled.div`
  width: 90%;
  height: 70%;
  position:absolute;
  left: 50%;
  bottom: 25%;
  transform: translate(-50%);
  border-radius: 10%;
  background-color: red;
  background: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  filter: drop-shadow(0px 1px 23px var(--white));
`;

const TEXT = styled.h4`
  color: var(--white);
  padding: 1calc(2rem + 1vw);

  text-align: center;
  font-size: calc(0.6rem + 0.5vw);
`;

const NAME = styled.h3`
  color: var(--white);
  padding-top: 15rem;
  font-size: calc(0.5rem + 1.3vw);
`;

const Card = ({ name, text, image }) => {
  const Avatar = require(`../../assets/${image}.jpg`).default;

  return (
    <CARD>
      <Image img={Avatar} width="800" height="800" />
      <TEXT>{text}</TEXT>
      <NAME>{name}</NAME>
    </CARD>
  );
};

export default Card;
