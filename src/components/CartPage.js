import React from "react";
import CartItem from "./CartItem";
import { selectCartItems } from "../store/cartSelector";
import { useSelector } from "react-redux";
import Menu from "./Menu";

const CartPage = () => {
  const cartItems = useSelector(selectCartItems);
  const grandTotal = cartItems.reduce((total, item) => total + (Number(item.Price) * Number(item.quantity)), 0);

  return (
    <div>
      <Menu />
      <div className="container mx-auto py-8">
        <div className="flex justify-center text-2xl font-semibold mb-4">Shopping Cart</div>
        {cartItems.length === 0 ? (
          <div className="flex justify-center text-gray-600">Your cart is empty.</div>
        ) : (
          <div className="px-6">
            {cartItems.map((item, index) => (
              <CartItem key={index} item={item} />
            ))}
            <div className="mt-4">
              <hr className="border-gray-200 mb-4" />
              <div className="flex justify-end gap-2">
                <p className="text-lg font-semibold">Grand Total:</p>
                <p className="text-lg font-semibold">${grandTotal.toFixed(2)}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
