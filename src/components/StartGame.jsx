import styled from "styled-components";
import { Button } from "../styled/Button";
import Nav from "./nav";

const StartGame = ({ toggle }) => {
  return (
    <>
    <Nav/>
    <Container>
      
      <div className="image-container">
        <img src="/images/dices.png" alt="Dice" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
    </>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 20px ;

  .image-container {
    width: 100%;
    max-width: 400px;
    margin-bottom: 40px;

    img {
      width: 100%;
      height: auto;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    
    h1 {
      font-size: clamp(36px, 5vw, 72px);
      font-weight: 700;
      white-space: nowrap;
      margin-bottom: 20px;
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;
    height: 80vh;
    .image-container {
      width: 45%;
      max-width: none;
      margin-bottom: 0;
    }

    .content {
      width: 45%;
      align-items: flex-end;
      text-align: right;

      h1 {
        font-size: clamp(48px, 6vw, 96px);
      }
    }
  }

  @media (min-width: 1024px) {
    .content h1 {
      font-size: clamp(60px, 8vw, 96px);
    }
  }
`;