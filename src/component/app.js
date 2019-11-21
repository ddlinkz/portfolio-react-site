import React, { Component } from "react";
import Header from './header';
import s from "./app.css";

class App extends Component {
  render() {
    return (
      <div className={s.intro}>
        <Header />
      </div>
    );
  }
}

export default App;