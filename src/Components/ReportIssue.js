import React from "react";
import "../../src/App.css"
import SubmitRequest from "../Containers/SubmitRequest";
import RequestConfirmation from "../Components/RequestConfirmation";
import InvalidRequest from "../Components/InvalidRequest";
import Authentication from "../Components/Authentication";
import {
  BrowserRouter,
  Route,
} from "react-router-dom";
import Header from "../Components/Header"


function App() {
  return (
    <div className="App">
      <Header></Header>
      <BrowserRouter>
        <Route exact path="/" component={InvalidRequest} />
        <Route exact path="/SubmitRequest" component={SubmitRequest} />
        <Route path="/RequestConfirmation" component={RequestConfirmation} />
      </BrowserRouter>

      {/* <Authentication></Authentication> */}
    </div>
  );
}

export default App;
