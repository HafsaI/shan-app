import React from "react";
import "./App.css";
import { Layout  } from "antd";
// import Banner from "./components/bannertop.js";
import TopHeader from "./components/header.js";
import { MarqueeComponent } from "./components/marquee.js";
import { Recipes } from "./components/recipes.js";
import { Shop } from "./components/shop.js";
import { BottomFooter } from "./components/footer.js";
const { Footer} = Layout;
function App() {
  return (
    <div>
      <TopHeader />
      <MarqueeComponent />
      <Recipes/>
      <Shop/>
      <BottomFooter/>
      
    </div>
  );
}

export default App;

{
  /* <Header className="header">
  <Row justify="space-between" align="middle" className="header-row" gutter={16}>
    <Col className="header-logo-col">
      <img 
        src="./images/logo.png" 
        alt="Logo" 
        className="logo-img" 
      />
    </Col>
    <Col>
      <div className="header-text">
        <h1 className="header-title">Shan Spice & Bites</h1>
        <h2 className="header-subtitle">NYC Tour</h2>
      </div>
    </Col>
    <Col />
  </Row>
</Header> */
}
