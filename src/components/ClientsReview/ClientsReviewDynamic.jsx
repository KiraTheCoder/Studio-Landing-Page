import { useState, useEffect } from "react"
const ClientsReview = () => {
    const [clientId, setClientId] = useState(1);
    const clientData = [
        {
            id: 1,
            name: "Sarah Johnson",
            review: "I had a wonderful experience working with your studio. The team was highly professional, and they delivered exceptional results. I highly recommend them!",
            image: "client1.png",
        },
        {
            id: 2,
            name: " Emily Davis",
            review: "Your studio provided top-notch services. The team was attentive to my requirements and brought my vision to life. I'm extremely satisfied with the outcome. Thank you!",
            image: "client2.png",
        }, {
            id: 3,
            name: "Jessica Thompson",
            review: "Working with your studio was an absolute delight. The team's professionalism and artistic flair added immense value to my project. I couldn't be happier with the outcome.",
            image: "client3.png",
        }, {
            id: 4,
            name: "Michael Smith",
            review: "I'm impressed with the creativity and attention to detail your studio demonstrated. The final product exceeded my expectations. It was a pleasure working with your talented team.",
            image: "client4.png",
        }, {
            id: 5,
            name: "Annie tennison",
            review: "I had a great collaboration with your studio. The team's expertise and dedication were evident throughout the project. I'm thrilled with the final result. Highly recommended!",
            image: "client5.png",
        }, {
            id: 6,
            name: "Christopher Brown",
            review: "Your studio's creative approach and attention to detail are unmatched. The team's ability to capture my vision and translate it into visuals exceeded my expectations. Highly satisfied!",
            image: "client6.png",
        }, {
            id: 7,
            name: "Ethan Turner",
            review: "Choosing your studio was the best decision I made for my project. The team's talent and dedication brought my ideas to life. The end result surpassed all my expectations!",
            image: "client7.png",
        }, {
            id: 8,
            name: "Olivia Miller",
            review: "I'm extremely pleased with the services provided by your studio. The team's professionalism and commitment to excellence were evident in every aspect of the project. Highly recommend!",
            image: "client8.png",
        },
    ]

    useEffect(() => {
        const timer = setInterval(() => {
            setClientId((prevClientId) => {
                if (prevClientId < clientData.length) {
                    return prevClientId + 1;
                } else {
                    return 1;
                }
            });
        }, 2000);

        return () => clearInterval(timer);
    }, []);


    return (
        <div className="container clients-review-container mt-5 mt-md-3">
            <div className="row align-items-center text-center ">
                <div className="col-md-12" data-aos="flip-up">
                    <h3>What our happy client say</h3>
                    <p className="client-above-para">Several selected clients, who already believe in our service.</p>
                </div>
            </div>


            <div className="row align-items-center  mt-2 mt-md-0">
                <div className="col-md-4 client-img-container" data-aos="fade-up-left">
                    <img src={`/assets/${clientData[clientId - 1].image}`} alt="" className="client-img" />
                    <svg className="client-big-img-elem" xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120" fill="none">
                        <circle cx="60" cy="60" r="55.6" stroke="#FF007A" strokeWidth="8.8" />
                    </svg>
                </div>
                <div className="col-md-4 mt-3 mt-md-0 ps-3 ps-md-0" data-aos="fade-up-left">
                    <h4>{clientData[clientId - 1].name}</h4>
                    <p>{clientData[clientId - 1].review}</p>

                    <div className="client-progress-svg-container">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((val, index) => (
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <circle cx="8" cy="8" r="8" fill={(clientId === val) ? '#2639ED' : '#E7F0FC'} />
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
                            clientData.map((client, index) => (
                                <img key={client.id} src={`/assets/${client.image}`}
                                    alt="client"
                                    className={`client-img-icon${client.id} client-img-icon ${clientId === client.id ? "active" : ""}`}
                                    onMouseEnter={() => {
                                        return (setClientId(client.id))
                                    }}
                                    onMouseLeave={() => {
                                        return setClientId(1)
                                    }}
                                />
                            ))
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClientsReview