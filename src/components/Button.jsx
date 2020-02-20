import React from "react";
import "./Button.css";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }
  isOperator = val => {
    return !isNaN(val) || val === "." || val === "=" || val === "CE";
  };

  handleButtonClick() {
    this.props.handleClick(this.props.children);
  }

  render() {
    return (
      <div
        className={`button  ${
          this.isOperator(this.props.children) ? " " : "operator"
        }`}
        onClick={this.handleButtonClick}
      >
        {this.props.children}
      </div>
    );
  }
}
export default Button;
