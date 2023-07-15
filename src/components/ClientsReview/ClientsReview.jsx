import "./ClientsReview.css"

const ClientsReview = () => {
    return (
        <div className="container clients-review-container mt-5 mt-md-3">
            <div className="row align-items-center text-center ">
                <div className="col-md-12">
                    <h3>What our happy client say</h3>
                    <p className="client-above-para">Several selected clients, who already believe in our service.</p>
                </div>
            </div>

            <div className="row align-items-center  mt-2 mt-md-0">
                <div className="col-md-4 clinet-img-container">
                    <img src="/assets/client1.png" alt="" className="clinet-img" />
                </div>
                <div className="col-md-4 mt-3 mt-md-0 ps-3 ps-md-0">
                    <h4>Matthew Paul</h4>
                    <p>Perfect, very good job! Thank you for the amazing design and work. Really impressed with the high quality and quick turnaround time. Highly recommend.</p>

                    <div className="clinets-svg-container"> <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="8" fill="#2639ED" />
                    </svg></span>
                        <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <circle cx="8" cy="8" r="8" fill="#E7F0FC" />
                        </svg></span>
                        <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <circle cx="8" cy="8" r="8" fill="#E7F0FC" />
                        </svg></span>
                        <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <circle cx="8" cy="8" r="8" fill="#E7F0FC" />
                        </svg></span>
                        <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <circle cx="8" cy="8" r="8" fill="#E7F0FC" />
                        </svg></span>
                        <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <circle cx="8" cy="8" r="8" fill="#E7F0FC" />
                        </svg></span>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="client-img-icon-container">
                        <img src="/assets/clinet-icon1.png" alt="client" className="client-img-icon1 client-img-icon" />
                        <img src="/assets/clinet-icon2.png" alt="client" className="client-img-icon2 client-img-icon" />
                        <img src="/assets/clinet-icon3.png" alt="client" className="client-img-icon3 client-img-icon" />
                        <img src="/assets/clinet-icon4.png" alt="client" className="client-img-icon4 client-img-icon" />
                        <img src="/assets/clinet-icon5.png" alt="client" className="client-img-icon5 client-img-icon" />
                        <img src="/assets/clinet-icon6.png" alt="client" className="client-img-icon6 client-img-icon" />
                        <img src="/assets/clinet-icon7.png" alt="client" className="client-img-icon7 client-img-icon" />
                        <img src="/assets/clinet-icon8.png" alt="client" className="client-img-icon8 client-img-icon" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClientsReview