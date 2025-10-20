/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { Drawer, Button, InputNumber } from "antd";
import { useCart } from "../context/CartContext";
import { useLang } from "../context/LangContext";

export default function CartDrawer({ open, onClose }) {
  const { items, changeQtyDirect, getTotal } = useCart();
  const { dict } = useLang();
  const arr = Object.values(items);

  return (
    <Drawer title={dict.cart} open={open} onClose={onClose} width={360}>
      {arr.length === 0 ? (
        <div>{dict.empty_cart}</div>
      ) : (
        <div className="space-y-4">
          {arr.map((it) => (
            <div key={it.id} className="flex items-center gap-3">
              <img
                src={it.image}
                alt={it.title}
                className="w-16 h-16 object-cover rounded"
              />
              <div className="flex-1">
                <div className="font-medium">{it.title}</div>
                <div className="text-sm">€ {it.discountedPrice.toFixed(2)}</div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <InputNumber
                  min={1}
                  value={it.qty}
                  onChange={(v) => changeQtyDirect(it.id, v)}
                />
                <Button type="link" onClick={() => changeQtyDirect(it.id, 0)}>
                  Remove
                </Button>
              </div>
            </div>
          ))}

          <div className="border-t pt-3 flex items-center justify-between">
            <div className="text-sm font-medium">{dict.total}</div>
            <div className="font-semibold">€ {getTotal().toFixed(2)}</div>
          </div>

          <Button type="primary" block>
            {dict.checkout}
          </Button>
        </div>
      )}
    </Drawer>
  );
}
