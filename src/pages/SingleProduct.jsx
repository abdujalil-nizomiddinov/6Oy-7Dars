import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import Exit from "../assets/exit.png";
import { IoIosHeart } from "react-icons/io";
import { IoIosHeartEmpty } from "react-icons/io";

function SingleProduct() {
  const { id } = useParams();
  const { data: modalProduct, isPending } = useFetch(
    `https://dummyjson.com/products/${id}`
  );
  console.log(modalProduct);

  const [heart, setHeart] = useState(false);
  if (isPending)
    return (
      <div className="fixed top-0 left-0 w-screen h-screen bg-black flex items-center justify-center">
        <span className="loading loading-bars loading-xl text-[lime]"></span>
      </div>
    );
  if (!modalProduct) return null;

  return (
    <>
      <div className="fixed w-[100vw] h-[100vh] left-0 top-0 bg-black flex items-center justify-center z-10 cursor-pointer">
        <h2 className="text-[lime] text-4xl absolute top-5 left-5">
          Single Product id:{modalProduct.id}
        </h2>
        <div
          className="bg-black p-5 rounded-xl max-w-md w-full relative text-[lime]  shadow-[0_0_30px_lime]"
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className="text-xl font-bold mb-2 max-w-80 border-b-2">
            {modalProduct.title}
          </h2>
          <p className="mb-2 border-b-2 max-w-80">
            <b>Rating:</b> {modalProduct.rating}
          </p>
          <p className="mb-2 border-b-2">
            <b>Price:</b> ${modalProduct.price}
          </p>
          <p className="mb-2 border-b-2">
            <b>Description:</b> {modalProduct.description}
          </p>
          <img
            src={modalProduct.images?.[0]}
            alt={modalProduct.title}
            className="w-full mt-3 rounded"
          />
          <Link
            to="/"
            className="absolute top-4 right-4 cursor-pointer hover:bg-black/0 hover:shadow-[0_0_10px_lime] focus-visible:shadow-[0_0_10px_lime] outline-none p-4 rounded-2xl transition-all duration-300 ease-in-out active:scale-95"
          >
            <img src={Exit} alt="exit" className="w-10" />
          </Link>
          {heart == false ? (
            <button
              onClick={() => {
                setHeart(true);
              }}
              className="absolute bottom-7 text-5xl right-7 cursor-pointer focus-visible:shadow-[0_0_10px_lime] outline-none hover:bg-black/70 focus-visible:bg-black/70 hover:shadow-[0_0_10px_lime] p-2 rounded-2xl transition-all duration-300 ease-in-out active:scale-95"
            >
              <IoIosHeartEmpty />
            </button>
          ) : (
            <button
              onClick={() => {
                setHeart(false);
              }}
              className="absolute bottom-7 text-5xl right-7 cursor-pointer focus-visible:shadow-[0_0_10px_lime] outline-none hover:bg-black/70 focus-visible:bg-black/70 hover:shadow-[0_0_10px_lime] p-2 rounded-2xl transition-all duration-300 ease-in-out active:scale-95"
            >
              <IoIosHeart />
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default SingleProduct;
