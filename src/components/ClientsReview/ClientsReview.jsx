import "./ClientsReview.css"
import ClientsReviewStatic from "./ClientsReviewStatic"
import ClientsReviewDynamic from "./ClientsReviewDynamic"
import { useState } from "react"

const ClientsReview = () => {
    const [isChecked, setIsChecked] = useState(false);
    return (
        <>
            <div className="conatainer d-flex justify-content-center text-center">
                <div class="form-check form-switch ">
                    <input class="form-check-input review-switcher" type="checkbox" id="formSwitchDefault"
                   

                        checked={isChecked}
                        onChange={() => {
                            setIsChecked((prevstate) => (!prevstate))
                        }} />
                    <label class="form-check-label" for="formSwitchDefault"><h3>{isChecked ? "Dynamic reviews" : "Static reviews"}</h3></label>
                </div>
            </div>

            {isChecked ? <ClientsReviewStatic /> : <ClientsReviewDynamic />}

        </>
    )
}

export default ClientsReview