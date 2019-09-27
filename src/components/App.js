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
          <button onClick={this.props.handlePick}>What should I do?</button>
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

  constructor(props)
  {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }

  handleAddOption(e)
  {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    this.setState(()=> {
      return {
        error
      }
    })
  }

  render() {
    return(
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}><input type="text" name="option"></input><button>Add Option</button>
        </form>
      </div>);
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
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: []
    }
  }

  handleAddOption(option)
  {

    if (!option)
    {
      return 'Enter a valid value to add an item';
    }else if (this.state.options.indexOf(option) > -1)
    {
      return 'This option already exists';
    }

    this.setState((prevState) => {
      return {
        options: prevState.options.concat(option)
      };
    })
  }

  handleRemoveAll()
  {
    this.setState(()=>{
      return {
        options: []
      };
    });
  }

  handlePick()
  {
    const randomNum = Math.floor(Math.random()*this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }

  render() {
    return (
      <div>
        <Header title="Testing"/>
        <TitleComponent questiontitle="Question title"/>
        <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick}/>
        <Options options={this.state.options} handleRemoveAll={this.handleRemoveAll}/>
        <AddOption handleAddOption={this.handleAddOption}/>
        <Footer/>
      </div>
      
    );
  }
}


export default App;
