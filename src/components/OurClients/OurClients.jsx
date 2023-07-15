import "./OurClients.css"
const OurClients = () => {
    return (
        <div className="container mt-5 mt-md-3 mt-xl-5 ">
            <div className="row g-3 g-md-5 ms-4 ms-md-0 align-items-center">
                <div className="col-md-4 pe-5">
                    <h3>Our Client</h3>
                    <p className="our-client-para">Several selected clients, who already believe in our service.</p>
                </div>
                <div className="col-6 col-md-2">
                    <img src="/assets/Google Logo.png" className="clients-company-logo" alt="clients company logo" />
                </div>
                <div className="col-6 col-md-2">
                    <img src="/assets/Airbnb Logo.png" className="clients-company-logo" alt="clients company logo" />

                </div>
                <div className="col-6 col-md-2">
                    <img src="/assets/Uber Eats Logo.png" className="clients-company-logo" alt="clients company logo" />
                </div>
                <div className="col-6 col-md-2 pt-4">
                    <img src="/assets/Amazon Logo.png" className="clients-company-logo" alt="clients company logo" />
                </div>
            </div>
        </div>
    )
}

export default OurClients