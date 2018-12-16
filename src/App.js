import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import DPerson from './Person/DPerson';

class App extends Component {
  state ={
    person:[
      {name:'Ritosh M. Yadav',age:26},
      {name:'Partiosh', age:25}
    ]
  }

  switchNameHandler = (newName) =>{
    console.log('welcome to button');
    this.setState({
      person:[
        {name:newName,age:27},
        {name:'Partiosh', age:26}
      ]
    })
  }
  nameChangedHandler = (event) => {
    this.setState({
      person:[
        { name:'max',age:28},
        { name: event.target.value, age:29},
        { name:'Stephnie', age:26 }
      ]
    })
  }
  render() { 
    const style ={
      backgroundColor:'white',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor: 'pointer'
    };
    return (
      <div className="App">
     <h1>Hi, I'm a React App</h1>
      <Person />
      {/* <button onClick={this.switchNameHandler.bind(this,'Ritosh Yadav')}>Switch Name</button> */}
      <button style={style} onClick={() => this.switchNameHandler('Ritosh Yadav!!!')}>Switch Name</button>
      <DPerson 
       name={this.state.person[0].name}
       age={this.state.person[0].age} />
      <DPerson
       name={this.state.person[1].name} 
       age={this.state.person[1].age} 
       click={this.switchNameHandler.bind(this,'Paritosh Yadav')} 
       changed={this.nameChangedHandler} >
       My Hobbies: Study </DPerson>
      </div>
    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'hello bro'));
  }
}

export default App;
