import React, { useEffect } from "react";
import { fetchProductsThunk } from "../redux/productSlice";
import { useDispatch, useSelector } from "react-redux";

const ProductList = () => {
  const dispatch = useDispatch();
  const {
    items: products,
    loading,
    error,
  } = useSelector((store) => store.products);
  const isDarkMode = true;
  useEffect(() => {
    dispatch(fetchProductsThunk());
  }, []);
  return (
    <>
      <div
        className={`p-6 min-h-screen transition-colors ${
          isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
        }`}
      >
        <h2 className="text-2xl font-bold mb-4">Products</h2>
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {products?.length === 0 ? (
          <p className="text-gray-600 dark: text-gray-300">
            No products available.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 lg:gap-8 ">
            {products.map((product) => (
              <div
                key={product.id}
                className={`p-4 rounded-lg shadow-md transition ${
                  isDarkMode ? " bg-gray-800" : "bg-white"
                }`}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-40 object-contain rounded"
                />
                <h3 className="text-lg font-semibold mt-2">{product.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  ${product.price.toFixed(2)}
                </p>
                <button
                  //onClick={() => dispatch(addToCart(product))}
                  className="mt-2 w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                >
                  Add to Cart{" "}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default ProductList;
