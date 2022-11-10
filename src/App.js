
import './App.css';
import {useEffect, useState} from 'react' ; 

function App() {
  const [color, setcolor] = useState("white");
  
  const click = color => {
    setcolor(color)
  }
  useEffect(()=>{
  document.body.style.backgroundColor = color
  },[color]
  )
 
  return(
    <div className='App'>
      <h1>overrected</h1>
      <button onClick={
    () => {click(" #282c34")}}
   >toggle</button>
  <h1 style={{color : "pink"}}>THE  WET CODEBASE</h1>
  <h1 style={{color : "pink"}}>Good bye clean code</h1>
  <h1 style={{color : "pink"}}>My decade in review</h1>
    </div>
  );
};
export default App;
