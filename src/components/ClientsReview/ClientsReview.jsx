import "./ClientsReview.css"
import ClientsReviewStatic from "./ClientsReviewStatic"
import ClientsReviewDynamic from "./ClientsReviewDynamic"
import { useState } from "react"

const ClientsReview = () => {
    const [isChecked, setIsChecked] = useState(false);
    return (
        <>
            <div className="conatainer d-flex justify-content-center text-center m-1 mt-3 mt-md-4 mt-lg-5" data-aos="fade-right">
                <div class="form-check form-switch bg-warning rounded-pill pt-1 ps-1 pe-2" >
                    <input class="form-check-input review-switcher" type="checkbox" id="formSwitchDefault"
                        style={{ width: '70px', height: '28px', margin: "0 1rem 0 0" }}
                        checked={isChecked}
                        onChange={() => {
                            setIsChecked((prevstate) => (!prevstate))
                        }} />
                    <label class="form-check-label" for="formSwitchDefault"><h4>{isChecked ? "Dynamic reviews" : "Static reviews"}</h4></label>
                </div>
            </div >

            {isChecked ? <ClientsReviewDynamic /> : <ClientsReviewStatic />
            }

        </>
    )
}

export default ClientsReview