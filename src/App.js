
import React, { Component } from "react";
import Display from "./components/Display";
import General from "./components/General";
import WorkXP from "./components/WorkXP";
import Education from "./components/Education";

class App extends Component {
  constructor() {
    super();
    this.state = {
      personal: { name: '', email: '', occupation: '', DOB: '', phone: '', location: '' },
      work: { company: '', occupation: '', start: '', end: '', discription: '' },
      education:
        [{ institution: '', name: '', start: '', end: '' }],


    }
    this.handleChange = this.handleChange.bind(this);
    this.handle = this.handle.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const type = target.dataset.info
    const value = target.value;
    const name = target.name;
    this.setState({ [type]: { ...this.state[type], [name]: value } });
  }
  // update objects in array
  handle(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    const newState = Object.assign({}, this.state);
    newState.education[0][name] = value
    this.setState(newState);

  }

  render() {
    return (
      <div className="container">
        <div className="form-enter">
          <General handler={this.handleChange} value={this.state.personal} />
          <WorkXP handler={this.handleChange} value={this.state.work} />
          <Education handler={this.handle} value={this.state.education[0]} />
        </div>
        <div className="form-view">
          <Display value={this.state} />
        </div>
      </div>
    );
  }
}

export default App;