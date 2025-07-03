import { useState } from "react";
import Eye from "../assets/eye.png";
import Trash from "../assets/trash.png";
import AddCart from "../assets/add_cart.png";
import { FaSquarePlus } from "react-icons/fa6";
import { FaSquareMinus } from "react-icons/fa6";
import { Link } from "react-router-dom";

export function Product({ product, removeProduct }) {
  const [count, setCount] = useState(0);
  return (
    <li
      key={product.id}
      className="relative transition-all duration-300 ease-in-out hover:shadow-[0_0_20px_1px_lime] rounded-lg"
    >
      <img
        src={product.images}
        alt={product.title}
        className="w-full aspect-[3/4] rounded-lg"
      />
      <div className="flex rounded-lg flex-col items-center absolute top-0 bottom-0 left-0 right-0 bg-black/70 hover:bg-black/35 transition-all duration-300 ease-in-out cursor-pointer text-[lime]">
        <div className="flex w-full justify-between mx-auto px-2 py-1">
          <h4 className="font-[900]">{product.author}</h4>
          <p className="font-[900]">{product.year}</p>
        </div>
        <Link
          to={`/singleProduct/${product.id}`}
          className="absolute cursor-pointer top-[50%] translate-y-[-60%] transition-all duration-500 ease-in-out hover:bg-black/60 px-3 rounded-xl hover:shadow-[0_0_10px_1px_lime] active:scale-95 outline-none focus:shadow-[0_0_10px_1px_lime] focus:bg-black/60"
        >
          <img src={Eye} alt="eye" className="w-15" />
        </Link>

        <div className="absolute bottom-0 flex flex-col w-full px-1 py-2 gap-2">
          <i className="text-center">{product.title}</i>
          <div className="flex gap-1">
            <button
              onClick={() => {
                removeProduct(product.id);
              }}
              className="w-full border-[2px] rounded-md cursor-pointer active:w-40 transition-all duration-300 mx-auto hover:shadow-[inset_0_0_20px_1px_lime] focus:shadow-[inset_0_0_20px_1px_lime] ease-in-out outline-none"
            >
              <span className="flex w-full items-center justify-center py-1">
                <img src={Trash} alt="trash" className="w-6" />
              </span>
            </button>
            <span className="w-full border-[2px] rounded-md cursor-pointer active:w-40 transition-all duration-300 mx-auto flex items-center justify-center hover:shadow-[inset_0_0_20px_1px_lime] ease-in-out">
              ${product.price}
            </span>
            {count === 0 ? (
              <button
                onClick={() => {
                  setCount(count + 1);
                }}
                className="w-full border-[2px] rounded-md cursor-pointer active:w-40 transition-all duration-300 mx-auto hover:shadow-[inset_0_0_20px_1px_lime] focus:shadow-[inset_0_0_20px_1px_lime] ease-in-out outline-none"
              >
                <span className="flex w-full items-center justify-center py-1">
                  <img src={AddCart} alt="add cart" className="w-8" />
                </span>
              </button>
            ) : (
              <div className="w-full border-[2px] rounded-md cursor-pointer active:w-60 transition-all duration-300 mx-auto hover:shadow-[inset_0_0_20px_1px_lime] focus:shadow-[inset_0_0_20px_1px_lime] ease-in-out outline-none">
                <span className="flex w-full items-center justify-center py-1 text-2xl gap-0.5">
                  <button
                    className="cursor-pointer"
                    onClick={() => {
                      if (count > 0) {
                        setCount(count - 1);
                      }
                    }}
                  >
                    <FaSquareMinus />
                  </button>
                  <span className="text-lg">{count}</span>
                  <button
                    className="cursor-pointer"
                    onClick={() => {
                      setCount(count + 1);
                    }}
                  >
                    <FaSquarePlus />
                  </button>
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </li>
  );
}
export default Product;
