import { useState } from "react";
import Home from "./components/Home";
import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";
import List from "./components/List";
import TotalMoney from "./components/TotalMoney";

function App() {
  const [listTransactions, setListTransactions] = useState([]);

  const [accessed, setAccessed] = useState(false);

  function logout() {
    setAccessed(false);
  }

  function login() {
    setAccessed(true);
  }

  return (
    <div className="app">
      {accessed === false ? (
        <main className="mainHome">
          <Home login={login} />
        </main>
      ) : (
        <main className="MainDash">
          <header>
            <Header logout={logout} />
          </header>
          <div className="dashboard">
            <section className="menuApp">
              <div className="divMenu">
                <Form
                  listTransactions={listTransactions}
                  setListTransactions={setListTransactions}
                />
              </div>
              {listTransactions.length > 0 && (
                <div className="divMenu">
                  <TotalMoney listTransactions={listTransactions} />
                </div>
              )}
            </section>
            <section className="sectionList">
              <List
                listTransactions={listTransactions}
                setListTransactions={setListTransactions}
              />
            </section>
          </div>
        </main>
      )}
    </div>
  );
}

export default App;
