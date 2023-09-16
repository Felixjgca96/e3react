import Link from "../../components/UI/Link/Link";
import { FoundSubtitleStyled } from "../PageNotFound/PageNotFoundStyles";
import {
  GraciasContainerStyled,
  GraciasTextStyled,
  GraciasTitleStyled,
} from "./GraciasStyles";

const Gracias = () => {
  return (
    <GraciasContainerStyled>
      <GraciasTextStyled>
        <GraciasTitleStyled>MUCHAS GRACIAS</GraciasTitleStyled>
        <p>
          Sus datos han sido recibidos, en menos de 24 horas nos estaremos
          comunicando con usted.
        </p>
        <Link />
      </GraciasTextStyled>
      <img src="./gracias.png" alt="" className="imgGracias" />
    </GraciasContainerStyled>
  );
};

export default Gracias;
