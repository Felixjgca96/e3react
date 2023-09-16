import { Routes as ReactDomRoutes, Route } from "react-router-dom";
import Checkout from "../pages/Checkout/Checkout";

import Home from "../pages/Home/Home";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import SobreNosotros from "../pages/SobreNosotros/SobreNosotros";
import ProductosRoutes from "../pages/ProductosRoutes/ProductosRoutes";
import Gracias from "../pages/Gracias/Gracias";
function Routes() {
  return (
    <ReactDomRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/sobrenosotros" element={<SobreNosotros />} />
      <Route path="/productosroutes" element={<ProductosRoutes />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/gracias" element={<Gracias />} />

      <Route path="*" element={<PageNotFound />} />
    </ReactDomRoutes>
  );
}

export default Routes;
