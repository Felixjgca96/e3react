import { formatPrice } from "../../../utils";

import { BsPlusLg } from "react-icons/bs";
import { FaMinus } from "react-icons/fa";

import Count from "../../UI/Count/Count";
import Increase from "../../UI/Increase/Increase";

import {
  CardTitleStyled,
  PriceStyled,
  ProductContainerStyled,
  QuantityContainerStyled,
  TextContainerStyled,
  TextStyled,
} from "./ModalCartStyles";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../../redux/cart/cartSlice";
import { IoMdTrash } from "react-icons/io";
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
    padding: "0 10px",
    borderRadius: "40px",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    fontSize: "12px",
  },
};
const ModalCartCard = ({ img, title, desc, price, quantity, id }) => {
  const dispatch = useDispatch();
  // PARA RESTAR UN PRODUCTO Y MODAL
  const [menosIsOpen, menosSetIsOpen] = React.useState(false);
  const openMenos = () => {
    menosSetIsOpen(true);
  };

  const closeMenos = () => {
    menosSetIsOpen(false);
  };
  // TERMINA

  // PARA SUMAR UN PRODUCTO Y MODAL
  const [masIsOpen, masSetIsOpen] = React.useState(false);
  const openMas = () => {
    masSetIsOpen(true);
  };

  const closeMas = () => {
    masSetIsOpen(false);
  };
  // TERMINA

  // PARA BORRAR UN PRODUCTO Y MODAL
  const [borrarIsOpen, borrarSetIsOpen] = React.useState(false);
  const openBorrar = () => {
    borrarSetIsOpen(true);
  };

  const closeBorrar = () => {
    borrarSetIsOpen(false);
  };
  // TERMINA
  return (
    <>
      <ProductContainerStyled>
        <img src={img} alt={title} />
        <TextContainerStyled>
          <CardTitleStyled>{title}</CardTitleStyled>
          <TextStyled>{desc}</TextStyled>
          <PriceStyled>{formatPrice(price)}</PriceStyled>
        </TextContainerStyled>
        <QuantityContainerStyled>
          <Increase
            onClick={() => {
              openMenos();
              dispatch(removeFromCart(id));
            }}
          >
            {quantity === 1 ? <IoMdTrash /> : <FaMinus />}
          </Increase>
          <Count>{quantity}</Count>
          <Increase
            onClick={() => {
              openMas();
              dispatch(addToCart({ img, title, desc, price, quantity, id }));
            }}
          >
            <BsPlusLg />
          </Increase>
        </QuantityContainerStyled>
      </ProductContainerStyled>
      {/* RESTAR UN PRODUCTO Y MODAL */}
      <Modal
        isOpen={menosIsOpen}
        onRequestClose={closeMenos}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>Has restado un producto</h2>
      </Modal>
      {/* RESTAR UN PRODUCTO Y MODAL */}

      {/* SUMAR UN PRODUCTO Y MODAL */}
      <Modal
        isOpen={masIsOpen}
        onRequestClose={closeMas}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>Has sumado otro producto</h2>
      </Modal>
      {/* SUMAR UN PRODUCTO Y MODAL */}
      {/* BORRAR PRODUCTO Y MODAL */}
      <Modal
        isOpen={borrarIsOpen}
        onRequestClose={closeBorrar}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>¿Deseas borrar este producto?</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "2rem" }}>
          <ButtonModal
            onClick={() => {
              dispatch(removeFromCart(id));
              closeBorrar();
            }}
          >
            Aceptar
          </ButtonModal>
          <ButtonModal onClick={closeBorrar}>Cancelar</ButtonModal>
        </div>
      </Modal>
      {/* BORRAR PRODUCTO Y MODAL */}
    </>
  );
};

export default ModalCartCard;
