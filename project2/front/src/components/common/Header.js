import { NavLink } from "react-router-dom"

const Header = () => {
    return (
        <nav>
            <NavLink to="/"><button>main page</button></NavLink>
            <NavLink to="/itts"><button>ITT list</button></NavLink>
            <NavLink to="/itts/completed"><button>Completed ITT list</button></NavLink>
            <NavLink to="/itts/form"><button>Add ITT</button></NavLink>
        </nav>
    )
}

export default Header