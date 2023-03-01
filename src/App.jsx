import React , { Component } from 'react';

// ** for demostration, irl you want components to be written in external files

//classes
class Welcome extends React.Component {
  //constructor
  constructor(props) {
    super(props);
  }
  //render
  render(){
    return <h1>Meet the {this.props.name}</h1>
  }
}

//Hooks
const Hello = (props) => {
  return <h1>Meet the <i style={{ color: "SteelBlue" }}>{props.name}</i></h1>
}

function App() {
  const name = 'StarGazers'
  return (
    <div className="container">
      <article>
        <hgroup>
          <img src="images/group.svg" alt="StarGazers Group" />
          {/* <h1>Meet the <i style={{ color: "SteelBlue" }}>{name}</i></h1> */}
          {/* begin with Capital case : Component (reusable) 
              begin with lower case : html class */}
          <Welcome name="Stars"/>
          <Hello name="StarGazers"/>
          <Welcome name="StarAliens"/>
          <p>Members of an <b>intergalactic alliance</b><br />
            paving the way for peace and benevolence among all species. They are known for their enthusiasm for science, for their love of fun, and their dedication to education.</p>
          <button className="outline" onClick={() => alert('Hi there')}>Click Me</button>
        </hgroup>
      </article>
    </div>
  )
}
export default App
