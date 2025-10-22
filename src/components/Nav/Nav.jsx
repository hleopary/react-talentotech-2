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
            <Link to={"/"}>PRODUCTS</Link>
        </li>
        <li>
            <Link to={"/"}>ABOUT US</Link>
        </li>
        <li>
            <Link to={"/"}>CONTACT</Link>
        </li>   
      </ul>
    </nav>
  );
};