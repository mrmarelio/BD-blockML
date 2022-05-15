import React from "react";
import Header from "components/header";
import { BrowserRouter as Router } from "react-router-dom";
import { Routing } from "routes";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routing />
      </div>
    </Router>
  );
};

export default App;
