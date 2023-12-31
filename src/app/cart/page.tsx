"use client";
import { useEffect } from "react";
import Image from "next/image";
// Images
import product from "../../../public/temporary/p1.png";
// React Icons
import { AiOutlineDelete } from "react-icons/ai";
import { useCartStore } from "@/utils/store";

const CartPage = () => {
  const { products, totalItems, totalPrice, removeFromCart } = useCartStore();

  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, []);

  return (
    <main>
      <section className="mt-20">
        <div className="container mx-auto px-4 md:px-0 lg:flex lg:justify-around lg:items-center">
          {/* Products */}
          <div className="space-y-8">
            {products.map((item) => (
              <div
                className="flex flex-col items-center md:flex-row"
                key={item.id}
              >
                {item.img && (
                  <Image src={product} alt="pizza" width={150} height={150} />
                )}

                <div className="mt-4 md:mt-0">
                  <div className="text-black flex flex-col text-center md:text-left md:flex-row md:items-center md:ml-8 md:space-x-12">
                    <h3 className="text-2xl font-semibold">
                      {item.title} x {item.quantity} {item.optionTitle}
                    </h3>
                    <p className="mt-2 md:mt-0 text-xl font-bold">
                      ${item.price}
                    </p>
                    <div className="mt-2 md:mt-0">
                      <button
                        className="btn-primary flex items-center gap-1"
                        onClick={() => removeFromCart(item)}
                      >
                        <AiOutlineDelete size={18} />
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Checkout Information */}
          <div className="bg-white shadow-md rounded mt-8 px-4 py-6 space-y-8 md:px-12 md:py-12">
            <div className="flex items-center justify-between">
              <p>Subtotal({totalItems})</p>
              <span>${totalPrice}</span>
            </div>
            <div className="flex items-center justify-between">
              <p>Service Cost</p>
              <span>$0.00</span>
            </div>
            <div className="flex items-center justify-between">
              <p>Delivery Cost</p>
              <span className="text-green-500 font-semibold">FREE!</span>
            </div>
            <hr />
            <div className="flex items-center justify-between">
              <p>Total</p>
              <span>${totalPrice} (including VAT)</span>
            </div>

            <button className="btn-primary">Checkout</button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CartPage;
