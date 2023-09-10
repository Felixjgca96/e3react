import React from "react";
import { ProductosRoutesContainerStyled } from "./ProductosRoutesStyles";
import CardsProductos from "../../components/Productos/CardsProductos";
import Categorias from "../../components/Categorias/Categorias";

const ProductosRoutes = () => {
  return (
    <ProductosRoutesContainerStyled>
      <Categorias />
      <CardsProductos />
    </ProductosRoutesContainerStyled>
  );
};

export default ProductosRoutes;
