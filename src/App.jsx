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

function App() {
  const isDarkMode = true;
  return (
    <>
      <div
        className={`p-6 min-h-screen transition-colors ${
          isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
        }`}
      >
        <Router>
          <div className="p-4 shadow-md flex justify-between items-center bg-white dark:bg-gray-800">
            <NavLink to="/" className="text-xl font-bold dark:text-white">
              🛒Shopping App
            </NavLink>
            <div className="flex items-center gap-4">
              <NavLink
                to="/cart"
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition"
              >
                View Cart
              </NavLink>
              <NavLink
                to="/user"
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition"
              >
                User Info
              </NavLink>
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
