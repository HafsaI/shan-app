import React from "react";
import "./recipes.css";
export const Recipe2 = () => {
  return (
    <div className="recipe-container">
      <h1 className="recipe-header">Pani Puri</h1>
      <ul className="no-bullets">
        <li>2 medium potatoes - boiled and mashed</li>
        <li>1 cup boiled chickpeas (channa)</li>
        <li>1 tablespoon Shan Chana Masala</li>
        <li>1 teaspoon cumin powder</li>
        <li>1 teaspoon Shan chaat masala</li>
        <li>1 teaspoon red chili powder - optional, for spice</li>
        <li>1 teaspoon tamarind chutney - optional, for a tangy flavor</li>
        <li>Salt to taste</li>
        <li>Fresh coriander leaves - finely chopped</li>
        <li>1 tablespoon lemon juice</li>
        <li>Half teaspoon black salt</li>
      </ul>
      <h1 className="sub-header"> Instructions</h1>
      <ol className="numbered-list">
        <li>
          <h3 className="numbered-text">Prepare the Potatoes and Chickpeas: </h3>
          <ul className="no-bullets2">
            <li>
              Boil and peel the potatoes, then mash them in a mixing bowl.
            </li>
            <li>
              Add the boiled chickpeas to the mashed potatoes and mix well.
            </li>
          </ul>
        </li>
        <li>
        <h3 className="numbered-text">Spice it Up: </h3>
          <ul className="no-bullets2">
            <li>
              Add 1 tablespoon of Shan Chana Masala to the potato and chickpea
              mixture.
            </li>
            <li>
              Sprinkle cumin powder, Shan chaat masala, and Shan red chili
              powder if you like extra spice.
            </li>
            <li>Add black salt and regular salt as per your taste.</li>
          </ul>
        </li>
        <li>
        <h3 className="numbered-text">Add Tang and Freshness: </h3>
          <ul className="no-bullets2">
            <li>Add lemon juice for a fresh, tangy flavor.</li>
            <li>
              Optionally, mix in some tamarind chutney for added sweetness and
              tanginess.
            </li>
            <li>Garnish the mixture with finely chopped coriander leaves.</li>
          </ul>
        </li>
        <li>
        <h3 className="numbered-text">Combine and Serve: </h3>
          <ul className="no-bullets2">
            <li>Mix everything together until well combined.</li>
            <li>
              This stuffing is now ready to be used in your pani puris. Stuff
              the puris with this masala and enjoy with spicy or tangy pani,
              water, and enjoy!
            </li>
          </ul>
        </li>
      </ol>
    </div>
  );
};
