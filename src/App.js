import React from "react";
import { Route } from "react-router-dom";
import Main from "./Main";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Detail from "./Detail";
import Header from "./components/Header";
import { useHistory } from "react-router-dom";

function App() {
  const history = useHistory();

  return (
      <div className="App"
          style={{ maxWidth: "1000px", margin: "20px auto"}}>
          <Header />
          <Route path="/" exact>
              <Main />
          </Route>
          <Route path="/login">
              <Login />
          </Route>
          <Route path="/signup">
              <SignUp />
          </Route>
          <Route path="/detail/:index">
              <Detail />
          </Route>
      </div>
  );
}

export default App;
