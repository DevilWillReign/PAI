import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { api } from "../../util/utils"

const ITTForm = () => {
    const [ittName, setIttName] = useState('')
    const [institutionName, setInstitutionName] = useState('')
    const [ittDescription, setIttDescription] = useState('')
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const [maxPrice, setMaxPrice] = useState(1)
    const navigate = useNavigate()

    const submitForm = (e) => {
        e.preventDefault()
        const data = {
            itt_name: ittName,
            institution_name: institutionName,
            itt_description: ittDescription,
            start_date: startDate,
            end_date: endDate,
            max_price: maxPrice
        }

        api("/itts", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (response.status === 201) {
                navigate("/itts")
            }
        })
        .catch(() => {})
    } 

    return (
        <form onSubmit={(e) => submitForm(e)}>
            <label>ITT Name:</label>
            <input name="itt_name" type="text" value={ittName} onChange={e => setIttName(e.target.value)} /><br />
            <label>Institution Name:</label>
            <input name="institution_name" type="text" value={institutionName} onChange={e => setInstitutionName(e.target.value)} /><br />
            <label>ITT Description:</label>
            <input name="itt_description" type="textarea" value={ittDescription} onChange={e => setIttDescription(e.target.value)} /><br />
            <label>Start Date:</label>
            <input name="start_date" type="datetime-local" value={startDate} onChange={e => setStartDate(e.target.value)} /><br />
            <label>End Date:</label>
            <input name="end_date" type="datetime-local" value={endDate} onChange={e => setEndDate(e.target.value)} /><br />
            <label>Max Price:</label>
            <input name="max_price" type="number" min="1" value={maxPrice} onChange={e => setMaxPrice(e.target.value)} /><br />
            <input type="submit" value="Add ITT" />
        </form>
    )
}

export default ITTForm