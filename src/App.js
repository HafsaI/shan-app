import React from "react";
import "./App.css";
import { Layout } from "antd";
// import Banner from "./components/bannertop.js";
import TopHeader from "./components/header.js";
import { MarqueeComponent } from "./components/marquee.js";
import { Recipes } from "./components/recipes.js";
import { Shop } from "./components/shop.js";
import { BottomFooter } from "./components/footer.js";
import { Route, Routes } from "react-router-dom";
import { Home } from "./routes/home.js";
import { Recipe1 } from "./routes/recipe1.js";
import { Recipe2 } from "./routes/recipe2.js";

const { Footer } = Layout;
function App() {
  return (
    <div>
      <TopHeader />
      <MarqueeComponent />

      <Routes>
      <Route path="*" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/panipuri" element={<Recipe2 />} />
        <Route path="/tacos" element={<Recipe1 />} />
        {/* <Route path="/recipe2" element={<Contact />} /> */}
      </Routes>

      <BottomFooter />
    </div>
  );
}

export default App;
