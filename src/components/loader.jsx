import { PacmanLoader } from "react-spinners";
import '../styles/loader.css'

const Loader = () => {
  return (
    <>
        <div className="loader-container">
            <PacmanLoader 
                color="crimson" 
                size={window.innerWidth < 600 ? 30 : window.innerWidth < 1000 ? 40 : 50}
            />
        </div>
    </>
  )
}

export default Loader