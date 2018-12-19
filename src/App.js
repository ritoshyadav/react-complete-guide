import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import DPerson from './Person/DPerson';

class App extends Component {
  state = {
    person: [
      { name: 'Ritosh M. Yadav', age: 26 },
      { name: 'Partiosh', age: 25 }
    ],
    otherState:'some other value',
    showPerson:false
  }


  nameChangedHandler = (event) => {
    this.setState({
      person: [
        { name: 'max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephnie', age: 26 }
      ]
    })
  }
  togglePersonHander = () => {
     const doesShow= this.state.showPerson;
     this.setState({showPerson:!doesShow});
  }
  deletePersonHandler = (personIndex) =>{
    const persons= this.state.persons;
    // persons.splice(personIndex, 1);
    DPerson.splice(personIndex, 1);
    this.setState({persons:DPerson})
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    if(this.state.showPerson){
      persons =(
        <div>
          {/* <DPerson
            name={this.state.person[0].name}
            age={this.state.person[0].age} />
          <DPerson
            name={this.state.person[1].name}
            age={this.state.person[1].age}
            click={this.switchNameHandler.bind(this, 'Paritosh Yadav')}
            changed={this.nameChangedHandler} >
            My Hobbies: Study </DPerson> */}
            {this.state.person.map((person, index) => {
              return<DPerson
              click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age} />
            })}
        </div>
      ); 
    }
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <Person />
        {/* <button onClick={this.switchNameHandler.bind(this,'Ritosh Yadav')}>Switch Name</button> */}
        {/* <button style={style} onClick={() => this.switchNameHandler('Ritosh Yadav!!!')}>Switch Name</button> */}
        <button 
        style={style} 
        onClick={this.togglePersonHander}>Switch Name</button>
        {/* {this.state.showPerson === true ?
        <div>
          <DPerson
            name={this.state.person[0].name}
            age={this.state.person[0].age} />
          <DPerson
            name={this.state.person[1].name}
            age={this.state.person[1].age}
            click={this.switchNameHandler.bind(this, 'Paritosh Yadav')}
            changed={this.nameChangedHandler} >
            My Hobbies: Study </DPerson>
        </div>:null} */}
        {persons}
      </div>
    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'hello bro'));
  }
}

export default App;
