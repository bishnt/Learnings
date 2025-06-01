import {useState} from "react";


function App() {
  const [count, setCount] = useState(0); //this is the syntax to say react that this is a state variable
  console.log(count)
  console.log(setCount)
  
  return (
    <>
    <div>
      <Custombutton count={count} setCount={setCount}></Custombutton>
    </div>
    </>
  )
}

function Custombutton(props){

  function onClickHandler(){
    props.setCount(props.count + 1);
  }

  return(
    <>
    <button onClick={onClickHandler}>Counter {props.count}</button>
    </>
  )
}
export default App
