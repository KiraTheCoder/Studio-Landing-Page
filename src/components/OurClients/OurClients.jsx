import "./OurClients.css"
const OurClients = () => {
    return (
        <div className="container  justify-content-center mt-3">
            <div className="row g-5  align-items-center">
                <div className="col-md-4 pe-5">
                    <h3>Our Client</h3>
                    <p className="our-client-para">Several selected clients, who already believe in our service.</p>
                </div>
                <div className="col-md-2">
                    <img src="/assets/Google Logo.png" alt="clients company logo" />
                </div>
                <div className="col-md-2">
                    <img src="/assets/Airbnb Logo.png" alt="clients company logo" />

                </div>
                <div className="col-md-2">
                    <img src="/assets/Uber Eats Logo.png" alt="clients company logo" />
                </div>
                <div className="col-md-2 pt-4">
                    <img src="/assets/Amazon Logo.png" alt="clients company logo" />

                </div>
            </div>
        </div>
    )
}

export default OurClients