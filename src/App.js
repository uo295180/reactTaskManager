import './App.css';

function App() {
  let name = "mario"
  let surname = "orviz"
  let validUser = true
  let countries = ["Sapin","Portugal","Germany"]
  let objectList = [{ name: "orbs", surname: "orbi" }, { name: "noes", surname: "kane"}, {name: "kaps", surname: "kabs"}]
  let exampleJSX = <h1>ejemplo</h1>

  return (
    <>
      <div className="App">
        { validUser === true ? 
          <ul>
            <li>{name}</li>
            <li>{surname}</li>
          </ul>
          : <p>No info</p>
        }
        {exampleJSX}
        { countries.map(e => <li>{e}</li>) }
        { objectList.map( ob => <div>
          <h3>{ob.name}</h3>
          <p>{ob.surname}</p>
        </div>)}
        <p className="testStyle">Para</p>
      </div>
    </>
  );
}

export default App;
