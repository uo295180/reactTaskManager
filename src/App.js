import './App.css';
import {useState, useRef, useEffect} from "react"

function App() {
  let [name, setName] = useState();

  let [num1, setNum1] = useState(0);
  let [num2, setNum2] = useState(0);
  let [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(num1+num2)
  }, [num1, num2])

  let onChangeInput = (e) => {
    setName(e.currentTarget.value)
    console.log("onChangeInput " + e.currentTarget.value)
  }

  let onChangeNumber1 = (e) => {
    setNum1(parseFloat(e.currentTarget.value))
  }

  let onChangeNumber2 = (e) => {
    setNum2(parseFloat(e.currentTarget.value))
  }

  let onClickCalculate= () => {
    setTotal(num1+num2)
  }

  return (
    <>
      <div className="App">
        <h2>Data input 1</h2>
        <input type="text" placeholder='Your name here' onChange={onChangeInput}/>
        <p>my name: {name}</p>

        <h2>Calculator</h2>
        <input type="number" onChange={onChangeNumber1}></input>
        <input type="number" onChange={onChangeNumber2}></input>
        <button onClick={onClickCalculate}>Calculate</button>
        <p>Total {num1} + {num2}: {total}</p>
      </div>
    </>
  );
}

export default App;
