import Routes from "./routes/Routes";
import Footer from "./components/Footer/Footer";
import Layout from "./components/Layout/Layout";
import Navbar from "./components/Navbar/Navbar";
import { BurgerMenu } from "./components/Navbar/BurgerMenuContext";

function App() {
  return (
    <>
      <BurgerMenu>
        <Navbar />
      </BurgerMenu>
      <Layout>
        <Routes />
        <Footer />
      </Layout>
    </>
  );
}

export default App;
