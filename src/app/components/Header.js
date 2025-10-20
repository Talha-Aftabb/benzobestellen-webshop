/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Button, Badge } from "antd";
import { useLang } from "../context/LangContext";
import { useCart } from "../context/CartContext";

export default function Header({ onOpenCart }) {
  const { items, getTotal } = useCart();
  const { lang, setLang, dict } = useLang();
  const qty = Object.values(items).reduce((s, i) => s + i.qty, 0);

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="/images/benzobestellencom-logo.svg"
            alt="logo"
            className="w-[180px] object-contain"
          />
        </div>
        <div className="flex items-center gap-4">
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            className="border rounded px-2 py-1"
          >
            <option value="en">EN</option>
            <option value="nl">NL</option>
          </select>

          <Button type="text" onClick={onOpenCart}>
            <Badge count={qty} offset={[-6, 6]}>
              <ShoppingCartOutlined style={{ fontSize: 22 }} />
            </Badge>
          </Button>
          <div className="text-sm">€ {getTotal().toFixed(2)}</div>
        </div>
      </div>
    </header>
  );
}
