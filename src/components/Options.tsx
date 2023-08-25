"use client";

import { useEffect, useState } from "react";

const Price = ({ singleProduct }) => {
  const { id, options, price } = singleProduct;
  const [total, setTotal] = useState(price);
  const [selected, setSelected] = useState(0);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setTotal(
      quantity * (options ? price + options[selected].additionalPrice : price)
    );
  }, [quantity, selected, options, price]);

  return (
    <>
      <p className="mt-8 text-xl">
        Price:
        <span className="font-bold text-red-500"> ${total.toFixed(2)}</span>
      </p>
      <div className="mt-8  space-x-4">
        {options.map((option, index) => (
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
