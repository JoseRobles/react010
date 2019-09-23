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
  
  constructor(props)
  {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      count:0,
      visibilityTogle: false
    };
  }

  handleToggleVisibility()
  {
    this.setState(() => {
      return {
        visibilityTogle: !this.state.visibilityTogle
      }
    });
  }
  
  render(){
    return (
    <div>
      <h1>Count: {this.state.count} </h1>
      <button onClick={this.handleToggleVisibility}>Show details</button>
      {this.state.visibilityTogle?'':<h1>This is a test message</h1>}
      <button onClick={this.props.handleRemoveAll}>Remove all</button>
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

  constructor (props)
  {
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
    this.state = {
      options: ['First', 'Second', 'Third', 'Fourth']
    }
  }

  handleRemoveAll()
  {
    this.setState(()=>{
      return {
        options: []
      };
    });
  }

  render() {
    return (
      <div>
        <Header title="Testing"/>
        <TitleComponent questiontitle="Question title"/>
        <Action/>
        <Options options={this.state.options} handleRemoveAll={this.handleRemoveAll}/>
        <AddOption/>
        <Footer/>
      </div>
      
    );
  }
}

export default App;
