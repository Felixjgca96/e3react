import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const NavbarContainerStyled = styled.div`
  height: 50px;
  background-color: #18191a;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
  display: flex;
  justify-content: space-between;
  position: fixed;

  top: 0;
  left: 0;
  right: 0;
  @media (max-width: 500px) {
    padding: 1rem 2rem;
  }
`;

export const ModalOverlayStyled = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  width: calc(100vw - 0px);
  height: 100vh;

  ${({ isHidden }) =>
    !isHidden &&
    css`
      backdrop-filter: blur(5px);
    `}
`;

export const LinksContainerStyled = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;

  a {
    padding: 1rem 1.5rem;
  }

  a:first-child {
    background: var(--orange-bg);
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }
`;

export const LinkContainerStyled = styled.div`
  font-size: 1.2rem;
  color: ${(props) => (props.home ? "#ff9d01" : "#ff9300")};

  img {
    width: 50px;
    cursor: pointer;
    @media (max-width: 400px) {
      width: 45px;
    }
  }
  img:hover {
    background: #74787e;
    color: black;
    border-bottom: 1px solid #ffffff;
    border-radius: 5px;
  }
`;

export const UserContainerStyled = styled(LinkContainerStyled)`
  display: flex;
  align-items: center;
`;

export const CartNavStyled = styled.div`
  position: relative;
  cursor: pointer;

  span {
    position: absolute;
    top: 0;

    height: 20px;
    width: 20px;
    text-align: center;

    border-radius: 1rem;
    border: 1px solid white;
    color: white;
    background-color: black;
    font-size: 0.9rem;
  }

  :hover {
    background: #74787e;
    color: black;
    border-bottom: 1px solid #ffffff;
    border-radius: 5px;
  }
`;

export const UserNavStyled = styled.div`
  gap: 15px;
  cursor: pointer;

  span {
    color: white;
    font-size: 1rem;
  }
`;

export const SpanStyled = styled.span`
  &:hover {
    text-decoration: underline;
  }
`;
export const MenuStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 980px) {
    order: 2;
  }
`;
export const MenuContainer = styled.div`
  display: none;
  @media (max-width: 980px) {
    display: flex;
    font-size: 2rem;
    cursor: pointer;

    &:hover {
      transform: scale(0.9);
      transition: all 0.7s;
    }

    img {
      width: 50px;
      border-radius: 15px;
      padding: 3px;
      @media (max-width: 400px) {
        width: 45px;
      }
    }

    img:hover {
      background: #74787e;
      color: black;
      border-bottom: 1px solid #ffffff;
      border-radius: 5px;
    }
  }
`;
export const NavListPrincipal = styled.div`
  display: flex;
  gap: 1rem;
  padding: 0;

  @media (max-width: 980px) {
    display: none;
    border: 1px solid #ffffff;
    border-radius: 1rem;

    &.open {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 82px;
      right: 2px;
      background-color: #00030a;
      width: 200px;
      z-index: 1;
      align-items: center;
      gap: 10px;
      padding: 1rem;
      opacity: 90%;
    }
  }
`;
export const LinkNav = styled.a`
  padding: 0.5rem 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 500;
  border-radius: 5px;
  text-decoration: none;
  list-style: none;
  color: white;

  &:hover {
    background: #74787e;
    border-bottom: 1px solid #ffffff;
  }
  @media (max-width: 980px) {
    font-size: 15px;
  }
`;

export const Logo = styled.div`
  img {
    width: 65px;
    @media (max-width: 400px) {
      width: 55px;
    }
  }
  img:hover {
    background: #74787e;
    color: black;
    border-bottom: 1px solid #ffffff;
    border-radius: 5px;
  }
`;
