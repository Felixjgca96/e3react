import { formatPrice } from "../../utils/index";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart/cartSlice";
import React, { useState } from "react";
import Modal from "react-modal";
import Button from "../UI/Button/Button";

import {
  Card,
  CardImg,
  CardPrice,
  CardText,
  CardTitle,
  InfoCard,
} from "./CardsRecomendacionStyled";
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
const CardRecomendacion = ({ title, img, price, desc, id }) => {
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
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>Has agregado el producto a tu carrito.</h2>
      </Modal>
      <Card>
        <CardImg src={img} alt={title} />
        <CardText>
          <CardTitle>{title}</CardTitle>
          <CardPrice>{formatPrice(price)}</CardPrice>
        </CardText>
        <Button
          onClick={() => {
            openModal();
            dispatch(addToCart({ img, title, price, id }));
          }}
        >
          Agregar
        </Button>
      </Card>
    </>
  );
};

export default CardRecomendacion;
