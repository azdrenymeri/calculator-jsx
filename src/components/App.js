import React,{Component} from 'react';
import './../styles/App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from './../logic/calculate';

class App extends Component {
  constructor(){
    super();
    this.state = {
      total: null,
      next:null,
      operation:null
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event){
    const buttonName = event.target.textContent
    const{total,next,operation} = calculate(this.state,buttonName);
    this.setState({total:total, next:next, operation:operation});
  }

  render(){
    return (
      <div className="App">
        <Display result={this.state.next? this.state.next: this.state.total} />
        <ButtonPanel clickHandler={this.handleClick}  />
      </div>
    );
  }
}

export default App;  
