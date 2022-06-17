import { NavLink } from "react-router-dom"

const Header = () => {
    return (
        <nav>
            <NavLink to="/">main page</NavLink>
            <NavLink to="/itts">ITT list</NavLink>
            <NavLink to="/itts/completed">Completed ITT list</NavLink>
            <NavLink to="/itts/form">Add ITT</NavLink>
        </nav>
    )
}

export default Header