
import React, { Component } from "react";
import Display from "./components/Display";
import General from "./components/General";
import WorkXP from "./components/WorkXP";

class App extends Component {
  constructor() {
    super();
    this.state = {
      personal: { name: '', email: '', occupation: '', DOB: '', phone: '', location: '' },
      work: { company: '', occupation: '', start: '', end: '', discription: '' }
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const type = target.dataset.info
    const value = target.value;
    const name = target.name;
    this.setState({ [type]: { ...this.state[type], [name]: value } });


  }

  render() {
    return (
      <div className="container">
        <div className="form-enter">
          <General handler={this.handleChange} value={this.state.personal} />
          <WorkXP handler={this.handleChange} value={this.state.work} />
        </div>
        <div className="form-view">
          <Display value={this.state} />
        </div>
      </div>
    );
  }
}

export default App;