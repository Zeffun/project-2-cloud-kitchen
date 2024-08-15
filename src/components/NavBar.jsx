import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
                <p>
                    <span><Link to="/">Home</Link></span> | <span><Link to="/find-recipes">Find Recipes</Link></span> | <span><Link to="/my-recipes">My Recipes</Link></span> | <span><Link to="/create-recipe">Create Recipe</Link></span>
                </p>
        </nav>
    );
  };
  
  export default NavBar;