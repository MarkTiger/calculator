import React, { Component } from "react";

export class Button extends Component {
  constructor(props) {
    super(props);
    this.numberBtn = [
      "zero",
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
    ];

    this.functionBtn = ["plus", "minus", "times", "divide"];
  }
  render() {
    return (
      <div className="btnbox">
        {this.numberBtn.map((btn) => (
          <div
            key={btn}
            className="btn"
            style={{ gridArea: btn }}
            onClick={this.props.handleCurrent.bind(this, btn)}
          >
            {btn === "zero"
              ? 0
              : btn === "one"
              ? 1
              : btn === "two"
              ? 2
              : btn === "three"
              ? 3
              : btn === "four"
              ? 4
              : btn === "five"
              ? 5
              : btn === "six"
              ? 6
              : btn === "seven"
              ? 7
              : btn === "eight"
              ? 8
              : 9}
          </div>
        ))}
        <div
          className="btn"
          style={{ gridArea: "comma" }}
          onClick={this.props.addComma}
        >
          .
        </div>
        <div
          className="btn"
          style={{ gridArea: "equal" }}
          onClick={this.props.equal}
        >
          =
        </div>
        {this.functionBtn.map((btn) => (
          <div
            key={btn}
            className="btn"
            style={{ gridArea: btn }}
            onClick={this.props.mathOperation.bind(this, btn)}
          >
            {btn === "plus"
              ? "+"
              : btn === "minus"
              ? "-"
              : btn === "times"
              ? "*"
              : "/"}
          </div>
        ))}
      </div>
    );
  }
}

export default Button;
