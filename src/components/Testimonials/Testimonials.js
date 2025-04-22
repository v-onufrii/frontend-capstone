import './Testimonials.css'
import TestimonialCard from './TestimonialCard'

const testimonialsData = [
    {
        id: 1,
        name: "John Doe",
        text: "This is the best service I've ever used!",
        rating: 5,
        image: require('../../assets/user.png')
    },
    {
        id: 2,
        name: "Jane Smith",
        text: "I had a great experience, highly recommend!",
        rating: 4,
        image: require('../../assets/user.png')
    },
    {
        id: 3,
        name: "Sam Wilson",
        text: "Not what I expected, but still good.",
        rating: 3,
        image: require('../../assets/user.png')
    },
    {
        id: 4,
        name: "Chris Evans",
        text: "I will definitely use this service again!",
        rating: 5,
        image: require('../../assets/user.png')
    }
]

const Testimonials = () => {
    return (
        <section className="testimonials section-holder">
            <h2 className="testimonials-title">Testimonials</h2>
            <div className="testimonials-list">
                {testimonialsData.map((testimonial) => (
                    <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                ))}
            </div>
        </section>
    )
}

export default Testimonials;