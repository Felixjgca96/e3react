import Categorias from "../../components/Categorias/Categorias";
import Hero from "../../components/Hero/Hero";
import Contacto from "../../components/Contacto/Contacto";
import CardsProductos from "../../components/Productos/CardsProductos";
import CardsRecomendacion from "../../components/Recomendados/CardsRecomendacion";

import {
  HomeWrapper,
  RecomendadosWrapper,
  // RecomendadosWrapper,
} from "./HomeStyles";

function Home() {
  return (
    <HomeWrapper>
      {/* Hero Section */}
      <Hero />
      <RecomendadosWrapper>
        <h3>Productos destacados</h3>
        <CardsRecomendacion />
      </RecomendadosWrapper>
      {/* Categorias Section */}

      {/* Productos Section*/}

      {/* Contactos Section*/}

      <Contacto />
    </HomeWrapper>
  );
}

export default Home;
