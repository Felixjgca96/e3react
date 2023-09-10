import styled from "styled-components";

export const InputBoxStyled = styled.div`
  display: flex;
  margin: 5px 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
`;

export const InputLabelStyled = styled.label`
  display: flex;
  margin: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
`;

export const InputStyled = styled.input`
  background-color: var(--gray-bg);
  outline: none;
  border: ${({ isError }) => (isError ? "1px solid #fb103d " : "none")};
  border-radius: 8px;
  height: 30px;
  padding: 0.5rem 1rem;
  color: white;
  width: 80%;
  margin-top: 5px;

  ::placeholder {
    opacity: 60%;
  }
  -webkit-text-fill-color: white;

  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px var(--gray-bg) inset;
  }
`;

export const ErrorMessageStyled = styled.p`
  margin: 0;
  margin-top: 5px;
  color: #fb103d;
  font-size: 14px;
`;
