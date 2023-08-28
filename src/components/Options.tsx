"use client";

import { ProductType } from "@/types/types";
import { useEffect, useState } from "react";

const Price = ({ product }: { product: ProductType }) => {
  const [total, setTotal] = useState(product.price);
  const [selected, setSelected] = useState(0);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (product.options?.length) {
      setTotal(
        quantity * product.price + product.options[selected].additionalPrice
      );
    }
  }, [quantity, selected, product]);

  return (
    <>
      <p className="mt-8 text-xl">
        Price:
        <span className="font-bold text-red-500"> ${total}</span>
      </p>
      <div className="mt-8  space-x-4">
        {product.options?.length &&
          product.options?.map((option, index) => (
            <button
              key={index}
              className={`border border-red-500 rounded px-4 py-2 text-sm  hover:bg-red-500 hover:text-white transition duration-300 ${
                selected === index ? "bg-red-500 text-white" : "text-slate-900 "
              }`}
              onClick={() => setSelected(index)}
            >
              {option.title}
            </button>
          ))}
      </div>
      <div className="mt-8 space-x-4">
        <input
          type="number"
          className="border text-black text-sm px-2 py-2 rounded"
          placeholder="Quantity"
          value={quantity}
          min="1"
        />
        <button className="btn-primary">Add to cart</button>
      </div>
    </>
  );
};

export default Price;
