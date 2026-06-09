import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserThunk } from "../redux/userSlice";

const UserPage = () => {
  const dispatch = useDispatch();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { loading, error, user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUserThunk);
  }, []);
  return (
    <div
      className={`p-6 min-h-screen transition-colors ${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}
    >
      <h2 className="text-2xl font-bold mb-4">User Info</h2>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {user && <div className={`p-6 rounded-lg shadow-md`}></div>}
    </div>
  );
};

export default UserPage;
