function App() {
  const name = "StarGazers";
  // return statement : used (...) parenthesis to follow
  return (
    // use className instead of class for React, class have different meaning in React
    <div className="container">
      {/* Multiple Elements must have a parent element ; can use fragment <> ... </> */}
      <hgroup>
        {/* React strict required closing tag */}
        <img src="images/group.svg" alt="StarGazers Group" />
        {/* pass style as object , as oppose to using CSS */}
        <h1>Meet the <i style={{color:"SteelBlue"}}>{name}</i> </h1>
        <p>Members of an <b>intergalactic alliance</b> paving the way for peace and benevolence among all species. They are known for their enthusiasm for science, for their love of fun, and their dedication to education.</p>
        <button className="outline" onClick={() =>  alert("Hello There!")}></button>
      </hgroup>
    </div>
    
  )
}
export default App
