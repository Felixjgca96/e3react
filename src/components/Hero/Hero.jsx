import React from "react";

import {
  BeneficiosCardStyled,
  CardStyled,
  HeroContainerStyled,
  HeroTextContainerStyled,
} from "./HeroStyles";

const Hero = () => {
  return (
    <HeroContainerStyled id="hero">
      <HeroTextContainerStyled>
        <h1>CREACION TEXTIL</h1>
        <p>
          Nos dedicamos a la producción y comercialización de prendas de vestir;
          mayormente en el rubro deportivo para damas y caballeros.
        </p>
        <p>
          Al obtener nuestros servicios, cuentas con mucha eficacia al momento
          de recibir tu pedido.
        </p>
        <BeneficiosCardStyled>
          <CardStyled>
            <img src="./1.png" alt="imagen" />
            <p>
              Trabajo responsable y rápido, con buena capacidad de finalizacion
              en cada detalle.
            </p>
          </CardStyled>
          <CardStyled>
            <img src="./2.png" alt="imagen" />
            <p>
              Empresa apasionada por la costura, muy profesional, detallista y
              con buena reputacion.
            </p>
          </CardStyled>
          <CardStyled>
            <img src="./3.png" alt="imagen" />
            <p>Excelente atención y buena presencia.</p>
          </CardStyled>
        </BeneficiosCardStyled>
      </HeroTextContainerStyled>
    </HeroContainerStyled>
  );
};

export default Hero;
