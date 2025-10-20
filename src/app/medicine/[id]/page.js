/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { useParams, useRouter } from "next/navigation";
import { Button } from "antd";
import { useCart } from "@/app/context/CartContext";
import { useLang } from "@/app/context/LangContext";
import medicines from "@/app/data/medicines";

export default function MedicineDetail() {
  const { id } = useParams();
  const med = medicines?.find((m) => m?.id === id);
  const { addItem } = useCart();
  const { dict } = useLang();
  const router = useRouter();

  if (!med) return <div className="text-center">Medicine not found</div>;

  return (
    <div className="flex flex-col md:flex-row gap-6 items-start p-4">
      {/* Image */}
      <img
        src={med.image}
        alt={med.title}
        className="w-full md:w-1/2 rounded-lg object-cover"
      />

      {/* Info Section */}
      <div className="flex-1">
        <h1 className="text-2xl font-semibold mb-2">{med.title}</h1>

        {/* Render description as HTML */}
        <div
          className="text-lg text-gray-700 mb-4"
          dangerouslySetInnerHTML={{ __html: med.description }}
        />

        {/* Price section */}
        <div className="flex items-end gap-3 mb-4">
          <div className="text-2xl font-bold text-green-600">
            € {med.discountedPrice.toFixed(2)}
          </div>
          <div className="text-sm line-through text-gray-400">
            € {med.price.toFixed(2)}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <Button type="primary" onClick={() => addItem(med)}>
            {dict.add_to_cart}
          </Button>
          <Button type="default" onClick={() => router.back()}>
            Back
          </Button>
        </div>
      </div>
    </div>
  );
}
