import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  NavLink,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import UserPage from "./pages/UserPage";
import { useSelector } from "react-redux";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  const isDarkMode = useSelector((store) => store.theme.isDarkMode);
  const totalItems = useSelector((store) => store.cart.totalQuantity);
  return (
    <>
      <div
        className={`p-6 min-h-screen transition-colors ${
          isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
        }`}
      >
        <Router>
          <div
            className={`${isDarkMode ? "p-4 shadow-md flex justify-between items-center bg-white dark:bg-gray-800" : "p-4 shadow-md flex justify-between items-center bg-gray-900 dark:bg-gray-100"}`}
          >
            <NavLink
              to="/"
              className={`${isDarkMode ? "text-xl font-bold dark:text-white" : "text-xl font-bold dark:text-gray-900"}`}
            >
              🛒Shopping App
            </NavLink>
            <div className="flex items-center gap-4">
              <NavLink
                to="/cart"
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition"
              >
                View Cart
                {totalItems === 0 ? (
                  <span> </span>
                ) : (
                  <span className="px-1 py-1 m-1 rounded-full bg-red-500 border-1  text-white text-xs">
                    {totalItems}
                  </span>
                )}
              </NavLink>
              <NavLink
                to="/user"
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition"
              >
                User Info
              </NavLink>
              <ThemeToggle />
            </div>
          </div>

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/user" element={<UserPage />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
