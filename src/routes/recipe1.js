import React from "react";
import "./recipes.css";
export const Recipe1 = () => {
  return (
    <div className="recipe-container">
      <h1 className="recipe-header">Tandoori Tacos</h1>
      <h5 className="numbered-text">For the Tandoori Chicken:</h5>
      <ul className="no-bullets">
        <li>500g boneless chicken cut into small pieces</li>
        <li>2 tablespoons Shan Tandoori Masala</li>
        <li>Half cup yogurt</li>
        <li>1 tablespoon ginger-garlic paste</li>
        <li>1 tablespoon lemon juice</li>
        <li>1 tablespoon oil</li>
        <li>Salt to taste (optional, as Shan masala already contains salt)</li>
      </ul>

      <h5 className="numbered-text">For the Taco Assembly:</h5>
      <ul className="no-bullets">
        <li>8 small taco shells or soft tortillas</li>
        <li>1 cup lettuce - shredded</li>
        <li>1 medium onion - sliced thin</li>
        <li>1 medium cucumber - sliced thin</li>
        <li>Half cup fresh cilantro leaves</li>
        <li>Half cup mint-coriander chutney or any green chutney</li>
        <li>Half cup yogurt - for a drizzle or raita-style dressing</li>
        <li>1 tablespoon lemon juice for yogurt dressing</li>
      </ul>
      <h1 className="sub-header"> Instructions</h1>
      <ol className="numbered-list">
        <li>
          <h3 className="numbered-text">Marinate the Chicken: </h3>
          <ul className="no-bullets">
            <li>
              In a bowl, mix together Shan Chicken Tandoori Masala, yogurt,
              ginger-garlic paste, lemon juice, and oil.
            </li>
            <li>
              Add the boneless chicken pieces and coat them evenly in the
              marinade.
            </li>
            <li>
              Let the chicken marinate for at least 30 minutes or up to 4 hours
              for deeper flavor.
            </li>
          </ul>
        </li>
        <li>
          <h3 className="numbered-text"> Cook the Chicken: </h3>
          <ul className="no-bullets">
            <li>Preheat your grill, oven, or stovetop pan.</li>
            <li>
              Skewer the marinated chicken or cook directly on a heated grill
              pan.
            </li>
            <li>
              Cook the chicken for 8-10 minutes, turning occasionally, until
              fully cooked and slightly charred.
            </li>
            <li>
              If using an oven, bake at 400°F (200°C) for about 15-20 minutes,
              flipping halfway through.
            </li>
          </ul>
        </li>
        <li>
          <h3 className="numbered-text">
            {" "}
            Prepare the Yogurt Dressing (optional):{" "}
          </h3>
          <ul className="no-bullets">
            <li>
              Mix half cup yogurt with 1 tablespoon lemon juice and a pinch of
              salt for a simple creamy topping.
            </li>
            <li>
              Alternatively, drizzle mint-coriander chutney for a tangy, fresh
              flavor.
            </li>
          </ul>
        </li>
        <li>
          <h3 className="numbered-text"> Taco Assembly: </h3>
          <ul className="no-bullets">
            <li>
              Warm the taco shells or tortillas in a pan for a few seconds.
            </li>
            <li>Place a generous amount of shredded lettuce on each shell.</li>
            <li>Add the chicken tikka pieces.</li>
            <li>
              Top with sliced onions, cucumbers, and fresh cilantro leaves.
            </li>
            <li>Drizzle with the yogurt dressing or chutney.</li>
            <li>Add jalapenos for extra spice if desired.</li>
          </ul>
        </li>
      </ol>
    </div>
  );
};
