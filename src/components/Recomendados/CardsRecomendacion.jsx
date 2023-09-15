// import { recommended } from "../../data/Recommended";
import Button from "../UI/Button/Button";
import CardRecomendacion from "./CardRecomendacion";
import { CardsContainer } from "./CardsRecomendacionStyled";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const CardsRecomendacion = () => {
  const { recommended } = useSelector((state) => state.recommended);

  return (
    <>
      <CardsContainer gridLength={recommended.length}>
        {recommended.map((recomendado) => {
          return <CardRecomendacion key={recomendado.id} {...recomendado} />;
        })}
      </CardsContainer>
      <Button>
        <Link to="/productosroutes">Ver mas</Link>
      </Button>
    </>
  );
};

export default CardsRecomendacion;
