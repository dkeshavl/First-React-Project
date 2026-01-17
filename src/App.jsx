import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Component from "./Component.jsx";
import Person from "./Person.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="main">
        <div className="left">
          <div className="circle"></div>
        </div>
        <div className="center">
          < Component/>
          < Component/>
          < Component/>
          < Component/>
        </div>
        <div className="right">
          < Person/>
          < Person/>
          < Person/>
          < Person/>
          < Person/>
          < Person/>
          < Person/>
          < Person/>
        </div>
      </div>
    </>
  );
}

export default App;
