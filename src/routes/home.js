import React from "react";
import { Recipes } from "../components/recipes";
import { Shop } from "../components/shop";
import Banner from "../components/bannertop";

export const Home = () => {
  return (
    <>
      <Banner />
      <Recipes />
      <Shop />
    </>
  );
};
