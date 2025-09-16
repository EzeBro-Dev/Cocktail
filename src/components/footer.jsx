import '../styles/footer.css'

const Footer = () => {
  return (
    <>
        <div className="footer">
            <div className="footer-links">
                <div>
                    <h1>
                        <span>Cocktail </span>
                        DB
                    </h1>
                    <p>At Winn-cocktail, we are passionate about the art of mixology and the joy that comes from crafting and savoring exceptional cocktails.</p>
                </div>
                <div>
                    <h1>Top Courses</h1>
                    <a href="#">Mixology Basics</a>
                    <a href="#">Spirit Spotlight</a>
                    <a href="#">Cocktail Recipes & Techniques</a>
                </div>
                <div>
                    <h1>Pages</h1>
                    <a href="#" className='pages'>Home</a>
                    <a href="#" className='pages'>About</a>
                    <a href="#" className='pages'>Training</a>
                </div>
                <div>
                    <h1>Contact</h1>
                    <a href="#"><i className="fa-regular fa-envelope"></i></a>
                    <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
                    <a href="#"><i className="fa-brands fa-github"></i></a>
                </div>
            </div>
            <div className='copyright'>
                <p>Developed By Ezebro © 2025.</p>
            </div>
        </div>
    </>
  )
}

export default Footer