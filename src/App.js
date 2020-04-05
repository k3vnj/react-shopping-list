import React, { Component } from "react";
import NavBar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [{ id: 1, value: 1, bought: false }],
  };

  handleRemove = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    if (counters[index].value !== 0) {
      counters[index] = { ...counter };
      counters[index].value--;
      this.setState({ counters });
    }
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleRest = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  handleAdd = () => {
    let counters = [...this.state.counters];
    counters.push({ id: counters.length + 1, value: 1 });
    this.setState({ counters });
  };

  handleBought = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].bought = true;
    console.log(counters);
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onRest={this.handleRest}
            onIncrement={this.handleIncrement}
            onRemove={this.handleRemove}
            onDelete={this.handleDelete}
            onAdd={this.handleAdd}
            onBought={this.handleBought}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
