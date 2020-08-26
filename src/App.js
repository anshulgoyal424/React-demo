import React, { Component } from 'react';
// useState
import './App.css';
import Person from './Person/Person'

// function App() {

  // const [personState, setPersonState] =   useState( {
  //   persons : [
  //     {name:'Anshul', age: '22'},
  //     {name:'test', age: '23'},
  //   ],
  //   otherState: 'some other value'
  // });
  class App extends Component {
    state = {
      persons : [
        {id:1 ,name:'Anshul', age: '22'},
        {id:2, name:'test1', age: '23'},
        {id:3 ,name:'test2', age: '24'},
      ],
    otherState: 'some other value',
    show: false
    }

    // const switchNameHandler = () => {
    //   setPersonState({
    //     persons: [
    //       {name:'Anshul goyal', age: '23'},
    //     {name:'test123', age: '24'},
    //     ]
    //   })
    // };
    switchNameHandler = (value) => {
      this.setState({
        // persons : [
        //         {name: value, age: '23'},
        //       {name:'test123', age: '24'},
        //       ],
        show: !this.state.show
      })
    };

    nameChangeHandler = (event,id) => {
      // this.setState({
      //   persons : [
      //     {name: 'anshul' , age: 22},
      //     {name: event.target.value , age: 24},
      //     {name: event.target.value , age: 23},
      //   ]
      // })
      const persons = this.state.persons.slice();
      persons.map(item => {
        if(item.id === id) {
          item.name = event.target.value;
        }
        return item;
      })
      this.setState({
        persons : persons
      })
    }

  
    render() {

      let person = null;

      if(this.state.show) {
        person = (
          <div>
            {this.state.persons.map(person => {
              return <Person name={person.name} age={person.age} key={person.id} changed={(event) => this.nameChangeHandler(event, person.id)}/>
            })}
            {/* <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
            <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click ={this.switchNameHandler.bind(this, 'Anshul Goyal')}
            changed={this.nameChangeHandler }>
              hello between person
            </Person> */}
          </div>
        );

      }

      return (
      <div className="App">
        <h1>hello to react world</h1>
        <p>this is working</p>
        <button onClick={this.switchNameHandler.bind(this, 'Anshul Goyal')}>toggle</button>
        {person}
      </div>
     
    );
      }
    // return  React.createElement('div', {className: 'App'}, React.createElement('h1',null,'Hello to react world!!'));
  }


export default App;
