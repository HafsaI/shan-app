import React from "react";
import "./App.css";
import { Layout } from "antd";
import Banner from "./components/banner.js";
const { Header, Footer, Content } = Layout;
function App() {
  return (
    <Layout>
      <Header className="fixed-header">
        <div className="header-text">
          Shan Spice & Bites <span className="header-subtext">NYC Tour</span>
        </div>
      </Header>
      <Banner />
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default App;
