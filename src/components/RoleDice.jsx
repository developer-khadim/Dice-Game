import styled from "styled-components";
import { motion } from 'framer-motion';


const RoleDice = ({ roleDice, currentDice }) => {
  const diceVariants = {
    initial: { rotateX: 0, rotateY: 0, rotateZ: 0 },
    rolling: {
      rotateX: [0, 360, 720, 1080],
      rotateY: [0, 360, 720, 1080],
      rotateZ: [0, 360, 720, 1080],
      transition: {
        duration: 1,
        ease: "easeOut",
        times: [0, 0.2, 0.5, 1]
      }
    }
  };

  return (
    <DiceContainer>
      <motion.div 
        className="dice" 
        onClick={roleDice}
        variants={diceVariants}
        initial="initial"
        animate="rolling"
        whileTap="rolling"
      >
        <motion.img 
          src={`/images/dice/dice_${currentDice}.png`} 
          alt={`dice ${currentDice}`} 
        />
      </motion.div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

export default RoleDice;

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .dice {
    cursor: pointer;
  }
  p {
    font-size: 24px;
  }
`;