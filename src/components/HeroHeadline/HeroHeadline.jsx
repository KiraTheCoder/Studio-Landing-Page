import "./HeroHeadline.css"
const HeroHeadline = () => {
    return (
        <div className="conatiner-fluid d-flex justify-content-center">
            <div className="row align-items-center g-5 ">
                <div className="col-md-5">
                    <h3>A Digital Product Agency</h3>
                    <p className="hero-para">Leading digital agency with solid design and development expertise. We build readymade websites, mobile applications, and elaborate online business services.</p>
                    <div className="btn btn-lg btn-primary rounded-pill">
                        <div className="pb-1">Contact Now</div>
                    </div>
                </div>
                <div className="col-md-7">
                    <img className="hero-img" src="/assets/image8.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default HeroHeadline