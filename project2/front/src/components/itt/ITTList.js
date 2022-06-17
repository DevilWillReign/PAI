import { useEffect, useState } from "react"
import { api } from "../../util/utils"
import ITTItem from "./ITTItem"

const ITTList = ({completed}) => {
    const [itts, setItts] = useState([])

    useEffect(() => {
        if (completed) {
            api("/itts/completed")
            .then(response => response.json())
            .then(data => {
                setItts([...data.itts])
            })
        } else {
            api("/itts")
            .then(response => response.json())
            .then(data => {
                setItts([...data.itts])
            })
        }
    }, [completed])

    return (
        <table>
            <thead>
                <tr>
                    <th>Nr</th>
                    <th>Name</th>
                    { completed ?
                        <th>Status</th>
                    :
                        <>
                            <th>Start date</th>
                            <th>End date</th>
                        </>
                    }
                </tr>
            </thead>
            <tbody>
                {
                    itts.map(itt => {
                        return (
                            <ITTItem key={itt.itt_id} itt={itt} completed={completed} />
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default ITTList
