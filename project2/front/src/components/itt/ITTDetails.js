import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { api } from "../../util/utils"
import ITTButton from "./ITTButton"

const ITTDetails = () => {
    const [details, setDetails] = useState(null)
    const { ittId } = useParams()

    useEffect(() => {
        api("/itts/" + ittId)
        .then(response => response.json())
        .then(data => {
            setDetails(data)
        })
        .catch(() => {
            console.log("DETAILS ERROR")
        })
    }, [ittId])

    if (details === null) {
        return (
            <div>Loading...</div>
        )
    }
    return (
        <table>
            <tbody>
                <tr>
                    <th>ITT Name:</th>
                    <td>{ details.itt_name }</td>
                </tr>
                <tr>
                    <th>Institution Name:</th>
                    <td>{ details.institution_name }</td>
                </tr>
                <tr>
                    <th>ITT Description:</th>
                    <td>{ details.itt_description }</td>
                </tr>
                <tr>
                    <th>Start Date:</th>
                    <td>{ details.start_date }</td>
                </tr>
                <tr>
                    <th>End Date:</th>
                    <td>{ details.end_date }</td>
                </tr>
                <ITTButton end_date={details.end_date} itt_id={details.itt_id} unsettled={details.unsettled} />
                <tr>
                    <th>Offer Institution Name</th>
                    <th>Offer Value</th>
                    <th>Offer Date</th>
                </tr>
                { 
                    details.offers.map((offer, i) => {
                        return (
                            <tr key={"offer" + i}>
                                <td>{ offer.institution_name }</td>
                                <td>{ offer.offer_value }</td>
                                <td>{ offer.offer_date }</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default ITTDetails
