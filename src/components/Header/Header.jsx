import './Header.css'
const Header = () => {
    return (
        <nav className="navbar fixed-top navbar-expand-md navbar-light bg-light">
            <div class="container-fluid">
                <a href="#" className="navbar-brand"><span className="header-A-text">A</span> <span className="Header-studio-text">+ Studio</span></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto px-5">
                        <li className="nav-item active"><a href="#" className="nav-link">Home</a></li>
                        <li className="nav-item active"><a href="#" className="nav-link">What We Do</a></li>
                        <li className="nav-item active"><a href="#" className="nav-link">Service</a></li>
                        <li className="nav-item active"><a href="#" className="nav-link">Project</a></li>
                        <li className="nav-item active"><a href="#" className="nav-link">Blog</a></li>
                        <li className="nav-item active"><a href="#" className="nav-link">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav >
    )
}

export default Header