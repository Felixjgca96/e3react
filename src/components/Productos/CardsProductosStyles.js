import styled from "styled-components";

export const ProductosContainer = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1400px;
  h3 {
    font-size: 4rem;
    margin-top: 50px;
    margin-bottom: 10px;
    color: white;

    @media (max-width: 900px) {
      font-size: 2.7rem;
    }
    @media (max-width: 470px) {
      font-size: 1.6rem;
    }
  }
`;
export const ProductosContainerCard = styled.div`
  display: grid;
  place-items: center;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 300px);
  row-gap: 1.5rem;
  width: 100%;
  @media (max-width: 670px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;
export const ProductosCard = styled.div`
  background: var(--gray-bg);
  width: 250px;
  height: 250px;
  border-radius: 15px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;

  img {
    width: 150px;
    height: 150px;
    @media (max-width: 670px) {
      width: 130px;
      height: 130px;
    }
  }
  h2 {
    font-weight: 600;
    margin: 0;
    font-size: 20px;
  }
  p {
    color: #666;
    font-size: 1.2rem;
  }
  @media (max-width: 670px) {
    width: 350px;
    height: 180px;
  }
  @media (max-width: 470px) {
    width: 260px;
    height: 180px;
  }
`;

export const ContainerPrice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  @media (max-width: 670px) {
    flex-direction: row;
  }
`;

export const CardPrice = styled.span`
  font-weight: 800;
  font-size: 20px;
  color: white;
`;
