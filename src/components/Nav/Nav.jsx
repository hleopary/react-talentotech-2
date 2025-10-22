import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext/CartContext";


export const Nav = () => {
  const {getTotalItems} = useCartContext();


  return (
    <nav>
      <h1>Leopary Bikes</h1>
      <ul>
        <li>
            <Link to={"/"}>HOME</Link>
        </li>
        <li>
            <Link to={"/products"}>PRODUCTS</Link>
        </li>
        <li>
            <Link to={"/about_us"}>ABOUT US</Link>
        </li>
        <li>
            <Link to={"/contact"}>CONTACT</Link>
        </li>
        <li>
          {getTotalItems() > 0 &&  (<span>{getTotalItems()}</span>)}
        </li>   
      </ul>
    </nav>
  );
};