import Navbar from '../components/navbar'
import Search from '../components/search'
import Footer from '../components/footer'
import Loader from '../components/loader'
import { useState, useEffect } from 'react'
import CardList from '../components/cardList'

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(false)
  const [cocktailList, setCocktailList] = useState([])

  const searchItem = searchTerm ? searchTerm : 'margarita'
  const fetchCocktails = async () => {
    setLoading(true)
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchItem}`)
    const data = await response.json()
    console.log(data)
    setCocktailList(data.drinks)
    setLoading(false)
  }

  useEffect(() => {
    fetchCocktails()
  }, [searchTerm])

  return (
    <>
        <Navbar />
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        {
          loading ?
          <Loader/> :
          <CardList cocktailList={cocktailList} />
        }
        <Footer />
    </>
  )
}

export default Home