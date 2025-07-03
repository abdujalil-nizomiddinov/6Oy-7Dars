import { useEffect, useState } from "react";
import { FaTrashCan } from "react-icons/fa6";
import Product from "../components/Product";
import { useFetch } from "../hooks/useFetch";

function Home() {
  const { data: oldProducts, isPending } = useFetch(
    "https://dummyjson.com/products"
  );
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(oldProducts);
  }, [oldProducts]);

  const removeProduct = (id) => {
    const filteredProduct = products.filter((product) => {
      return product.id !== id;
    });
    setProducts(filteredProduct);
  };

  if (isPending) {
    return (
      <div className="fixed top-0 left-0 w-screen h-screen bg-black flex items-center justify-center">
        <span className="loading loading-bars loading-xl text-[lime]"></span>
      </div>
    );
  }
  return (
    <>
      <main className="mt-12 relative min-h-100 flex flex-col items-center justify-center">
        <div className="text-[lime] text-2xl font-[900] ml-10 absolute top-0 left-0 flex items-center justify-center mb-4 max-[380px]:flex-col max-[380px]:items-start">
          <h2 className="text-[lime] cursor-pointer select-none transition-all duration-100 ease-out hover:duration-200 hover:ease-in px-4 py-2 hover:shadow-[inset_0_0_10px_lime] rounded-[25%]">
            Products:[{products?.length}]
          </h2>
          {products?.length > 0 ? (
            <button
              onClick={() => {
                setProducts([]);
              }}
              className="flex select-none items-center justify-center gap-2 cursor-pointer text-[lime] transition-all duration-100 ease-out hover:duration-200 hover:ease-in px-4 py-2 hover:shadow-[inset_0_0_10px_lime] rounded-[25%] focus-visible:shadow-[inset_0_0_10px_yellow] focus-visible:text-yellow-500 focus-visible:outline-none active:scale-98"
            >
              <span className="[word-spacing:-4px]">Clear Products</span>

              <FaTrashCan />
            </button>
          ) : (
            <></>
          )}
        </div>
        {products?.length == 0 ? (
          <h2 className="text-center text-[lime] text-3xl max-[1350px]:text-2xl max-[1080px]:text-xl max-[900px]:text-lg max-[800px]:text-sm mx-8">
            404 not found
          </h2>
        ) : (
          <ul className="mt-16 max-[380px]:mt-30 w-full h-full px-10 grid grid-cols-5 max-[1400px]:grid-cols-4 max-[1000px]:grid-cols-3 max-[800px]:grid-cols-2 max-[600px]:grid-cols-1 mx-30 max-[1000px]:mx-10 my-10 gap-5 max-[380px]:mx-5">
            {products?.map((product) => {
              return (
                <Product
                  removeProduct={removeProduct}
                  product={product}
                  key={product.id}
                ></Product>
              );
            })}
          </ul>
        )}
      </main>
    </>
  );
}

export { Home };
