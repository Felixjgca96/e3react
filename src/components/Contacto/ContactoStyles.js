import { styled } from "styled-components";
export const ContactoContainerStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0px;
  border-radius: 20px;
  margin-top: 35px;

  h2 {
    font-size: 4rem;
    color: white;
    margin: 0;

    @media (max-width: 900px) {
      font-size: 2.7rem;
    }
    @media (max-width: 470px) {
      font-size: 1.6rem;
    }
  }
`;

export const MapsYContactoStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  max-width: 1150px;
  width: 95%;
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 20px;
  @media (max-width: 640px) {
    flex-direction: column;
    gap: 0px;
    display: flex;
  }
`;

export const MapsStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1150px;
  width: 280px;
  height: 300px;
  gap: 10px;
  border-radius: 15px;

  iframe {
    width: 200px;
    height: 200px;
    border-radius: 15px;
    margin-top: 1px;
  }

  h2 {
    font-size: 1rem;
    font-weight: 600;
    color: white;
    margin: 0;
  }
`;

export const ContactoStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1150px;
  width: 280px;
  height: 300px;
  gap: 15px;
  border-radius: 15px;

  h2 {
    font-size: 1rem;
    font-weight: 600;
    color: white;
  }
  img {
    width: 50px;
    height: 50px;
  }
  @media (max-width: 640px) {
    height: 230px;
  }
`;

export const TlfYGmailStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1150px;
  gap: 10px;

  img {
    width: 50px;
    height: 50px;
  }
  h2 {
    font-size: 1rem;
    font-weight: 600;
    color: white;
  }
`;

export const GmailStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  img {
    width: 40px;
    height: 40px;
    background-color: #00030a;
    padding: 3px;
    border-radius: 5px;
  }
  p {
    font-size: 1rem;
    font-weight: 600;
    color: white;
  }
`;
export const TlfStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  img {
    width: 40px;
    height: 40px;
    background-color: #00030a;
    padding: 3px;
    border-radius: 5px;
  }
  p {
    font-size: 1rem;
    font-weight: 600;
    color: white;
  }
`;
export const IconosStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  img {
    width: 50px;
    height: 50px;
    border-radius: 10px;
    background-color: #00030a;
    padding: 3px;
  }
  img:hover {
    background: #74787e;
    color: black;
    border: 1px solid #ffffff;
    border-radius: 5px;
  }
`;
