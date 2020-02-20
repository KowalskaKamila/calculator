import React from "react";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import ClearButton from "./components/ClearButton";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      prevoiusNumber: "",
      currentNumber: "",
      operator: ""
    };
    this.addtoInput = this.addZeroToInput.bind(this);
  }
  addtoInput(val) {
    this.setState({ input: this.state.input + val });
  }

  addZeroToInput = val => {
    //if this state.input is not empty then add zero
    if (this.state.input !== "") {
      this.setState({ input: this.state.input + val });
    }
  };

  addDecimal = val => {
    //only add decimal if there is no current decimal point present in the input area
    if (this.state.input.indexOf(".") === -1) {
      this.setState({ input: this.state.input + val });
    }
  };

  clearInput = () => {
    this.setState({ input: "" });
  };

  add = () => {
    this.setState.prevoiusNumber = this.state.input;
    this.setState({ input: " " });
    this.setState.operator = "plus";
  };
  substract = () => {
    this.setState.prevoiusNumber = this.state.input;
    this.setState({ input: " " });
    this.setState.operator = "substract";
  };
  multiply = () => {
    this.setState.prevoiusNumber = this.state.input;
    this.setState({ input: " " });
    this.setState.operator = "multiply";
  };
  divide = () => {
    this.setState.prevoiusNumber = this.state.input;
    this.setState({ input: " " });
    this.setState.operator = "divide";
  };

  evaluate = () => {
    this.setState.currentNumber = this.state.input;

    if (this.state.operator === "plus") {
      this.setState({
        input:
          parseFloat(this.state.previousNumber) +
          parseFloat(this.state.currentNumber)
      });
    } else if (this.state.operator === "substract") {
      this.setState({
        input:
          parseFloat(this.state.previousNumber) -
          parseFloat(this.state.currentNumber)
      });
    } else if (this.state.operator === "multiply") {
      this.setState({
        input:
          parseFloat(this.state.previousNumber) *
          parseFloat(this.state.currentNumber)
      });
    } else if (this.state.operator === "divide") {
      this.setState({
        input:
          parseFloat(this.state.previousNumber) /
          parseFloat(this.state.currentNumber)
      });
    }
  };

  render() {
    return (
      <div className="App">
        <div className="cal-wrapper">
          <div className="row">
            <Input>{this.state.input}</Input>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.divide}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.multiply}>*</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.add}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addDecimal}>.</Button>
            <Button handleClick={this.addZeroToInput}>0</Button>
            <Button handleClick={this.evaluate}>=</Button>
            <Button handleClick={this.substract}>-</Button>
          </div>
          <div className="row">
            <ClearButton handleClear={this.clearInput}>Clear</ClearButton>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
