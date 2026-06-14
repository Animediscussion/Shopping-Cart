import React, { useEffect } from "react";
import { fetchProductsThunk } from "../redux/productSlice";

const ProductList = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((store) => store.products);
  useEffect(() => {
    dispatch(fetchProductsThunk());
  }, []);
  return (
    <>
      <div>
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
      </div>
      <div
        className={`p-6 rounded-lg shadow-md max-w-md mx-auto transition ${
          isDarkMode ? "bg-gray-800 text-white" : "bg-white"
        }`}
      >
        <h3 className="text-lg font-semibold">
          {user.name.firstname} {user.name.lastname}
        </h3>
        <p className="text-gray-600 dark:text-gray-300">{user.email}</p>
        <p className="text-gray-600 dark: text-gray-300">
          📍{user.address.city}, {user.address.street}
        </p>
      </div>
    </>
  );
};

export default ProductList;
