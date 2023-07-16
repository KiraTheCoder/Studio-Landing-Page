import "./NewsLetter.css"
const NewsLetter = () => {
  return (
    <div className="container mt-4">
      <div className="row align-items-center ">


        <div className="col-md-6" data-aos="zoom-in">
          <div className="news-letter-col-container">
            <span className="new-letter-elem1"></span>
            <span className="new-letter-elem2"></span>

            <h3>Subscribe Newsletter</h3>
            <p>I will update good news and promotion service not spam</p>
          </div>
        </div>


        <div className="col-md-6" data-aos="zoom-out">
          <div className="news-letter-col-container">
            <span className="new-letter-elem3">
              <svg xmlns="http://www.w3.org/2000/svg" width="497" height="292" viewBox="0 0 497 292" fill="none">
                <path d="M7.07175 158.172C-19.0148 80.4252 38.8318 0 120.839 0H422C463.421 0 497 33.5786 497 75V217C497 258.421 463.421 292 422 292H123.901C80.9308 292 42.7643 264.549 29.0954 223.81L7.07175 158.172Z" fill="#2639ED" />
              </svg>
            </span>
            <div class="new-letter-input-group">
              <input type="email" class="ps-3 rounded-pill new-letter-input " placeholder="Enter your email address.." />
              <button className="new-letter-btn">Contact Now</button>
            </div>
          </div>
        </div>

      </div>
    </div >
  )
}

export default NewsLetter