import { Link } from "react-router-dom";

import CartIcon from "./CartIcon/CartIcon";
import ModalCart from "./ModalCart/ModalCart";

import { useContext } from "react";
import { Contexto } from "./BurgerMenuContext";

import {
  CartNavStyled,
  LinksContainerStyled,
  NavbarContainerStyled,
  SpanStyled,
  UserContainerStyled,
  UserNavStyled,
  MenuStyled,
  MenuContainer,
  NavListPrincipal,
  LinkNav,
  Logo,
} from "./NavbarStyles";

function Navbar() {
  const { state, dispatch } = useContext(Contexto);

  return (
    <NavbarContainerStyled>
      <ModalCart />
      <Logo>
        <Link to="/">
          <img src="./logo4.png" alt="logo" />
        </Link>
      </Logo>
      <MenuStyled>
        <MenuContainer
          icon
          onClick={() => dispatch({ type: "openBurgerMenu" })}
        >
          <img src="./menu.png"></img>
        </MenuContainer>
        <NavListPrincipal className={state.isBurgerMenuOpen ? "open" : ""}>
          <Link to="/">
            <LinkNav> Home</LinkNav>
          </Link>
          <Link to="/sobrenosotros">
            <LinkNav> Somos</LinkNav>
          </Link>
          <Link to="/productosroutes">
            <LinkNav> Productos</LinkNav>
          </Link>

          <Link to="/checkout">
            <LinkNav> Contacto</LinkNav>
          </Link>
        </NavListPrincipal>
      </MenuStyled>
      <LinksContainerStyled>
        <CartNavStyled>
          <CartIcon />
        </CartNavStyled>

        <UserNavStyled>
          <UserContainerStyled>
            <SpanStyled></SpanStyled>
            <img src="./usuario.png" alt="icono" />
          </UserContainerStyled>
        </UserNavStyled>
      </LinksContainerStyled>
    </NavbarContainerStyled>
  );
}

export default Navbar;
