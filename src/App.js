import { useState } from "react";

function App() {
  const [number, setNumber] = useState("")

  const blockChar = (e) => {
    ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()
    if(["0"].includes(e.key) && number.length === 0) {
      e.preventDefault()
    }
  } 

  const restrictValue = () => {
    Number(number) > 3999 && setNumber(number.slice(0, 3))
    return number.length > 4 ? setNumber(number.slice(0, 4)) : number
  }

  const numbers = {
    units: ["","I","II","III","IV","V","VI","VII","VIII","IX",],
    tens: ["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"],
    hundreds: ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"],
    thousands: ["","M","MM","MMM"]
  }
  

  const converter = () => {
    let theNumber = ""
    if(number.length === 4) {
      theNumber = ""
      theNumber += 
      numbers.thousands[Number(number[0])] +
      numbers.hundreds[Number(number[1])] +
      numbers.tens[Number(number[2])] + 
      numbers.units[Number(number[3])]
    }
    if(number.length === 3) {
      theNumber = ""
      theNumber += 
      numbers.hundreds[Number(number[0])] +
      numbers.tens[Number(number[1])] + 
      numbers.units[Number(number[2])]
    }
    if(number.length === 2) {
      theNumber = ""
      theNumber += 
      numbers.tens[Number(number[0])] + 
      numbers.units[Number(number[1])]
    }
    if(number.length === 1) {
      theNumber = ""
      theNumber += 
      numbers.units[Number(number[0])]
    }
    return theNumber
  }
 

  return (
    <div className="App">
      <header>
        <h1>A Roman Number Converter</h1>
        <p>This app converts a standard number to a roman one.</p>
      </header>
      <form>
        <h2>Enter a Number</h2>
        <input 
          onKeyDown={blockChar} 
          onChange={e => setNumber(e.target.value)}
          value={restrictValue()}
          type="number" 
          required
        />
        <p className="result">{number.length === 0 ? "..." : converter()}</p>
      </form>
    </div>
  );
}

export default App;
