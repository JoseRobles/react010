import React, { Component } from 'react';
import './App.css';


class Header extends Component {
  render(){
    return(<div className="App-header">
    This is {this.props.title}
    </div>);
  }
}

class TitleComponent extends Component {
  render(){
    return(<div><h2>{this.props.questiontitle}</h2></div>);
  }
}

class Action extends Component {
  render(){
    return(
      <div className="App-question">
          <button>What should I do?</button>
      </div>);
  }
}

class Options extends Component {
  render(){
    return (
    <div>
      {this.props.options.map((option) => <Option key={option} optionName={option}></Option>)}
    </div>);
  }
}
class Option extends Component {
  render(){
    return(<div>{this.props.optionName}</div>);
  }
}

class AddOption extends Component {
  showInformation (e) {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option)
    {
      alert(option);
    }
  }

  render() {
    return(<div><form onSubmit={this.showInformation}><input type="text" name="option"></input><button>Add Option</button></form></div>);
  }
}

class Footer extends Component {
  render()
  {
    return(<div className="App-footer">Footer</div>);
  }
}

class App extends Component {
  render() {
    const options = ['First', 'Second', 'Third'];
    return (
      <div>
        <Header title="Testing"/>
        <TitleComponent questiontitle="Question title"/>
        <Action/>
        <Options options={options}/>
        <AddOption/>
        <Footer/>
      </div>
      
    );
  }
}

export default App;
