import './Confirmation.css';

const Confirmation = () => {
    return (
        <div className="confirmation">
            <div className="section-holder">
                <div className="confirmation-content">
                    <h1>Thank you for your reservation!</h1>
                    <p>Your book has been successfully placed.</p>
                    <p>We will send you a confirmation email shortly.</p>
                </div>
            </div>
        </div>
    );
}

export default Confirmation;