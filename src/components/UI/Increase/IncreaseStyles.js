import styled from "styled-components";
import { motion } from "framer-motion";

export const IncreaseStyled = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: ${({ bgColor }) => bgColor || "black"};
  border-radius: 15px;
  font-size: 1.1rem;
  font-weight: 800;
  color: white;
  cursor: pointer;
  margin: 0;
  border: 2px solid white;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
