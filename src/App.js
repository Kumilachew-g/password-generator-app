import React, { useState } from "react";
import "./App.css";
import { lowerCaseLetters, numbers } from "./components/Character";
import { copyFail, copySuccess } from "./components/message";
const App = () => {
  const [Password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(26);
  const [includeNumbers, setIncludeNumbers] = useState(false);
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
    return password;
  };

  const handleGeneratePassword = () => {
    if (
      !includeLowerCase &&
      !includeNumbers &&
      !includeUpperCase &&
      !includeSymbols
    ) {
      notify("To generate password you must select atleast one checkbox", true);
    } else {
      let characterList = "";
      if (includeNumbers) {
        characterList = characterList + numbers;
      }
      if (includeLowerCase) {
        characterList = characterList + lowerCaseLetters;
      }
      if (includeUpperCase) {
        characterList = characterList + upperCaseLetters;
      }
      if (includeSymbols) {
        characterList = characterList + specialCharacters;
      }

      setPassword(createPassword(characterList));
      notify("Password is generated successfully", false);
    }
  };

  const copyToClipboard = (password) => {
    navigator.clipboard.writeText(password);
  };

  const handleCopyPassword = (e) => {
    if (password === "") {
      notify(copyFail, true);
    } else {
      copyToClipboard(password);
      notify(copySuccess);
    }
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
