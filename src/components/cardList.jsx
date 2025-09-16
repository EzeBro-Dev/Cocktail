import '../styles/cardList.css'
import Card from './card'

const CardList = ({cocktailList }) => {
  return (
    <>
      <section className="card-section">
        <div className='card-header'>
            <h1>Cocktails:</h1>
        </div>
        <div className='card-container'>
          {cocktailList.map(cocktail=>{
            return <Card key={cocktail.idDrink} cocktail={cocktail} />
          })}
        </div>
      </section>
    </>
  )
}

export default CardList