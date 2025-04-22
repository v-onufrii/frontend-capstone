import './Specials.css';
import SpecialCard from './SpecialCard';

const specialsData = [
    {
        id: 1,
        title: "Greek Salad",
        description: "A delicious mix of fresh vegetables, feta cheese, and olives.",
        price: 12.99,
        image: require("../../assets/greek-salad.jpg")}
    ,
    {
        id: 2,
        title: "Bruschetta",
        description: "Grilled bread topped with fresh tomatoes, garlic, and basil.",
        price: 8.99,
        image: require("../../assets/bruschetta.png")
    },
    {
        id: 3,
        title: "Lemon Tart",
        description: "A refreshing dessert with a tangy lemon filling.",
        price: 6.99,
        image: require("../../assets/lemon-dessert.jpg")}
]

const Specials = () => {
    return (
        <section className="specials section-holder">
            <div className="specials-header">
                <h2>This Week's Specials</h2>
                <button className="btn specials-button">Online Menu</button>
            </div>

            <div className="specials-list">
                {specialsData.map((special) => (
                    <SpecialCard key={special.id} special={special} />
                ))}
            </div>
        </section>
    )
}

export default Specials;