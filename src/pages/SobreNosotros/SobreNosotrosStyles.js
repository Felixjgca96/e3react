import styled from "styled-components";

export const AboutContainerStyled = styled.section`
  /* display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  padding-top: 10px;
  padding-bottom: 20px;
  border-radius: 20px;
  flex-wrap: wrap;
  gap: 20px;
  width: 90vw;
  max-width: 1600px;
  padding: 2rem;
  margin: 0 auto;
  margin-top: 90px; */
  margin: 0 auto;
  margin-top: 110px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 30px;
  width: 90%;
`;

export const AboutImgTextStyled = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: auto;
  gap: 40px;
  @media (max-width: 860px) {
    flex-direction: column;
    gap: 15px;
  }
`;
export const AboutImgStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;

  img {
    width: 350px;
    height: 200px;
    border-radius: 15px;

    @media (max-width: 860px) {
      width: 450px;
      height: 250px;
    }
    @media (max-width: 600px) {
      width: 350px;
      height: 200px;
    }
    @media (max-width: 430px) {
      width: 280px;
      height: 100px;
    }
  }
`;

export const AboutTextStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: justify;
  width: 350px;
  @media (max-width: 860px) {
    width: 450px;
    align-items: center;
  }
  @media (max-width: 600px) {
    width: 350px;
    align-items: center;
  }
  @media (max-width: 430px) {
    width: 280px;
  }

  h2 {
    font-size: 1.2rem;
    font-weight: 600;
    color: white;
    margin: 10px 0px;
  }
  p {
    font-size: 0.8rem;
    font-weight: 600;
  }
`;
