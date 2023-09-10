import { Routes as ReactDomRoutes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import SobreNosotros from "../pages/SobreNosotros/SobreNosotros";
import ProductosRoutes from "../pages/ProductosRoutes/ProductosRoutes";
import ContactoRoutes from "../pages/ContactoRoutes/ContactoRoutes";

function Routes() {
  return (
    <ReactDomRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/sobrenosotros" element={<SobreNosotros />} />
      <Route path="/productosroutes" element={<ProductosRoutes />} />
      <Route path="/contactoroutes" element={<ContactoRoutes />} />
      <Route path="*" element={<PageNotFound />} />
    </ReactDomRoutes>
  );
}

export default Routes;
