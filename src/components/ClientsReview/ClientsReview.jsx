import "./ClientsReview.css"

const ClientsReview = () => {
    return (
        <div className="container justify-content-center clients-review-container">
            <div className="row align-items-center text-center ">
                <div className="col-md-12">
                    <h3>What our happy client say</h3>
                    <p className="client-above-para">Several selected clients, who already believe in our service.</p>
                </div>
            </div>

            <div className="row align-items-center">
                <div className="col-md-4">
                    <img src="/assets/client1.png" alt="" className="clinet-img" />
                </div>
                <div className="col-md-4">
                    <h4>Matthew Paul</h4>
                    <p>Perfect, very good job! Thank you for the amazing design and work. Really impressed with the high quality and quick turnaround time. Highly recommend.</p>
                </div>
                <div className="col-md-4">
                    <div className="client-img-icon-container">
                        <img src="/assets/clinet-icon1.png" alt="" className="client-img-icon1" /><img src="/assets/clinet-icon2.png" alt="" className="client-img-icon2" /><img src="/assets/clinet-icon3.png" alt="" className="client-img-icon3" /><img src="/assets/clinet-icon4.png" alt="" className="client-img-icon4" /><img src="/assets/clinet-icon5.png" alt="" className="client-img-icon5" /><img src="/assets/clinet-icon6.png" alt="" className="client-img-icon6" /><img src="/assets/clinet-icon7.png" alt="" className="client-img-icon7" /><img src="/assets/clinet-icon8.png" alt="" className="client-img-icon8" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClientsReview