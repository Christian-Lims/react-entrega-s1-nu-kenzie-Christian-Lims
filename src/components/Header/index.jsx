import Logo from "../../assets/Nu Kenzie.svg";
import "./style.css";

function Header({ logout }) {
  return (
    <div className="header">
      <img src={Logo} alt="Nu Kenzie" />
      <button onClick={() => logout()}>Inicio</button>
    </div>
  );
}

export default Header;
