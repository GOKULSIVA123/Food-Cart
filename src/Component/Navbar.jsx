// src/components/Navbar.js
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="2xl:container bg-blue-300 mx-auto">
        <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 py-3">
          <div className="w-[210%] flex flex-row justify-between">
          <h1>Food Cart</h1>
          <div className="flex flex-row gap-4">
            <Link to="/">Home</Link>
            <Link to="/viewcart">View Cart</Link>
            <Link to="/Favourite">Favourites</Link>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
