import React, { Component } from 'react';
import './App.css';


import Person from './Person/Person.js'

class App extends Component {

  state = ({
    persons : [
      {id:'afsef', name : "max" },
      {id:'adfwe', name : "Roy" },
      {id:'a1wrwe', name : "Harry"}
    ],
    showPerson : true
  })

  namechangedHandler =( event , id)=>{

    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id
    });

    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons : persons })

  }

  deletePersonsHandler = (personIndex) =>{
    //  const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
        persons.splice(personIndex , 1);
        this.setState({ persons : persons})
  }

   togglePersonsHandler = () => {
     console.log("clicked")
    const doesShow = this.state.showPerson;
    this.setState({ showPerson : !doesShow })
  }

  render() {

    const style ={
      backgroundColor : 'green',
      color: 'white', 
      font : 'inherit',
      border : '1px solid blue',
      padding : '8px',
      ':hover' : {
        backgroundColor : 'yellow',
        color: 'black'
      }
    }

    let personlist = null;

    if(this.state.showPerson){
      personlist = ( 
        <div>
          {this.state.persons.map( (person, index) =>{
            return  <Person
                      click={()=> this.deletePersonsHandler(index)} 
                      name={person.name}
                      key={person.id}
                      changed={(event)=>this.namechangedHandler(event , person.id)} /> 
          })}
         
        </div> 
       );

       style.backgroundColor =  'red';
       style[':hover'] = {
        backgroundColor : 'black',
        color: 'black'
      }
    }

    // let classes = ['red' , 'bold'].join(' ');
    const classes = [];

    if(this.state.persons.length <= 2){
        classes.push('red');
    }

    if(this.state.persons.length <=1){
      classes.push('bold');
    }

    return (
    
      <div className="App">
       <h4>Rendering List </h4>
       <p className={classes.join(' ')}> this is really working </p>
       <button  style={style}  onClick={this.togglePersonsHandler}>Toggle Person</button>

       {personlist}
        
      </div>
     
    );
  }
}

export default  App;


