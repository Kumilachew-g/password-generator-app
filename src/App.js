import Raect, { useState } from "react";
import "./App.css";

const App = () => {
  const [Password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(26);
  const [includenumbers, setIncludeNumbers] = useState(false);
  const [includeLowerCase, setIncludeLowerCase] = useState(false);
  const [includeUpperCase, setIncludeUpperCase] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <p> Hello World! </p>
      </header>
    </div>
  );
};

export default App;
