import { useState } from "react";
import "./style.css";

function Form({ listTransactions, setListTransactions }) {
  const [descrip, setDescrip] = useState("");
  const [values, setValues] = useState(0);
  const [category, setCategory] = useState("opEntrance");

  function handleSubmit(event) {
    event.preventDefault();

    setListTransactions([
      ...listTransactions,
      {
        description: descrip,
        type: category,
        value: values,
      },
    ]);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="desciption">Descrição</label>
      <input
        id="descrip"
        type="text"
        placeholder="Digite aqui sua descrição"
        onChange={(event) => setDescrip(event.target.value)}
      />
      <span>Ex: Compra de roupas</span>
      <div className="divForm">
        <div className="divInp">
          <label htmlFor="amount">Valor</label>
          <input
            id="amount"
            type="number"
            placeholder="1"
            onChange={(event) => setValues(event.target.value)}
          />
        </div>
        <div className="divInp">
          <label htmlFor="entrance">Tipo de valor</label>
          <select
            name="Entrance"
            id="entrance"
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value="opEntrance">Entrada</option>
            <option value="opOutput">Saída</option>
          </select>
        </div>
      </div>
      <button type="submit">Inserir valor</button>
    </form>
  );
}

export default Form;
