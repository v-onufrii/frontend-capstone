import './Footer.css';


const Footer = () => {
    return (
        <footer className='footer'>
            <div className='section-holder foooter-inner'>
                <div className='footer-col footer-logo'>
                    <img src={require('../assets/small_logo.png')} alt='Little Lemon' />
                </div>
                <div className='footer-links footer-col'>
                    <h3>Navigation</h3>
                    <ul>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/'>About</a></li>
                        <li><a href='/'>Menu</a></li>
                        <li><a href='/'>Reservations</a></li>
                        <li><a href='/'>Order Online</a></li>
                        <li><a href='/'>Login</a></li>
                    </ul>
                </div>
                <div className='footer-links footer-col'>
                    <h3>Contact</h3>
                    <ul>
                        <li><a href='/'>Address</a></li>
                        <li><a href='/'>Phone Number</a></li>
                        <li><a href='/'>Email</a></li>
                    </ul>
                </div>
                <div className='footer-links footer-col'>
                    <h3>Social Media Links</h3>
                    <ul>
                        <li><a href='/'>Address</a></li>
                        <li><a href='/'>Phone Number</a></li>
                        <li><a href='/'>Email</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;