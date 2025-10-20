"use client";
import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState({});

  function addItem(med) {
    setItems((prev) => {
      const cur = { ...prev };
      if (cur[med.id]) cur[med.id].qty += 1;
      else cur[med.id] = { ...med, qty: 1 };
      return cur;
    });
  }

  // For +/- direct input number changes
  function changeQtyDirect(id, value) {
    setItems((prev) => {
      const cur = { ...prev };
      if (value <= 0) {
        delete cur[id];
      } else if (cur[id]) {
        cur[id].qty = value;
      }
      return cur;
    });
  }

  function getTotal() {
    const arr = Object.values(items);
    return arr.reduce((s, i) => s + i.qty * i.discountedPrice, 0);
  }

  return (
    <CartContext.Provider value={{ items, addItem, changeQtyDirect, getTotal }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
