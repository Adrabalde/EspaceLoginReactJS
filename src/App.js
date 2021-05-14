import './App.css';
import SignIn from './SignIn';


function  Person (props){
  
  return(
  <div className="person">
    <h1>{props.name}</h1>
    <p>Age: {props.age}</p>
  </div>  
  );
}

function App() {
  return (
    <div className="App">
      <SignIn  />
    </div>
  );
}

export default App;
