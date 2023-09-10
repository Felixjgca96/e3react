import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

export const ContainerLinkStyled = styled(motion.div)``;

export const StyledLink = styled(Link)`
  padding: 10px;
  outline: none;
  border: none;
  border-radius: ${({ radius }) => `${radius}px`};
  background: black;
  text-transform: uppercase;
  font-weight: 400;
  cursor: pointer;
  z-index: 2;
  text-decoration: none;
  list-style: none;
  color: white;
  border: 2px solid white;

  & span {
    font-weight: 700;
    font-size: 1rem;
    color: white;
  }
`;
