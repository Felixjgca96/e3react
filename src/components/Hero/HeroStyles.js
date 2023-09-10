import styled from "styled-components";

export const HeroContainerStyled = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  margin-top: 20px;
  padding-top: 10px;
  padding-bottom: 20px;
  border-radius: 100px;
  width: 100%;
  background-image: url(./fondo5.jpg);
  background-size: cover;

  @media (max-width: 900px) {
    width: 100%;
  }
  @media (max-width: 860px) {
    border-radius: 50px;
  }
`;

export const HeroTextContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 100%;
  margin-right: 30px;
  margin-left: 30px;
  text-align: center;
  align-items: center;
  border-radius: 20px;

  @media (max-width: 650px) {
    width: 100%;
    margin-right: 5px;
    margin-left: 5px;
  }

  h1 {
    font-size: 4rem;
    margin: 10px 0;
    text-align: center;
    color: white;

    @media (max-width: 900px) {
      font-size: 2.7rem;
    }
    @media (max-width: 470px) {
      font-size: 1.6rem;
      margin: 5px 0;
    }
  }
  h2 {
    font-size: 2.5rem;
    margin: 10px 0;
    text-align: center;
    color: #00030a;

    @media (max-width: 900px) {
      font-size: 2rem;
    }
    @media (max-width: 450px) {
      font-size: 1.5rem;
    }
  }
  p {
    font-size: 1.2rem;
    @media (max-width: 900px) {
      font-size: 1rem;
    }
    color: white;
  }
`;
export const BeneficiosCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 20px;
  margin-right: 20px;
  gap: 15px;
`;
export const CardStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  img {
    width: 80px;
    height: 80px;
    border-radius: 5px;
  }

  p {
    font-size: 1.2rem;
    @media (max-width: 900px) {
      font-size: 1rem;
    }
  }
`;
