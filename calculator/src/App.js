import React, { Component } from "react";
import "./main.css";
import { Button } from "./Button";
import { Input } from "./Tela";
import { ClearButton } from "./Limpar";
import * as math from "mathjs";



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ""
    };
  }

  addToInput = val => {
    this.setState({ input: this.state.input + val });
  };

//Verifica se a input esta vazia ou se é um operator, se caso for falso a input usará a função evaluate para avaliar a input
  handleEqual = () => {
    this.setState({ input: math.evaluate(this.state.input) });
  };   

  render() {
    return (
      <div className="app">
        <div className="calculadora">
          <Input input={this.state.input} />
          <div className="linha">           
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.addToInput}>/</Button>
          </div>
          <div className="linha">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.addToInput}>*</Button>
          </div>
          <div className="linha">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.addToInput}>+</Button>
          </div>
          <div className="linha">
            <Button handleClick={this.addToInput}>.</Button>
            <Button handleClick={this.addToInput}>0</Button>
            <Button variant="contained" color="success" handleClick={() => this.handleEqual()}>=</Button>
            <Button handleClick={this.addToInput}>-</Button>
          </div>
          <div className="linha">
            <ClearButton handleClear={() => this.setState({ input: "" })}>
              Limpar
            </ClearButton>
          </div>
        </div>
      </div>
    );
  } 
}

export default App;