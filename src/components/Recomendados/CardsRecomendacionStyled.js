import styled from "styled-components";

export const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 1rem;
  flex-wrap: wrap;

  width: 100%;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 280px;
  height: 180px;
  padding: 1rem 1.7rem;
  background: var(--gray-bg);
  border-radius: 15px;
`;

export const CardImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 16px;
  object-fit: cover;
`;

export const CardText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CardTitle = styled.h2`
  margin: 0;
  font-weight: 500;
  letter-spacing: 0.05rem;
`;

export const InfoCard = styled.p`
  margin: 0;
  color: #666;
  font-size: 1.2rem;
`;

export const CardPrice = styled.span`
  font-weight: 800;
  font-size: 1.5rem;
  color: white;
`;
