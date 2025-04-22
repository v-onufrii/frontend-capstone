import './TestimonialCard.css'

const TestimonialCard = ({ testimonial }) => {
    return (
        <div className="testimonial-card">
            <div className='testimonial-rating'>Rating: {testimonial.rating}</div>
            <div className="testimonial-card-content">
                <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
                <div className="testimonial-name">{testimonial.name}</div>
            </div>
            <div className='testimonial-text'>
                {testimonial.text}
            </div>
        </div>
    )
}

export default TestimonialCard;