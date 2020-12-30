import React, { Component } from "react";
import Result from "./component/Result";
import Button from "./component/Button";
import "./App.css";

export class App extends Component {
  constructor(props) {
    super(props);
    this.handleCurrent = this.handleCurrent.bind(this);
    this.addComma = this.addComma.bind(this);
    this.equal = this.equal.bind(this);
    this.mathOperation = this.mathOperation.bind(this);
    this.clear = this.clear.bind(this);
    this.state = {
      result: "",
      current: "",
      memory: "",
      operator: undefined,
    };
  }

  handleCurrent(btn) {
    let button =
      btn === "zero"
        ? "0"
        : btn === "one"
        ? "1"
        : btn === "two"
        ? "2"
        : btn === "three"
        ? "3"
        : btn === "four"
        ? "4"
        : btn === "five"
        ? "5"
        : btn === "six"
        ? "6"
        : btn === "seven"
        ? "7"
        : btn === "eight"
        ? "8"
        : 9;
    this.setState((state) => ({
      current:
        state.current.length < 13
          ? state.current === "0"
            ? button
            : state.current + button
          : state.current,
    }));
  }

  addComma() {
    this.setState((state) => ({
      current: state.current.includes(".")
        ? state.current
        : state.current === ""
        ? "0."
        : state.current + ".",
    }));
  }

  equal() {
    let result = 0;
    switch (this.state.operator) {
      case "plus":
        result =
          parseFloat(this.state.memory) +
          parseFloat(this.state.current === "" ? 0 : this.state.current);
        this.setState({
          result: result,
          memory: result,
          current: "",
          operator: undefined,
        });
        break;
      case "minus":
        result =
          parseFloat(this.state.memory) -
          parseFloat(this.state.current === "" ? 0 : this.state.current);
        this.setState({
          result: result,
          memory: result,
          current: "",
          operator: undefined,
        });
        break;
      case "times":
        result =
          parseFloat(this.state.memory) *
          parseFloat(this.state.current === "" ? 0 : this.state.current);
        this.setState({
          result: result,
          memory: result,
          current: "",
          operator: undefined,
        });
        break;
      case "divide":
        result =
          parseFloat(this.state.memory) /
          parseFloat(this.state.current === "" ? 0 : this.state.current);
        this.setState({
          result: result,
          memory: result,
          current: "",
          operator: undefined,
        });
        break;
      default:
        console.log("No operator specified.");
        break;
    }
  }

  mathOperation(operator) {
    if (this.state.memory === "") {
      this.setState((state) => ({
        memory: state.current === "" ? 0 : state.current,
        current: "",
        operator: operator,
      }));
    } else if (this.state.memory !== "" && this.state.current === "") {
      this.setState({ operator: operator });
    } else if (this.state.memory !== "" && this.state.current !== "") {
      this.equal();
      this.setState({ operator: operator });
    }
  }

  clear() {
    this.setState({
      result: "",
      current: "",
      memory: "",
      operator: undefined,
    });
  }

  render() {
    return (
      <div className="appbody">
        <Result
          result={this.state.result}
          current={this.state.current}
          memory={this.state.memory}
          clear={this.clear}
        />
        <Button
          handleCurrent={this.handleCurrent}
          addComma={this.addComma}
          equal={this.equal}
          mathOperation={this.mathOperation}
        />
      </div>
    );
  }
}

export default App;
