import "./Services.css"
const Services = () => {
    return (
        <div className="container  service-container mt-5">
            <div className="row align-items-center ms-4 ms-md-0">
                <div className="col-md-4" data-aos="fade-down">
                    <h3>How can we help your Business ?</h3>
                    <p>We build readymade websites, mobile applications, and elaborate online business services.</p>
                    <span className="service-container-first-col-elem"></span>
                </div>
                <div className="col-md-8 ms-0  mt-4 mt-md-0">
                    <div className="row text-center ms-md-2 ms-lg-5 gy-4 g-0 services-card-container">

                        <div data-aos="fade-right"
                            data-aos-anchor-placement="center-bottom" data-aos-duration="1000" className="col-md-5 ">
                            <div className="card mt-md-5">
                                <div className="card-body">
                                    <div className="service-icon-container mx-auto">  <img src="/assets/box-search 1.png" alt="" className="card-img service-icon" /></div>
                                    <h4 className="card-title mx-auto">Business Idea Planning</h4>
                                    <p className="card-text mx-auto">We present you a proposal and discuss niffty-gritty like</p>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-left"
                            data-aos-anchor-placement="center-bottom" data-aos-duration="1000" className="col-md-5 ms-md-5 ms-lg-4">
                            <span className="service-container-second-col-elem1"></span>
                            <span className="service-container-second-col-elem2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120" fill="none">
                                    <circle cx="60" cy="60" r="55.6" stroke="#FF007A" stroke-width="8.8" />
                                </svg>
                            </span>
                            <div className="card ">
                                <div className="card-body">
                                    <div className="service-icon-container service-icon-gold-color mx-auto">
                                        <img src="/assets/empty-wallet 1.png" alt="" className="card-img service-icon" />
                                    </div>
                                    <h4 className="card-title mx-auto">Financial Planning System</h4>
                                    <p className="card-text mx-auto">Protocols apart from aengage models, pricing billing</p>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-right"
                            data-aos-anchor-placement="center-bottom" data-aos-duration="1000" className="col-md-5 mt-md-5">

                            <div className="card">
                                <div className="card-body mx-auto">
                                    <div className="service-icon-container mx-auto">  <img src="/assets/code-1 1.png" alt="" className="card-img service-icon" />
                                    </div>                                    <h4 className="card-title mx-auto">Development Website and App</h4>
                                    <p className="card-text">Communication protocols apart from engagement models</p>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-left"
                            data-aos-anchor-placement="center-bottom" data-aos-duration="1000" className="col-md-5 mt-md-1 ms-md-5 ms-lg-4">
                            <div className="card">
                                <div className="card-body mx-auto">
                                    <div className="service-icon-container service-icon-gold-color mx-auto">  <img src="/assets/chart-square 1.png" alt="" className="card-img service-icon" />
                                    </div>
                                    <h4 className="card-title mx-auto">Market Analysis Project</h4>
                                    <p className="card-text">Protocols apart from aengage models, pricing billing</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services