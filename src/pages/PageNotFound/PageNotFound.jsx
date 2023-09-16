import Link from "../../components/UI/Link/Link";

import {
  FoundContainerStyled,
  FoundSubtitleStyled,
  FoundTextStyled,
  FoundTitleStyled,
} from "./PageNotFoundStyles";

const PageNotFound = () => {
  return (
    <FoundContainerStyled>
      <FoundTextStyled>
        <FoundTitleStyled>404 Error</FoundTitleStyled>
        <FoundSubtitleStyled>
          ¡No existe la pagina que buscas!
        </FoundSubtitleStyled>
        <p>Parece que la página que buscás no existe o fue removida.</p>
        <Link />
      </FoundTextStyled>
      <img src="./caratriste.png" alt="" className="imgNotFound" />
    </FoundContainerStyled>
  );
};

export default PageNotFound;
