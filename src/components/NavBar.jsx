import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
                <p>
                    <Link to="/">Home</Link>
                </p>
                <p>
                    <Link to="/find-recipes">Find Recipes</Link>
                </p>
                <p>
                    <Link to="/my-recipes">My Recipes</Link>
                </p>
        </nav>
    );
  };
  
  export default NavBar;