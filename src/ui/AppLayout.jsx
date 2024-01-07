import React from "react";
import Loader from "./Loader";
import Header from "./Header";
import CarOverview from "../fuatures/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";

export default function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}
      <Header />
      <div className="overflow-scroll">
        <main className="mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>
      <CarOverview />
    </div>
  );
}
