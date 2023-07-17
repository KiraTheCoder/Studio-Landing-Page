const ClientsReview = () => {
    let clientcount = [1, 2, 3, 4, 5, 6, 7, 8]
    return (
        <div className="container clients-review-container mt-3 mt-md-3">
            <div className="row align-items-center text-center ">
                <div className="col-md-12" data-aos="flip-up">
                    <h3>What our happy client say</h3>
                    <p className="client-above-para">Several selected clients, who already believe in our service.</p>
                </div>
            </div>

            <div className="row align-items-center  mt-2 mt-md-0">
                <div className="col-md-4 client-img-container-initial" data-aos="fade-up-left">
                    <img src="/assets/client-default1.png" alt="" className="client-defaultt-img" />
                    <svg className="client-big-img-elem" xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120" fill="none">
                        <circle cx="60" cy="60" r="55.6" stroke="#FF007A" strokeWidth="8.8" />
                    </svg>
                </div>
                <div className="col-md-4 mt-3 mt-md-0 ps-3 ps-md-0" data-aos="fade-up-left">
                    <h4>Matthew Paul</h4>
                    <p>Perfect, very good job! Thank you for the amazing design and work. Really impressed with the high quality and quick turnaround time. Highly recommend.</p>

                    <div className="client-progress-svg-container">
                        {clientcount.map((count, index) => (
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <circle cx="8" cy="8" r="8" fill={(1 === count) ? '#2639ED' : '#E7F0FC'} />
                            </svg>
                        ))}
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="client-img-icon-container" data-aos="rotate" data-aos-duration="1200">
                        <svg className="client-img-elem" xmlns="http://www.w3.org/2000/svg" width="184" height="184" viewBox="0 0 184 184" fill="none">
                            <circle cx="92" cy="92" r="92" fill="#FFF5DB" />
                        </svg>


                        {
                            clientcount.map((count, index) => (
                                <img key={index} src={`/assets/client${count}.png`}
                                    alt="client"
                                    className={`client-img-icon${count} client-img-icon `} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClientsReview