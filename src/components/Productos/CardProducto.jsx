import { formatPrice } from "../../utils/index";
import { useDispatch } from "react-redux";
import { addToCart, toggleHiddenCart } from "../../redux/cart/cartSlice";
import Button from "../UI/Button/Button";
import React, { useState } from "react";
import Modal from "react-modal";
import { ButtonModal } from "../Navbar/modal/ModalStyled";

import {
  CardPrice,
  ContainerPrice,
  ProductosCard,
} from "./CardsProductosStyles";

const customStyles = {
  content: {
    top: "50%",
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

const CardProducto = ({ img, title, price, id }) => {
  const dispatch = useDispatch();
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <ProductosCard>
        <img src={img} alt={title} />
        <h2>{title}</h2>
        <ContainerPrice>
          <CardPrice>{formatPrice(price)}</CardPrice>
          <Button
            onClick={() => {
              openModal();
              dispatch(addToCart({ img, title, price, id }));
            }}
          >
            Agregar
          </Button>
        </ContainerPrice>
      </ProductosCard>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>Has agregado el producto a tu carrito.</h2>
      </Modal>
    </>
  );
};

export default CardProducto;
