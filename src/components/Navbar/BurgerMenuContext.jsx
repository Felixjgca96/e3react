import React from "react";

import { createContext, useReducer } from "react";

const Contexto = createContext();

const BurgerMenu = ({ children }) => {
  const initialState = {
    isBurgerMenuOpen: false,
  };

  const contextReducer = (state, action) => {
    switch (action.type) {
      case "openBurgerMenu":
        return {
          ...state,
          isBurgerMenuOpen: !state.isBurgerMenuOpen,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(contextReducer, initialState);

  return (
    <Contexto.Provider value={{ state, dispatch }}>
      {children}
    </Contexto.Provider>
  );
};

export { Contexto, BurgerMenu };
