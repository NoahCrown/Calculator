import './App.css';
import {useState} from 'react';

function App() {
  const [display, setDisplay] = useState("0");

  const handleNumbers = (event) => {
    const num = event.target.textContent;

    if (display === "0"){
      setDisplay(num);
    }else {
      setDisplay(display + num)
    }
  }

  const handleOperator = (event) => {
    const operator = event.target.textContent;
    setDisplay(display + ' ' + operator + ' ')

  }

  const handleEqual = () => {
    setDisplay(eval(display))

  }

  const handleClear = () => {
    setDisplay("0")
  }

  const handleDecimal = () => {
    const arr =  display.split(" ");
    const lastElement = arr[arr.length - 1];

    if (!lastElement.includes(".") ){
      setDisplay(display + ".")
    }
  }



  return (
    <>

    <h1 className="heading">CALCULATOR APP</h1>
    
    <div className="App">

       <div className="calculator">
        <div id="display"> 
          {display}
        </div>
        <div onClick={handleClear} id="clear">
          AC
        </div>
        <div onClick={handleNumbers} id="seven">
          7
        </div>
        <div onClick={handleNumbers} id="eight">
          8
        </div>
        <div onClick={handleNumbers} id="nine">
          9
        </div>
        <div onClick={handleOperator} id="multiply">
          *
        </div>
        <div onClick={handleNumbers} id="four">
          4
        </div>
        <div onClick={handleNumbers} id="five">
          5
        </div>
        <div onClick={handleNumbers} id="six">
          6
        </div>
        <div onClick={handleOperator} id="divide">
          /
        </div>
        <div onClick={handleNumbers} id="one">
          1
        </div>
        <div onClick={handleNumbers} id="two">
          2
        </div>
        <div onClick={handleNumbers} id="three">
          3
        </div>
        <div onClick={handleOperator} id="add">
          +
        </div>
        <div onClick={handleNumbers} id="zero">
          0
        </div>
        <div onClick={handleDecimal} id="decimal">
          .
        </div>
        <div onClick={handleEqual} id="equals">
          =
        </div>
        <div onClick={handleOperator} id="subtract">
          -
        </div>

       </div>
    </div>
    </>
  );
}

export default App;
