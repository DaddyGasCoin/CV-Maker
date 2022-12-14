
import React, { Component } from "react";
// import Display from "./components/Display";
import General from "./components/General";
import WorkXP from "./components/WorkXP";
import Education from "./components/Education";
import DisplayGeneral from "./components/DisplayGeneral";
import DisplayWorkXP from "./components/DisplayWorkXP";
import DisplayEducation from "./components/DisplayEducation";
import uniqid from "uniqid";


class App extends Component {
  constructor() {
    super();
    this.state = {
      personal: {
        name: 'Johnathon Doe', email: 'johndoe@email.com', occupation: 'Web Developer', phone: '12345678',
        location: 'Bangalore,IND'
      },
      work: [{
        company: 'Some Company', occupation: 'Web Developer', start: '2017', end: '2021',
        discription: 'Vivamus suscipit, nisl quis sollicitudin tristique, nisi libero dictum massa, vitae tristique est nunc vel massa. Vivamus ullamcorper vel ligula eget consectetur. Aliquam non mi eu est maximus gravida. Nullam eget urna vel felis ullamcorper hendrerit aliquet sit amet turpis. Aenean id congue erat, sit amet ultricies sem',
        id: uniqid()
      }],
      education:
        [{ institution: 'Some School', name: 'Some degree', start: '2013', end: '2017', id: uniqid() }]
    }

    this.handleChange = this.handleChange.bind(this);
    this.handle = this.handle.bind(this);
    this.addItem = this.addItem.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
  }

  addItem(event) {
    const group = event.target.dataset.group
    const newState = Object.assign({}, this.state);
    if (group === 'work') {
      newState.work.push({ company: '', occupation: '', start: '', end: '', discription: '', id: uniqid() })
    }
    else {
      newState.education.push({ institution: '', name: '', start: '', end: '', id: uniqid() })
    }

    this.setState(newState);
  }

  deleteItem(event) {
    const targetid = event.target.dataset.id
    const newState = Object.assign({}, this.state);
    const group = event.target.dataset.group
    const index = this.state[group].map(e => e.id).indexOf(targetid);
    //delete based on index;from uniqeid
    newState[group].splice(index, 1)
    this.setState(newState);

  }

  handleChange(event) {
    const target = event.target;
    const type = target.dataset.info
    const value = target.value;
    const name = target.name;
    this.setState({ [type]: { ...this.state[type], [name]: value } });
  }

  // update objects in work or personal state array
  handle(event) {
    const target = event.target;
    const value = target.value; //content to update
    const name = target.name; // property of object
    const targetid = target.dataset.id
    const group = target.dataset.info // target personal or work array
    const index = this.state[group].map(e => e.id).indexOf(targetid); //reveice index 
    const newState = Object.assign({}, this.state);
    newState[group][index][name] = value
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
            {/* display add button if state is empty */}
            {this.state.work.length === 0 ?
              <div><button className="add" data-group="work" onClick={this.addItem}>ADD</button></div> : null}
            {/* render each  object of work state array */}
            {this.state.work.map((detail) => {
              return <WorkXP handler={this.handle} value={detail} add={this.addItem}
                id={detail.id} key={detail.id} del={this.deleteItem} />
            })}
          </div>
          <div className="education">
            <div className="header">Education Details</div>
            {this.state.education.length === 0 ?
              <div><button className="add" data-group="education" onClick={this.addItem}>ADD</button></div> : null}
            {/* render each  object of education state array */}
            {this.state.education.map((detail) => {
              return <Education handler={this.handle} value={detail} add={this.addItem}
                id={detail.id} key={detail.id} del={this.deleteItem} />
            })}
          </div>
        </div>
        <div className="form-view">
          <DisplayGeneral value={this.state.personal} />
          <div className="work-header">Work Experience</div>
          <DisplayWorkXP value={this.state.work} />
          <div className="work-header">Education Details</div>
          <DisplayEducation value={this.state.education} />
        </div>
      </div>
    );
  }
}

export default App;
