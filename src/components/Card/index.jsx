import Image from "../../assets/trash.svg";
import "./style.css";

function Card({ transaction, removeTransaction }) {
  return (
    <li className="liDefault">
      {transaction.type === "opEntrance" ? (
        <div className="entrance">
          <div className="divLi">
            <h1>{transaction.description}</h1>
            <div>
              <p>{transaction.value}</p>
              <button onClick={() => removeTransaction(transaction)}>
                <img src={Image} alt="delete" />
              </button>
            </div>
          </div>
          <span>Entrada</span>
        </div>
      ) : (
        <div className="output">
          <div className="divLi">
            <h1>{transaction.description}</h1>
            <div>
              <p>{transaction.value}</p>
              <button onClick={() => removeTransaction(transaction)}>
                <img src={Image} alt="delete" />
              </button>
            </div>
          </div>
          <span>Despesa</span>
        </div>
      )}
    </li>
  );
}

export default Card;
