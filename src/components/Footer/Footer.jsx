import "./Footer.css"

const Footer = () => {
    return (
        <div className="container justify-content-center footer-container mt-md-4">
            <div className="row g-4">
                <div className="col-md-4">
                    <span>A</span> <span> + Studio</span>
                    <p>Leading digital agency with solid design and development expertise. We build readymade websites, mobile applications, and elaborate online business services.</p>
                </div>
                <div className="col-md-2">
                    <h4>What We Do</h4>
                    <ul>
                        <li> Web Design </li>
                        <li>App Design</li>
                        <li>Social Media Manage</li>
                        <li>Market Analysis Project</li>
                    </ul>
                </div>
                <div className="col-md-2">
                    <h4>Company</h4>
                    <ul>
                        <li>About Us</li>
                        <li>Career</li>
                        <li>Become Investor </li>
                    </ul>
                </div>
                <div className="col-md-2">
                    <h4>Support</h4>
                    <ul>


                        <li>FAQ</li>
                        <li>Policy</li>
                        <li>Business</li>
                    </ul>
                </div>
                <div className="col-md-2">
                    <h4>Contact</h4>
                    <ul>
                        <li>WhatsApp</li>
                        <li>Support 24</li>
                    </ul>
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-12">
                    <img src="/assets/facebook.png" alt="social-icons" className="social-media-icon" />
                    <img src="/assets/twitter.png" alt="social-icons" className="social-media-icon" />
                    <img src="/assets/linkedin.png" alt="social-icons" className="social-media-icon" />
                </div>
            </div>
        </div>
    )
}

export default Footer