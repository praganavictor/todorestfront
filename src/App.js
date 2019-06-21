import React from "react";
import { Provider } from "react-redux";

import "./config/ReactotronConfig";
import "./styles/global";

import store from "./store";
import Routes from "./routes";

console.tron.log("testando");

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes />
      </Provider>
    </div>
  );
}

export default App;
