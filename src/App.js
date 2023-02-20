import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [Password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(26);
  const [includenumbers, setIncludeNumbers] = useState(false);
  const [includeLowerCase, setIncludeLowerCase] = useState(false);
  const [includeUpperCase, setIncludeUpperCase] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  const createPassword = (characterList) => {
    let password = "";
    const characterListLength = characterList.length;
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characterListLength);
      password = password + characterList.charAt(characterIndex);
    }
    console.log(password);
    return password;
  };
  return (
    <div className="App">
      <header className="App-header">
        <p> Hello World! </p>
      </header>
    </div>
  );
};

export default App;
