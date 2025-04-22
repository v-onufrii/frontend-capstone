import './SpecialCard.css'

const SpecialCard = ({ special }) => {
    return (
        <div className="special-card">
            <img src={special.image} alt={special.title} />
            <div className='special-card-content'>
                <h3>{special.title}</h3>
                <p>{special.description}</p>
                <p className='special-card-price'>${special.price}</p>
                <a href='/order' className='special-card-deliver'>Order a delivery</a>
            </div>
        </div>
    );
}
export default SpecialCard;