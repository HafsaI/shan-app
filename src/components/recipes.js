import React from "react";
import "./recipes.css";
import { Link } from "react-router-dom";
export const Recipes = () => {
  return (
    <div className="container">
      <p>Our Recipes</p>
      <div className="card-container">
        <div className="card">
          <img
            src="./images/tacos.png"
            alt="Tandoori Tacos"
            className="card-image"
          />
          <div className="card-content">
            <div className="card-text">
              <h3>Tandoori Tacos</h3>
              <p>Made with Shan Tandoori masala</p>
            </div>
            <Link className="card-button" to="/tacos">
              Recipe
            </Link>
          </div>
        </div>

        <div className="card">
          <img
            src="./images/panipuri2.png"
            alt="Pani Puri"
            className="card-image2"
          />
          <div className="card-content">
            <div className="card-text">
              <h3>Pani Puri</h3>
              <p>Made with Shan Chana masala</p>
            </div>
            <Link className="card-button" to="/panipuri">
              Recipe
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

{
  /* <Row  gutter={16} >
        <Col xs={ 24 } md={ 12}>
          <div className="card">
            <img src="./images/tacos.png" alt={'title'} className="card-image" />
            <div className="card-content">
              <div className="card-text">
                <h3>{"Tandoori Tacos"}</h3>
                <p>{'Made with Shan Tandoori masala"'}</p>
              </div>
              <button className="card-button">{"Recipe"}</button>
            </div>
          </div>
        </Col>
        <Col xs={ 24 } md={ 12}>
          <div className="card">
            <img src="./images/tacos.png" alt={'title'} className="card-image" />
            <div className="card-content">
              <div className="card-text">
                <h3>{"Tandoori Tacos"}</h3>
                <p>{'Made with Shan Tandoori masala"'}</p>
              </div>
              <button className="card-button">{"Recipe"}</button>
            </div>
          </div>
        </Col>
      </Row> */
}
