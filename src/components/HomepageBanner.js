import './HomepageBanner.css'
import { Link } from 'react-router-dom';

const HomepageBanner = () => {
    return (
        <section className="homepage-banner">
            <div className="section-holder homepage-banner-inner">
                <div className="banner-content">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <Link to={'/reservations'} className="btn btn-reserve">
                        Reserve a Table
                    </Link>
                </div>

                <div className="banner-image">
                    <img src={require("../assets/restauranfood.jpg")} alt="Little Lemon" />
                </div>
            </div>
        </section>
    )
};

export default HomepageBanner;