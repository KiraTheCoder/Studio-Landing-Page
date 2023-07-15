import "./GreatSince.css"

const GreatSince = () => {
  return (
    <div className="container mt-md-4 mt-5">
      <div className="row d-flex justify-content-center align-items-center">

        <div className="col-md-6 mr-2">
          <div className="card border-light">
            <span className="great-since-video-elem1"><svg xmlns="http://www.w3.org/2000/svg" width="129" height="129" viewBox="0 0 129 129" fill="none">
              <circle cx="64.5" cy="64.5" r="64.5" fill="#FFF5DB" />
            </svg></span>
            <img src="/assets/video-img.png" alt="" className="card-img great-video-img" />
            <img src="/assets/play-rounded-button 1.png" className="great-img-btn" alt="" />
          </div>
        </div>
        <div className="col-md-6 mt-2 mt-md-0 ps-3 pe-3 p-md-0">
          <span className="great-since-video-elem2"></span>
          <h3>Great Digital Product Agency since 2016 </h3>
          <p>Our Business Plan is a written document describing a company's core business activites, Objectives, and how it plans to achieve its goals. Our goal is to provide our client high quality Product with modern idea accordingly their budgets and according thir reuirements.</p></div>
      </div>
    </div >
  )
}

export default GreatSince