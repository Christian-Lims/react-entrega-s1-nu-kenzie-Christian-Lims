import "./style.css";

function TotalMoney({ listTransactions }) {
  return (
    <section className="sectionMoney">
      <div className="divMoney">
        <h1>Valor Total:</h1>
        <p>
          {`R$ 
          ${listTransactions
            .reduce((valorAnterior, valorAtual) => {
              return valorAtual.value + valorAnterior;
            }, 0)
            .toFixed(2)}
          `}
        </p>
      </div>
      <span>O valor se refere ao saldo</span>
    </section>
  );
}

export default TotalMoney;
