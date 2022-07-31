
import React, { Component } from "react";
import Display from "./components/Display";
import General from "./components/General";
import WorkXP from "./components/WorkXP";
import Education from "./components/Education";
import uniqid from "uniqid";


class App extends Component {
  constructor() {
    super();
    this.state = {
      personal: { name: '', email: '', occupation: '', DOB: '', phone: '', location: '' },
      work: { company: '', occupation: '', start: '', end: '', discription: '' },
      education:
        [{ institution: '', name: '', start: '', end: '', id: uniqid() }],
    }

    this.handleChange = this.handleChange.bind(this);
    this.handle = this.handle.bind(this);
    this.addItem = this.addItem.bind(this)
  }

  addItem() {
    const newState = Object.assign({}, this.state);
    newState.education.push({ institution: '', name: '', start: '', end: '', id: uniqid() })
    this.setState(newState);
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
          <div className="personal">
            <div className="header">personal information</div>
            <General handler={this.handleChange} value={this.state.personal} />
          </div>
          <div className="work">
            <div className="header">Work Experience</div>
            <WorkXP handler={this.handleChange} value={this.state.work} />
          </div>
          <div className="education">
            <div className="header">Education Details</div>
            {/* render each  object of education state array */}
            {this.state.education.map((detail) => {
              return <Education handler={this.handle} value={detail} add={this.addItem} key={detail.id} />
            })}


          </div>
        </div>
        <div className="form-view">
          <Display value={this.state} />
        </div>
      </div>
    );
  }
}

export default App;
