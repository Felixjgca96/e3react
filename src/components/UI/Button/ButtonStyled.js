import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const StyledButton = styled(motion.button)`
  padding: 7px;
  outline: none;
  border: none;
  border-radius: ${({ radius }) => `${radius}px`};
  background: black;
  color: white;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  border: 2px solid white;
  &:hover {
    background: #252525;
  }

  &:disabled {
    cursor: not-allowed;
    background: #252525;
    color: black;
    border: 2px solid black;
  }
  ${({ secondary }) =>
    secondary &&
    css`
      background: black;
    `}
`;
