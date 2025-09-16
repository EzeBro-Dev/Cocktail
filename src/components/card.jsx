import '../styles/card.css'
import { Link } from "react-router";

const Card = ({cocktail}) => {
    const {  strDrink, strDrinkThumb, strCategory, strGlass, idDrink } = cocktail;
  return (
    <>
        <div className='card'>
            <div className="card-img">
                <img src={strDrinkThumb} alt={strDrink} />
            </div>
            <div className="card-content">
                <h1>{strDrink}</h1>
                <p>
                    <span>Category:</span>
                    {strCategory}
                </p>
                <p>
                    <span>Serving Glass:</span>
                    {strGlass}
                </p>
                <Link to={`/singleCocktail/${idDrink}`}>
                    <button>More Details</button>
                </Link>
            </div>
        </div>
    </>
  )
}

export default Card