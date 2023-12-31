import { AnimatePresence, color } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { IoMdTrash } from "react-icons/io";
import { MdOutlineClose } from "react-icons/md";
import { formatPrice } from "../../../utils";

import Increase from "../../UI/Increase/Increase";
import Submit from "../../UI/Submit/Submit";
import ModalCartCard from "./ModalCartCard";

import { ModalOverlayStyled } from "../NavbarStyles";
import {
  ButtonContainerStyled,
  CloseButtonContainerStyled,
  CloseButtonStyled,
  ContainerStyled,
  EnvioStyled,
  MainContainerStyled,
  PriceContainerStyled,
  PriceStyled,
  ProductsWrapperStyled,
  SubtotalStyled,
  TitleStyled,
  TotalStyled,
} from "./ModalCartStyles";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, toggleHiddenCart } from "../../../redux/cart/cartSlice";
import React, { useState } from "react";
import Modal from "react-modal";
import { ButtonModal } from "../modal/ModalStyled";

const customStyles = {
  content: {
    top: "90%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "2px solid white ",
    background: "black",
    padding: "5px 10px",
    borderRadius: "40px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    fontSize: "12px",
  },
};

const customStylesPapelera = {
  content: {
    top: "70%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "2px solid white ",
    background: "black",
    padding: "5px 10px",
    borderRadius: "40px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontSize: "12px",
  },
};
const ModalCart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { cartItems, shippingCost } = useSelector((state) => state.cart);

  const hiddenCart = useSelector((state) => state.cart.hidden);

  const totalPrice = cartItems.reduce((acc, item) => {
    return (acc += item.price * item.quantity);
  }, 0);
  // PARA BORRAR EL CARRITO Y MODAL
  const [cancelIsOpen, cancelSetIsOpen] = React.useState(false);
  const openCancel = () => {
    cancelSetIsOpen(true);
  };

  const closeCancel = () => {
    cancelSetIsOpen(false);
  };
  // TERMINA

  // PARA COMPRAR EL CARRITO Y MODAL
  const [compraIsOpen, compraSetIsOpen] = React.useState(false);
  const openCompra = () => {
    compraSetIsOpen(true);
  };

  const closeCompra = () => {
    compraSetIsOpen(false);
  };
  // TERMINA

  // PARA GRACIAS DEL CARRITO Y MODAL
  const [graciasIsOpen, graciasSetIsOpen] = React.useState(false);
  const openGracias = () => {
    graciasSetIsOpen(true);
  };

  const closeGracias = () => {
    graciasSetIsOpen(false);
  };
  // TERMINA
  return (
    <>
      {/* BORRAR CARRITO Y MODAL */}
      <Modal
        isOpen={cancelIsOpen}
        onRequestClose={closeCancel}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>¿Desea borrar todo el carrito?</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "2rem" }}>
          <ButtonModal
            onClick={() => {
              dispatch(clearCart());
              closeCancel();
              dispatch(toggleHiddenCart());
            }}
          >
            Aceptar
          </ButtonModal>
          <ButtonModal onClick={closeCancel}>Cancelar</ButtonModal>
        </div>
      </Modal>
      {/* BORRAR CARRITO Y MODAL */}

      {/* COMPRAR CARRITO Y MODAL */}
      <Modal
        isOpen={compraIsOpen}
        onRequestClose={closeCompra}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>¿Desea terminar su compra?</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "2rem" }}>
          <ButtonModal
            onClick={() => {
              dispatch(clearCart());
              closeCompra();
              dispatch(toggleHiddenCart());
              openGracias();
            }}
          >
            Aceptar
          </ButtonModal>
          <ButtonModal onClick={closeCompra}>Cancelar</ButtonModal>
        </div>
      </Modal>
      {/* COMPRAR CARRITO Y MODAL */}

      {/* GRACIAS CARRITO Y MODAL */}
      <Modal
        isOpen={graciasIsOpen}
        onRequestClose={closeGracias}
        style={customStylesPapelera}
        contentLabel="Example Modal"
      >
        <h2>Muchas gracias por tu compra.</h2>
        <img
          src="./celebracion.gif"
          alt=""
          style={{
            width: "150px ",
          }}
        />
      </Modal>
      {/* GRACIAS CARRITO Y MODAL */}
      {!hiddenCart && (
        <ModalOverlayStyled
          onClick={() => dispatch(toggleHiddenCart())}
          isHidden={hiddenCart}
        />
      )}
      <AnimatePresence>
        {!hiddenCart && (
          <ContainerStyled
            initial={{ translateX: -100 }}
            animate={{ translateX: 0 }}
            exit={{ translateX: 600 }}
            transition={{ type: "spring", damping: 27 }}
            key="cart-modal"
          >
            <CloseButtonContainerStyled>
              <CloseButtonStyled
                className="close__modal "
                whileTap={{ scale: 0.95 }}
                onClick={() => dispatch(toggleHiddenCart())}
              >
                <MdOutlineClose size="24px" />
              </CloseButtonStyled>
            </CloseButtonContainerStyled>

            <MainContainerStyled>
              <TitleStyled>
                <h1>Tus Productos</h1>
              </TitleStyled>

              <ProductsWrapperStyled>
                {cartItems.length ? (
                  cartItems.map((item) => {
                    return <ModalCartCard key={item.id} {...item} />;
                  })
                ) : (
                  <p>Agrega productos a tu carrito...</p>
                )}
              </ProductsWrapperStyled>
            </MainContainerStyled>

            <PriceContainerStyled>
              <SubtotalStyled>
                <p>Subtotal:</p>
                <span>{formatPrice(totalPrice)}</span>
              </SubtotalStyled>
              <EnvioStyled>
                <p>Envio</p>
                <span>{formatPrice(shippingCost)}</span>
              </EnvioStyled>
              <hr />

              <TotalStyled>
                <p>Total:</p>
                <PriceStyled>
                  {formatPrice(totalPrice + shippingCost)}
                </PriceStyled>
              </TotalStyled>
              <ButtonContainerStyled>
                <Submit
                  onClick={() => {
                    openCompra();
                  }}
                  disabled={!cartItems.length}
                >
                  Finalizar pedido
                </Submit>
                <Increase
                  onClick={() => {
                    openCancel();
                  }}
                  bgColor="black"
                  disabled={!cartItems.length}
                >
                  <IoMdTrash />
                </Increase>
              </ButtonContainerStyled>
            </PriceContainerStyled>
          </ContainerStyled>
        )}
      </AnimatePresence>
    </>
  );
};

export default ModalCart;
