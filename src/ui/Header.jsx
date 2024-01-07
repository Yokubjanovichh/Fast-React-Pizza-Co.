import React from "react";
import { Link } from "react-router-dom";
import SearchOrder from "../fuatures/order/SearchOrder";
import UserName from "../fuatures/user/UserName";

export default function Header() {
  return (
    <header className="font-pizza flex items-center justify-between border-b border-stone-200 bg-yellow-400 px-4 py-3 uppercase sm:px-6">
      <Link to="/" className="tracking-widest">
        React Pizza Co.
      </Link>
      <SearchOrder />
      <UserName />
    </header>
  );
}
