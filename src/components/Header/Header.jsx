import './Header.css'
const Header = () => {
    return (
        <nav className="navbar fixed-top navbar-expand-md navbar-light bg-light ">
            <div class="container" data-aos="zoom-in-down">
                <a href="#" className="navbar-brand"><span className="header-A-text">A+</span> <span className="Header-studio-text"> Studio</span></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-md-auto">
                        <li className="nav-item"><a href="#" className="nav-link active">Home</a></li>
                        <li className="nav-item"><a href="#" className="nav-link active">What We Do</a></li>
                        <li className="nav-item"><a href="#" className="nav-link active">Service</a></li>
                        <li className="nav-item"><a href="#" className="nav-link active">Project</a></li>
                        <li className="nav-item"><a href="#" className="nav-link active">Blog</a></li>
                        <li className="nav-item"><a href="#" className="nav-link active">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav >
    )
}

export default Header