import "./NewsLetter.css"
const NewsLetter = () => {
  return (
    <div className="container justify-content-center mt-md-3">
      <div className="row align-items-center text-center">
        <div className="col-md-6">
          <h3>Subscribe Newsletter</h3>
          <p>I will update good news and promotion service not spam</p>
        </div>
        <div className="col-md-6">
          <div className="news-lellter-input-container">
            <div class="input-group">
              <input type="email" class="form-control rounded-pill " placeholder="Enter your email address.." aria-label="email" aria-describedby="basic-addon1" />
              <button className="btn btn-primary  rounded-pill">Contact Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsLetter