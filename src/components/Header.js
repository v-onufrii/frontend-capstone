import './Header.css';
import NavBar from "./NavBar";

const Header = () => {
    return (
        <header className='header section-holder'>
            <div className='header-logo'>
                <img src={require("../assets/Logo.png")} alt="Little Lemon" />
            </div>
            <NavBar />
        </header>
    )
}

export default Header;