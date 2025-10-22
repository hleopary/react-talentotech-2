import { Link } from "react-router-dom";


export const Nav = () => {
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
      </ul>
    </nav>
  );
};