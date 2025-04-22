import './Reservations.css';
import ReservationForm from './ReservationForm';
import { useReducer } from 'react';
import { fetchAPI, submitAPI } from '../../serverApi.js';
import { useNavigate } from 'react-router-dom';

const Reservations = () => {
    const output = fetchAPI(new Date());
    const [availableTimes, dispatch] = useReducer(initializeTimes, output);
    const navigate = useNavigate();

    function initializeTimes(date) {
        return fetchAPI(date);
    }

    function submitForm(formData){
        const response = submitAPI(formData);

        if (response) {
            navigate("/confirmation");
        }
    }

    return (
        <section className="reservations ">
            <div className="reservation-header">
                <div className='reservation-content'>
                    <div className='reservation-content-inner'>
                        <h1>Reservations</h1>
                        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                        <p>We take reservations for lunch and dinner. We look forward to serving you!</p>
                    </div>
                </div>
                <div className="reservation-image">
                    <img src={require("../../assets/restaurant.jpg")} alt="Little Lemon" />
                </div>
            </div>
            <div className="reservation-form-inner section-holder">
                <ReservationForm availableTimes={availableTimes} updateTimes={dispatch} submitForm={submitForm} />
            </div>
        </section>
    );
}
export default Reservations;