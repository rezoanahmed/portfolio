import { NavLink } from "react-router-dom";


const Logo = () => {

    return (
        <div>
            <NavLink to='/'>
                <img src="https://i.ibb.co/DGcG7yQ/Rezoan.png" alt="" className="h-10" />
            </NavLink>
        </div>
    );
};

export default Logo;