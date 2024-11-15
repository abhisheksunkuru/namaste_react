import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
const Header = () =>{
  const[btnName, setBtnName] = useState("Login")
  return <div className='header'>
    <div className='logo'>
      <img src={LOGO_URL}></img>
    </div>
    <div className='nav-items'>
      <ul>
        <li>
          Home
        </li>
        <li>
          About
        </li>
        <li>
          contact
        </li>
        <li>
          Cart
        </li>
        <li>
          <button onClick={()=> 
            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
          }>
          {btnName}
          </button>
        </li>
      </ul>
    </div>
  </div>
}

export default Header;