import React from "react";
import "./shop.css";

export const Shop = () => {
  const links = [
    "https://www.amazon.com/Shan-Tandoori-Masala-Recipe-Seasoning/dp/B07YRYC8ZX/ref=sr_1_5?crid=FMCQLUYZQ483&dib=eyJ2IjoiMSJ9.ezeudp7Jzc4Zvb3RYOQgrLmU45oIBI0pLscPCs9wr5FZUyrC64wCiBypUzfusVCEFoFTUH7K5dW1saYmUQCp6Fl-WH4u6q1uwG8lx65yQRhyjQN3vC8g2O4iHESD7VqN51bmxbnYaSCPem4tqB-YruDXnjmvABLRcMpasF33BhW2WkWO7RtVVQiNZ7qBYvS27RqnzoX-U_sdrl-LCdtvOsk2jRMVwCx_lJ_ukCLB11YeR3zvlAVfvSV4YimTy2yvg5AnShyWO8Hf3xB0cYTDOmj-2geN48yJoQzlMNcp7P8.xMQb5Q3vHoJjhkCZo0SS7L1l0nMgOkHwDdieEzYxHp8&dib_tag=se&keywords=shan%2Btandoori%2Bmasala&qid=1728070778&sprefix=shan%2Btandoo%2Caps%2C95&sr=8-5&th=1",
    "https://www.amazon.com/Shan-Chana-Masala-Recipe-Seasoning/dp/B08KGPT51Y/ref=sr_1_4?crid=1SRTS31MRR6BB&dib=eyJ2IjoiMSJ9.fT9XdYtKihx51wZfF3sQGhbR0CQE5atwr7fPDdBcDGTg1c4iHSUPjj7w1UuNPqsBaf_kCSfP6nTytaoSOQdpIYYMCEEnk7YMK5opvcUXTyASxF-dwIHhFupILJ7bQLTGE0XhxjIZ9VHACokg8Ztv86_i4w1JX4tm7Blfc8yQfbdPv19lLAJ7csFJ98RgsOeMhu3J7gix9fSx4M8z2enSQdhFxn-JlFxSo33p7fx821vkH3tOHU7YvO6RlRvu0dMHwLS2EKRmBhOB58WksAV8WybPf4q3TqqiyE6Y28QLlCU.J2_G_eF0d5zpG4kp78iOzl1Ues3UTm6aDOyJWTRFeTI&dib_tag=se&keywords=shan+chana+masala&qid=1728070827&sprefix=shan+chana+masala%2Caps%2C88&sr=8-4",
  ];
  return (
    <div className="shop-container">
      <p>Our Shop</p>
      <div className="product-card-container">
        <div className="product-card">
          <img
            src="./images/tandoori.png"
            alt="Tandoori Tacos"
            className="product-image"
          />
          <div className="product-content">
            <div className="product-text">
              <h3>Shan Tandoori Masala</h3>
            </div>
            <a className="product-button" href={links[0]} target="_blank">
              Buy On Amazon
            </a>
          </div>
        </div>

        <div className="product-card">
          <img
            src="./images/chanamasla.png"
            alt="Pani Puri"
            className="product-image"
          />
          <div className="product-content">
            <div className="product-text">
              <h3>Shan Chana Masala</h3>
              {/* <p>Made with Shan Chana masala</p> */}
            </div>
            <a className="product-button" href={links[1]} target="_blank"> Buy On Amazon</a>
          </div>
        </div>
      </div>
    </div>
  );
};
