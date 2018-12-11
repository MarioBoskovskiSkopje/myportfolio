import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Section from "./components/Section/Section";
import Main from "./components/Main/Main";

import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="container">
            <Header />
            <Section />
            <Main />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
