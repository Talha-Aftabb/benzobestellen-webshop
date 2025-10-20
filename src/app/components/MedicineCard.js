/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { Button } from "antd";
import { useCart } from "../context/CartContext";
import { useLang } from "../context/LangContext";
import { useRouter } from "next/navigation";

export default function MedicineCard({ med }) {
  const { addItem } = useCart();
  const { dict } = useLang();
  const router = useRouter();

  return (
    <div className="border rounded overflow-hidden shadow-sm hover:shadow-md transition p-3 w-full">
      <div className="bg-red-500 text-white px-2 py-1 text-xs rounded w-fit">
        -{med.discountPercent}%
      </div>
      <img
        src={med.image}
        alt={med.title}
        className="w-full h-44 object-cover mt-2"
      />
      <h3 className="font-medium mt-2">{med.title}</h3>

      <div className="flex items-end gap-3 mt-1">
        <div className="text-lg font-semibold">
          € {med.discountedPrice.toFixed(2)}
        </div>
        <div className="text-sm line-through text-gray-400">
          € {med.price.toFixed(2)}
        </div>
      </div>

      <div className="mt-3 flex gap-2">
        <Button type="primary" className="flex-1" onClick={() => addItem(med)}>
          {dict.add_to_cart}
        </Button>
        <Button
          type="default"
          className="flex-1"
          onClick={() => router.push(`/medicine/${med.id}`)}
        >
          {dict.view_details}
        </Button>
      </div>
    </div>
  );
}
