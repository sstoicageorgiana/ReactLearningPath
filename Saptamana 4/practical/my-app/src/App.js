import './App.css';
import React, { Component } from 'react';
import GitHubUsers from './components/GitHubUsers';
import GitHubUsersFunctional from './components/GitHubUsersFunctional';
import UseEffectExample from './components/UseEffectExample';
import UseEffectTest from './components/UseEffectTest';



function App() {
  return (
     <div className="App">
        <GitHubUsers/>
        <ClassComponentExample text = "Class component"/>
        <FunctionalComponent infoText= "Functional Component" />
        <ArrowFunctionalComponent infoText ="Arrow Functional Component Without Return"/>
        <ArrowFunctionalComponentWithReturn infoText= "Arrow Functional Component With Return"/>

         <GitHubUsersFunctional/>
        
        <UseEffectExample/> 
        <UseEffectTest infoText="UseEffectTest"/>
       
    </div>
  );
}

class ClassComponentExample extends React.Component{
  render(){
    return <h3>{this.props.text}</h3>
  }
}

function FunctionalComponent(props){
  return <div>
          <h5>{props.infoText}</h5>
         </div>
}

//ArrowFunctionalComponent=> grija la paranteze! => nu sunt "{}", ci "()", nu se foloseste return; paranteza este continutul divului
const ArrowFunctionalComponent = (props) => (
  <div>
    <p>{props.infoText}</p>
  </div>
)

//se foloseste cea cu return mai des ptr ca inainte de return mai poti face ceva conditii etc
const ArrowFunctionalComponentWithReturn = (props) => {
  return (
    <div>
      <p>{props.infoText}</p>
    </div>
  )
}

export default App;
