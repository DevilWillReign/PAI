import { NavLink } from "react-router-dom"

const ITTItem = ({itt, completed}) => {
    return (
        <tr>
            <td>{ itt.itt_id }</td>
            {
                Date.now() < new Date(itt.start_date) ? <td>{ itt.itt_name }</td>
                : <td><NavLink to={"/itts/" + itt.itt_id}>{ itt.itt_name }</NavLink></td>
            }
            {
            completed ? <td>ended</td>
                : <>
                    <td>{ itt.start_date }</td>
                    <td>{ itt.end_date }</td>
                </>
            }
        </tr>
    )
}

export default ITTItem