import { useParams, useNavigate  } from "react-router";
import Navbar from "../components/navbar";
import { useEffect, useState } from "react";
import '../styles/singleCocktail.css';

const SingleCocktail = () => {
  const { cockTailId } = useParams();
  const navigate = useNavigate();
  const [cocktail, setCocktail] = useState(null);

  const fetchCocktailById = async () => {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cockTailId}`);
    const data = await response.json();

    if (data.drinks && data.drinks.length > 0) {
      setCocktail(data.drinks[0]);
    }
  };

  useEffect(() => {
    fetchCocktailById();
  }, [cockTailId]);

  const getIngredients = (cocktail) => {
    let ingredients = [];
    for (let i = 1; i <= 15; i++) {
      const ingredient = cocktail[`strIngredient${i}`];
      const measure = cocktail[`strMeasure${i}`];
      if (ingredient) {
        ingredients.push(`${measure ? measure : ""} ${ingredient}`.trim());
      }
    }
    return ingredients;
  };

  return (
    <>
      <Navbar />
      <section className="single-cocktail">
        <h1>Details:</h1>
        {/* <p>Drink ID: {cockTailId}</p> */}
        <div className="details">
          {cocktail ? (
            <div className="cocktail-info">
              <div className="first">
                <h2>{cocktail.strDrink}</h2>
                <img
                  src={cocktail.strDrinkThumb}
                  alt={cocktail.strDrink}
                  style={{ width: "300px", borderRadius: "10px" }}
                />
              </div>
              <div className="second">
                <p>
                  <span>Instructions:</span>
                  <span>{cocktail.strInstructions}</span>
                </p>
                <h3>Ingredients:</h3>
                <ul>
                  {getIngredients(cocktail).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <button 
                  onClick={() => navigate(-1)} className="back-button"
                >
                  ⬅ Back
                </button>
              </div>
            </div>
          ) : (
            <p>Loading cocktail details...</p>
          )}
        </div>
      </section>
    </>
  );
};

export default SingleCocktail;
