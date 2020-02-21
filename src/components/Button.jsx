import React from "react";
import "./Button.css";

class Button extends React.Component {
  isNotOperator = val => {
    return !isNaN(val) || val === "." || val === "=";
  };

  render() {
    return (
      <div
        className={`button  ${
          this.isNotOperator(this.props.children) ? " " : "operator"
        }`}
        onClick={() => this.props.handleClick(this.props.children)}
      >
        {this.props.children}
      </div>
    );
  }
}
export default Button;
