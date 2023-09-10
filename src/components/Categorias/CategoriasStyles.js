import styled from "styled-components";
import { motion } from "framer-motion";

export const CategoriasContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  user-select: none;

  h3 {
    font-size: 4rem;
    margin-bottom: 0px;
    color: white;

    @media (max-width: 900px) {
      font-size: 2.7rem;
    }
    @media (max-width: 470px) {
      font-size: 1.6rem;
    }
  }
`;
export const CategoriasContainerCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;
  user-select: none;
`;
export const CardCategoria = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;

  width: 80px;
  height: 140px;
  padding: 10px;

  background-color: ${({ selected }) =>
    selected ? "black" : "var(--gray-bg)"};
  border-radius: 15px;
  cursor: pointer;

  @media (max-width: 400px) {
    width: 70px;
    height: 130px;
    padding: 5px;
  }

  h2 {
    font-size: 1rem;
  }
  img {
    width: 60px;
    height: 60px;
    @media (max-width: 400px) {
      width: 50px;
      height: 50px;
    }
  }
  :first-child {
    img {
      padding-top: 7px;
      padding-bottom: 7px;
    }
  }
`;

export const BorderDecoration = styled.div`
  height: 5px;
  width: 30%;
  background: var(--gray-bg);
  border-radius: 15px;
`;
