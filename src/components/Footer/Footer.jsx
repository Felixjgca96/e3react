import React from "react";
import {
  EmpresaStyled,
  FooterContainerStyled,
  FooterStyled,
  LinkFooterStyled,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterStyled>
      <FooterContainerStyled>
        <EmpresaStyled>
          <h2>Creación Textil Virgen del Valle, C.A. 2022</h2>

          <img src="./logo4.png" alt="" />
        </EmpresaStyled>
        <LinkFooterStyled>
          <a href="#">Privacidad</a>
          <a href="#">Términos de uso</a>
        </LinkFooterStyled>
      </FooterContainerStyled>
    </FooterStyled>
  );
};

export default Footer;
