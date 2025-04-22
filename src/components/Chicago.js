import './Chicago.css';

const Chicago = () => {
    return (
        <section className="chicago">
            <div className='chicago-inner section-holder'>
                <div className="chicago-content">
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                </div>
                <div className="chicago-images">
                    <img className='chicago-image-1' src={require('../assets/restaurant.jpg')} alt="Chicago" />
                    <img className='chicago-image-2' src={require('../assets/restaurant-chef.jpg')} alt="Chicago" />
                </div>
            </div>
        </section>
    );
}
export default Chicago;