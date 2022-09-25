import Ilustration from "../../assets/illustration.svg";
import Logo from "../../assets/Nu Kenzie white.svg";
import "./style.css";

function Home({ login }) {
  return (
    <div className="divMainHome">
      <section className="sectionHome">
        <img src={Logo} alt="Nu Kenzie" />
        <h1>Centralize o controle das suas finanças</h1>
        <p>de forma rápida e segura</p>
        <button onClick={() => login()}>Iniciar</button>
      </section>
      <section className="ilustration">
        <img src={Ilustration} alt="Ilustration" />
      </section>
    </div>
  );
}

export default Home;
