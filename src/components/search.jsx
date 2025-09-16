import '../styles/search.css'

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <>
        <section className="search">
            <div className="search-container">
                <p>
                    Search For Your Favourite
                    <span> Cocktail</span>
                </p>
                <form>
                    <input 
                        type="text" 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </form>
            </div>
        </section>
    </>
  )
}

export default Search