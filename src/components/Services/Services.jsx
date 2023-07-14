import "./Services.css"
const Services = () => {
    return (
        <div className="container justify-content-center service-container">
            <div className="row align-items-center ">
                <div className="col-md-4">
                    <h3>How can we help your Business ?</h3>
                    <p>We build readymade websites, mobile applications, and elaborate online business services.</p>
                </div>
                <div className="col-md-8">
                    <div className="row text-center ms-5 gy-4 g-0">
                        <div className="col-md-5">
                            <div className="card mt-md-5">
                                <div className="card-body">
                                    <div className="service-icon-container mx-auto">  <img src="/assets/box-search 1.png" alt="" className="card-img service-icon" /></div>
                                    <h4 className="card-title mx-auto">Business Idea Planning</h4>
                                    <p className="card-text mx-auto">We present you a proposal and discuss niffty-gritty like</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="card ">
                                <div className="card-body">
                                    <div className="service-icon-container mx-auto">  <img src="/assets/empty-wallet 1.png" alt="" className="card-img service-icon" />
                                    </div>                                    <h4 className="card-title mx-auto">Financial Planning System</h4>
                                    <p className="card-text mx-auto">Protocols apart from aengage models, pricing billing</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 mt-md-5">
                            <div className="card">
                                <div className="card-body mx-auto">
                                    <div className="service-icon-container mx-auto">  <img src="/assets/code-1 1.png" alt="" className="card-img service-icon" />
                                    </div>                                    <h4 className="card-title mx-auto">Development Website and App</h4>
                                    <p className="card-text">Communication protocols apart from engagement models</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 mt-md-1">
                            <div className="card">
                                <div className="card-body mx-auto">
                                    <div className="service-icon-container mx-auto">  <img src="/assets/chart-square 1.png" alt="" className="card-img service-icon" />
                                    </div>                                    <h4 className="card-title mx-auto">Market Analysis Project</h4>
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