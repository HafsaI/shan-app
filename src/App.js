import React from "react";
import "./App.css";
import { Col, Layout, Row } from "antd";
import Banner from "./components/bannertop.js";
import TopHeader from "./components/header.js";
import { MarqueeComponent } from "./components/marquee.js";
const { Footer, Content } = Layout;
function App() {
  return (
    <Layout>
      <TopHeader />
      <MarqueeComponent />

      <Footer>Footer</Footer>
    </Layout>
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
