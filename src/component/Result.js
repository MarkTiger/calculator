import React, { Component } from "react";
import Clear from "../clear.svg";

export class Result extends Component {
  render() {
    return (
      <div className="resultbox">
        <img src={Clear} alt="clear" onClick={this.props.clear} />
        <div>
          {this.props.result === Infinity ? "Error" : this.props.result}
        </div>
        <div className="memory">
          {this.props.memory === Infinity ? "" : this.props.memory}
        </div>
        <div>{this.props.current}</div>
      </div>
    );
  }
}

export default Result;
