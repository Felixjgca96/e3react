import { styled } from "styled-components";

export const FooterStyled = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #18191a;
`;
export const FooterContainerStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  width: 95%;
  margin-left: 20px;
  margin-right: 20px;
  padding-bottom: 10px;
  padding-top: 20px;

  border-radius: 20px;
  flex-wrap: wrap;
  @media (max-width: 750px) {
    flex-direction: column;
  }
`;

export const EmpresaStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  h2 {
    font-size: 1rem;
    color: white;
  }
  img {
    width: 30px;
    height: 30px;
  }

  @media (max-width: 750px) {
    h2 {
      font-size: 0.75rem;
    }
    img {
      width: 25px;
      height: 25px;
    }
  }
`;

export const LinkFooterStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  list-style: none;
  text-decoration: none;

  a {
    font-size: 1rem;
    padding: 5px;
    text-decoration: none;
    list-style: none;

    color: white;

    @media (max-width: 750px) {
      font-size: 0.75rem;
    }
  }
  a:hover {
    background: #74787e;
    border-bottom: 1px solid #ffffff;
    border-radius: 5px;
  }
`;
