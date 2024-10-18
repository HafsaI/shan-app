import React from "react";
import "./footer.css";
import { FaInstagram } from "react-icons/fa";

export const BottomFooter = () => {
  return (
    <footer className="footer">
      <div>
        <FaInstagram size={30} color={"#CD1921"} />
      </div>
      <a
        className="footer-title"
        href="https://www.instagram.com/shanfoodsglobal/?hl=en"
        target="_blank"
      >
        @shanfoodsglobal
      </a>
      <div />
    </footer>
  );
};
