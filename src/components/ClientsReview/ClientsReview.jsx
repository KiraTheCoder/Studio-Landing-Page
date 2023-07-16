import "./ClientsReview.css"
import ClientsReviewStatic from "./ClientsReviewStatic"
import ClientsReviewDynamic from "./ClientsReviewDynamic"
import { useState } from "react"

const ClientsReview = () => {
    const [isChecked, setIsChecked] = useState(false);
    return (
        <>
            <div className="conatainer d-flex justify-content-center text-center m-3 m-md-4 m-lg-5" data-aos="fade-right">
                <div class="form-check form-switch"  >
                    <input class="form-check-input review-switcher" type="checkbox" id="formSwitchDefault"
                        style={{ width: '70px', height: '28px', margin: "0 3rem 0 0" }}
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