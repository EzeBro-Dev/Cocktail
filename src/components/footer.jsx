import '../styles/footer.css'
import { NavLink } from 'react-router';

const Footer = () => {
  return (
    <>
        <div className="footer">
            <div className="footer-links">
                <div>
                    <h1>
                        <span>Cocktail </span>
                        Ruddy
                    </h1>
                    <p>At Cocktail-Ruddy, we are passionate about the art of mixology and the joy that comes from crafting and savoring exceptional cocktails.</p>
                </div>
                <div>
                    <h1>Top Courses</h1>
                    <a href="#">Mixology Basics</a>
                    <a href="#">Spirit Spotlight</a>
                    <a href="#">Cocktail Recipes & Techniques</a>
                </div>
                <div>
                    <h1>Pages</h1>
                    <p className='pages'>
                        <NavLink to="/" end>
                            Home
                        </NavLink>
                    </p>
                    <p className='pages'>
                        <NavLink to="/about" end>
                            About
                        </NavLink>
                    </p>
                    <p className='pages'>
                        <NavLink to="/training" end>
                            Training
                        </NavLink>
                    </p>
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