import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const {
      onRest,
      counters,
      onDelete,
      onIncrement,
      onRemove,
      onAdd,
      onBought,
    } = this.props;
    return (
      <div>
        <button onClick={onRest} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        <button onClick={onAdd} className="btn btn-success btn-sm">
          Add
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onRemove={onRemove}
            onBought={onBought}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
