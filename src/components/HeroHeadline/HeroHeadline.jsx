import "./HeroHeadline.css"
const HeroHeadline = () => {
    return (
        <div className="conatiner-fluid justify-content-center hero-container">
            <div className="row align-items-center" >
                <div className=" col-md-5 ms-md-auto  col-12 mt-1 mt-md-0 pe-5 ps-5 p-md-0" data-aos="fade-right">
                    <h3>A Digital Product Agency</h3>
                    <p className="hero-para pt-md-3 pb-md-3">Leading digital agency with solid design and development expertise. We build readymade websites, mobile applications, and elaborate online business services.</p>
                    <div className="btn btn-lg btn-primary btn-sm rounded-pill">
                        <h4 className="pb-1  m-1 text-white">Contact Now</h4>
                    </div>
                </div>
                <div className="col-md-6 mt-4 mt-md-0 position-relative" data-aos="fade-left">
                    <img className="hero-img" src="/assets/image8.png" alt="" />
                    <span className="hero-bg-elem1"><svg xmlns="http://www.w3.org/2000/svg" width="129" height="129" viewBox="0 0 129 129" fill="none">
                        <circle cx="64.5" cy="64.5" r="64.5" fill="#DAE9FF" />
                    </svg></span>

                    <span className="hero-bg-elem2"></span>
                </div>
            </div>
        </div>
    )
}

export default HeroHeadline