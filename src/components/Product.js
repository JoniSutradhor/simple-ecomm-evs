import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../store/cartSlice";

const Product = ({ item }) => {
  const [cartItems, setCartItems] = useState([]);
  const dispatch = useDispatch();

  const addToCart = () => {
    const updatedCart = [...cartItems, item];
    setCartItems(updatedCart);
    dispatch(addItemToCart({ ...item, image: getRandomImage() , quantity: 1}));
  };

  const getRandomImage = () => {
    const randomNumber = Math.floor(Math.random() * 12) + 1;
    return `./iphone-${randomNumber}.jpg`;
  };

  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white">
      <div className="h-[200px] w-[300px] overflow-hidden">
        <img src={getRandomImage()} alt={item.Title} />
      </div>
      <div className="flex flex-col justify-center items-center px-6 py-4">
        <div className="font-bold text-xl mb-2">{item.Title}</div>
        <p className="text-gray-700 text-base mb-2">Year: {item.Year}</p>
        <p className="text-gray-700 text-base mb-2">Price: ${item.Price}</p>
        <button
          onClick={addToCart}
          className="bg-[#64748b] hover:bg-[#334155] text-white font-bold py-2 px-4 rounded"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
