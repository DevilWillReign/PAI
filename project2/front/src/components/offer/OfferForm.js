import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { api, useQuery } from "../../util/utils"

const OfferForm = () => {
    const query = useQuery()
    const [institutionName, setInstitutionName] = useState('')
    const [offerValue, setOfferValue] = useState(1)
    const navigate = useNavigate()

    const submitForm = (e) => {
        e.preventDefault()
        const itt_id = Number(query.get("itt_id"))

        const data = {
            itt_id: itt_id,
            institution_name: institutionName,
            offer_value: offerValue
        }

       api("/offers", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (response.status === 201) {
                navigate("/itts/" + itt_id)
            }
        })
        .catch(() => {})
    }
    
    return (
        <form onSubmit={e => submitForm(e)}>
            <label>Institution Name:</label>
            <input name="institution_name" type="text" value={institutionName} onChange={e => setInstitutionName(e.target.value)} /><br />
            <label>Offer Value:</label>
            <input name="offer_value" type="number" min="1" value={offerValue} onChange={e => setOfferValue(e.target.value)} /><br />
            <input type="submit" value="Add Offer" />
        </form>
    )
}

export default OfferForm
