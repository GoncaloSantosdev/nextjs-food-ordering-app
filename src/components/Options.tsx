"use client";

import { ProductType } from "@/types/types";
import { useCartStore } from "@/utils/store";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Price = ({ product }: { product: ProductType }) => {
  const [total, setTotal] = useState(product.price);
  const [selected, setSelected] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useCartStore();

  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, []);

  useEffect(() => {
    if (product.options?.length) {
      setTotal(
        quantity * product.price + product.options[selected].additionalPrice
      );
    }
  }, [quantity, selected, product]);

  const addToCartHandler = () => {
    addToCart({
      id: product.id,
      title: product.title,
      img: product.img,
      price: total,
      ...(product.options?.length && {
        optionTitle: product.options[selected].title,
      }),
      quantity: quantity,
    });

    toast.success("Product added to cart");
  };

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
      <div className="mt-8 space-x-4 flex flex-col items-center sm:flex-row">
        <div className="flex justify-between w-full sm:w-[50%] p-3 ring-1 ring-red-500 rounded">
          <span>Quantity</span>
          <div className="flex gap-4 items-center">
            <button
              onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
            >
              {"<"}
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => setQuantity((prev) => (prev < 9 ? prev + 1 : 9))}
            >
              {">"}
            </button>
          </div>
        </div>
        <button className="btn-primary mt-6 sm:mt-0" onClick={addToCartHandler}>
          Add to cart
        </button>
      </div>
    </>
  );
};

export default Price;
