import { useState } from "react";
import Card from "../Card";
import Image from "../../assets/NoCard.svg";
import "./style.css";

function List({ listTransactions, setListTransactions }) {
  const [listFiltered, setListFiltered] = useState([]);

  function allList() {
    setListFiltered([]);
  }

  function entrances() {
    const newList = listTransactions.filter(
      (transaction) => transaction.type === "opEntrance"
    );
    setListFiltered(newList);
  }

  function outputs() {
    const newList = listTransactions.filter(
      (transaction) => transaction.type === "opOutput"
    );
    setListFiltered(newList);
  }

  function removeTransaction(item) {
    const newList = listTransactions.filter(
      (transaction) => transaction !== item
    );
    setListTransactions(newList);
  }

  return (
    <section className="sectionMainDash">
      <section className="menuList">
        <h1>Resumo financeiro</h1>
        <div className="divButtons">
          <button onClick={() => allList()}>Todos</button>
          <button onClick={() => entrances()}>Entradas</button>
          <button onClick={() => outputs()}>Despesas</button>
        </div>
      </section>
      {listTransactions.length > 0 ? (
        <ul>
          {!listFiltered.length &&
            listTransactions.map((transaction, index) => (
              <Card
                transaction={transaction}
                key={index}
                removeTransaction={removeTransaction}
              />
            ))}

          {listFiltered.length &&
            listFiltered.map((transaction, index) => (
              <Card
                transaction={transaction}
                key={index}
                removeTransaction={removeTransaction}
              />
            ))}
        </ul>
      ) : (
        <img className="noCard" src={Image} alt="Sem Transações" />
      )}
    </section>
  );
}

export default List;
