import React from "react";
import {
  AboutContainerStyled,
  AboutImgStyled,
  AboutImgTextStyled,
  AboutTextStyled,
} from "./SobreNosotrosStyles";

const SobreNosotros = () => {
  return (
    <AboutContainerStyled>
      <AboutImgTextStyled>
        <AboutImgStyled>
          <img src="./about1.png" alt="Aboutimg" />
        </AboutImgStyled>
        <AboutTextStyled>
          <h2>Somos</h2>
          <p>
            Hacemos lo que hacemos para mejorar la calidad de vida de los
            venezolanos ofreciendo la mayor variedad de productos a los mejores
            precios.
          </p>
        </AboutTextStyled>
      </AboutImgTextStyled>
      <AboutImgTextStyled>
        <AboutTextStyled>
          <h2>Mision</h2>
          <p>
            Cuidar con esmero el servicio y la calidad requerida por el cliente
            y el patrimonio del estado, en un ambiente de desarrollo integral de
            los trabajadores. Brindar servicios textiles de calidad.
          </p>
        </AboutTextStyled>
        <AboutImgStyled>
          <img src="./about2.jpg" alt="Aboutimg" />
        </AboutImgStyled>
      </AboutImgTextStyled>
      <AboutImgTextStyled>
        <AboutImgStyled>
          <img src="./about3.jpg" alt="Aboutimg" />
        </AboutImgStyled>
        <AboutTextStyled>
          <h2>Historia</h2>
          <p>
            Somos una empresa con más de 15 años de trayectoria en el mercado
            Venezolano. Actualmente contamos con 5 sucursales ubicadas en todo
            el país.
          </p>
        </AboutTextStyled>
      </AboutImgTextStyled>
    </AboutContainerStyled>
  );
};

export default SobreNosotros;
