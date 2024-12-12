import React from 'react'
import './header.css'
const TopHeader = () => {
  return (
    <header className="header">
    <div className="logo-container">
      <img src="./images/logo.png" alt="Logo" className="logo-img" />
    </div>
    <div className="title-container">
      <div>
        <h1 className="main-title">Shan Spice <span style={{fontFamily: "Poppins"}}>&</span> Bites</h1>
        // <h2 className="sub-title">NYC Tour</h2>
      </div>
    </div>
    <div /> 
  </header>
  )
}

export default TopHeader
