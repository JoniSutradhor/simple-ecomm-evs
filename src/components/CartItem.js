import React from "react";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import { useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity } from "../store/cartSlice";

const CartItem = ({ item }) => {

  const dispatch = useDispatch();

  const increaseItem = () => {
    dispatch(increaseQuantity(item));
  };

  const decreaseItem = () => {
    dispatch(decreaseQuantity(item));
  };

  return (
    <div className="flex  justify-between border border-gray-200 p-4 mb-4 rounded-md">
      <div className="flex h-[100px] w-[100px] overflow-hidden">
        <img src={item.image} alt="" />
      </div>
      <div className="flex flex-col justify-between items-start">
        <h3 className="font-semibold">Model : {item.Title}</h3>
        <p className="text-gray-500">Year : {item.Year}</p>
        <p className="text-gray-500">Price : ${item.Price}</p>
        <p className="text-gray-500">Quantity : {item.quantity}</p>
        <div className="flex items-center gap-1">
          <button
            className="bg-[#e2e8f0] hover:bg-[#94a3b8] text-white font-bold px-4 rounded-r-none rounded-l-3xl"
            onClick={()=> increaseItem()}
          >
            <AddOutlinedIcon />
          </button>
          <button
            className="bg-[#e4e4e7] hover:bg-[#d4d4d4] text-white font-bold px-4 rounded-l-none rounded-r-3xl"
            onClick={()=> decreaseItem()}
          >
            <RemoveOutlinedIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
