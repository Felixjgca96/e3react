import styled from "styled-components";

export const FoundContainerStyled = styled.div`
  margin: 0 auto;
  margin-top: 100px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 30px;
  width: 90%;

  @media (max-width: 770px) {
    flex-direction: column;
    gap: 20px;
  }

  img {
    width: 150px;
    border-radius: 5px;

    @media (max-width: 770px) {
      width: 100px;
    }
  }
`;

export const FoundTextStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  text-align: center;

  & h1 {
    margin: 0;
  }
`;

export const FoundTitleStyled = styled.h1`
  font-weight: 800;
  font-size: 2rem;
`;

export const FoundSubtitleStyled = styled.h2`
  font-weight: 400;
`;
