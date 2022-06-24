import { NavLink } from "react-router-dom"

const ITTButton = ({end_date, itt_id, unsettled}) => {
    if (Date.now() <= new Date(end_date)) {
        return (
            <tr>
                <td><NavLink to={"/offers/form?itt_id=" + itt_id}>Add Offer</NavLink></td>
            </tr>
        )
    } else if (unsettled) {
        return (
            <tr>
                <td>Unsettled</td>
            </tr>
        )
    }
    return (<></>)
}

export default ITTButton