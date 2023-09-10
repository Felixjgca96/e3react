import Categorias from "../../components/Categorias/Categorias";
import Hero from "../../components/Hero/Hero";
import Contacto from "../../components/Contacto/Contacto";
import CardsProductos from "../../components/Productos/CardsProductos";

import {
  HomeWrapper,
  // RecomendadosWrapper,
} from "./HomeStyles";

function Home() {
  return (
    <HomeWrapper>
      {/* Hero Section */}
      <Hero />

      {/* Categorias Section */}
      <Categorias />

      {/* Productos Section*/}
      <CardsProductos />
      {/* Contactos Section*/}

      <Contacto />
    </HomeWrapper>
  );
}

export default Home;
