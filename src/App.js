import React, { Component } from 'react';
import './App.css';
class Box extends Component {
  constructor(props) {
    super(props);
    this.count1=0;
    this.state = {
      color:'#ccc',
      count: 1,
      disabled:false
    };
    
  }

sudoku_value(value)
{
  if(this.props.answer != value && value != ''){
    this.props.countWrong();
    if(this.state.count == 1){
      this.setState({
        color:'green',
        count:2,
        disabled:false
      })
    }
   else if(this.state.count == 2){
      this.setState({
        color:'yellow',
        count:3,
        disabled:false
      })
    }
   else if(this.state.count == 3){
      this.setState({
        color:'red',
        count:4,
        disabled:true
      })
    }
  }

   if(this.props.answer == value){
      this.setState({
        color:'#ccc',
        disabled:true
      })
    }
    
    
  
}
  render() {
    return (
      <div className="Box">
        {
          this.props.number ? (
            <div>{this.props.number}</div>
          ) : [( this.props.answer ?
            <input className="Box-input" type="text" onChange={(event) => this.sudoku_value(event.target.value) }
            style={{backgroundColor:this.state.color}} disabled= {(this.state.disabled) ? "disabled" : ""}    /> :null
          )]
        }
      </div>
    )
  }
}
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      incorrectAttempts : 0
      
    };
    this.increment= this.increment.bind(this);
  }
increment()
{
  this.setState({
    incorrectAttempts:this.state.incorrectAttempts + 1
  })
}

  render() {
    return (
      <div>
      <div className="full-box">
        <div className="column-box">
          <div className="boxes">
            <Box number={3}  />
            <Box answer={1} countWrong={this.increment}/>
            <Box answer={2} countWrong={this.increment}/>
            <Box number={4} />
          </div>
          <div className="boxes">
            <Box answer={1} countWrong={this.increment}/>
            <Box number={3} />
             <Box number={4} />
            <Box answer={2} countWrong={this.increment}/>
           
          </div>
        </div>
        <div className="column-box">
          <div className="boxes">
            <Box answer={4} countWrong={this.increment} />
            <Box number={2} />
            <Box number={1} />
            <Box answer={3} countWrong={this.increment}/>
          </div>
          <div className="boxes">
            <Box number={2} />
            <Box answer={1} countWrong={this.increment} />
            <Box answer={3} countWrong={this.increment}/>
            <Box number={4} />
          </div>
        </div>
      </div>
      <h2> incorrectAttempts:{this.state.incorrectAttempts} </h2>
  </div>

    );
  }
}
export default App;

