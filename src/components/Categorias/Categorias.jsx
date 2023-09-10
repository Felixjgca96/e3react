import { useSelector } from "react-redux";
// import { Categories } from "../../data/Categories";
import Categoria from "./Categoria";
import {
  CategoriasContainer,
  CategoriasContainerCard,
} from "./CategoriasStyles";
const Categorias = () => {
  const { categories } = useSelector((state) => state.categories);

  // console.log(categories);

  return (
    <CategoriasContainer>
      <h3>Categorias</h3>
      <CategoriasContainerCard>
        {categories.map((category) => {
          return <Categoria {...category} key={category.id} />;
        })}
      </CategoriasContainerCard>
    </CategoriasContainer>
  );
};

export default Categorias;
