import '../styles/trainingsec.css'

const Trainingsec = () => {
  return (
    <>
        <section className="training">
            <h2>Training</h2>
            <div className='training-content'>
                <div>
                    <p>
                        Welcome to the Training Hub at Winn-cocktail
                        Embark on a journey of discovery and mastery with our comprehensive training resources designed to elevate 
                        your mixology skills. Whether you're a novice looking to shake up your first cocktail or an experienced 
                        bartender aiming to refine your craft, our training page is your go-to destination for learning and growth.
                    </p>
                    <h4>Mixology Basics:</h4>
                    <p>
                        <span>Learn the fundamental techniques of mixology, including shaking, stirring, muddling, and layering.</span>
                        <span>Understand the key components of a well-balanced cocktail and the importance of proper measurements.</span>
                    </p>
                    <h4>Spirit Spotlight:</h4>
                    <p>
                        Dive deep into the world of spirits. Explore the unique characteristics of different types of liquor, from classic 
                        favorites to emerging trends.
                    </p>
                    <h4>Cocktail Recipes & Techniques:</h4>
                    <p>
                        <span>Explore a diverse range of cocktail recipes, each accompanied by step-by-step instructions and pro tips.</span>
                        <span>Master advanced techniques to take your cocktail game to the next level.</span>
                    </p>
                </div>
                <div>
                    <form>
                        <input type="text" />
                        <input type="text" />
                        <select>
                            <option>Novice</option>
                            <option>Intermediate</option>
                            <option>Advance</option>
                        </select>
                        <select>
                            <option>Video Tutorials</option>
                            <option>Written Guides</option>
                            <option>Live webinars</option>
                        </select>
                        <input type="submit" />
                    </form>
                </div>
            </div>
        </section>
    </>
  )
}
export default Trainingsec