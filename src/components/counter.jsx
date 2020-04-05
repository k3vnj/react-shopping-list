import React, { Component } from "react";

class Counter extends Component {
  styles = {
    textDecoration: "none",
    fontWeight: "bold",
    textTransform: "uppercase",
  };

  render() {
    return (
      <div>
        <button
          onClick={() => this.props.onRemove(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          <i className="fas fa-minus"></i>
        </button>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          <i className="fas fa-plus"></i>
        </button>
        <button
          className="btn btn-success btn-sm m-2"
          onClick={() => this.props.onBought(this.props.counter)}
        >
          <i className="fas fa-shopping-cart"></i>
        </button>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          <i className="far fa-trash-alt"></i>
        </button>
        <input
          style={this.getItemStyle()}
          type="text"
          className="form-control"
        />
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

  getItemStyle() {
    if (this.props.counter.bought === true) {
      this.styles = {
        textDecoration: "line-through",
        textTransform: "lowercase",
        fontStyle: "italic",
      };
    }
    return this.styles;
  }
}

export default Counter;
