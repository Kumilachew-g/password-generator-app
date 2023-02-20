import React, { useState } from "react";
import "./App.css";

import { toast, ToastContainer } from "react-toastify";
import {
  lowerCaseLetters,
  numbers,
  upperCaseLetters,
  specialCharacters,
} from "./components/Character";
import { copyFail, copySuccess } from "./components/Message";
const App = () => {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(26);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeLowerCase, setIncludeLowerCase] = useState(false);
  const [includeUpperCase, setIncludeUpperCase] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
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

  const createPassword = (characterList) => {
    let password = "";
    const characterListLength = characterList.length;
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characterListLength);
      password = password + characterList.charAt(characterIndex);
    }
    return password;
  };

  const copyToClipboard = (password) => {
    navigator.clipboard.writeText(password);
  };

  const notify = (message, hasError = false) => {
    if (hasError) {
      toast.error(message, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast(message, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
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
      <div className="container">
        <div className="generator">
          <h2 className="generator_header">Password Generator</h2>
          <div className="generator_password">
            <h3>{password}</h3>
            <button className="copy__btn">
              <i onClick={handleCopyPassword} className="far fa-clipboard"></i>
            </button>
          </div>
          <div className="form-group">
            <label htmlFor="password-strength"> Password length </label>
            <input
              type="number"
              name="password-strength"
              id="password-strength"
              max="26"
              min="8"
              defaultValue={passwordLength}
              onChange={(e) => setPasswordLength(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="include-numbers">Include Numbers</label>
            <input
              type="checkbox"
              name="include-numbers"
              id="include-numbers"
              checked={includeNumbers}
              onChange={(e) => setIncludeNumbers(e.target.checked)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="include-lowercase">Include Lowercase</label>
            <input
              type="checkbox"
              name="include-lowercase"
              id="include-lowercase"
              checked={includeLowerCase}
              onChange={(e) => setIncludeLowerCase(e.target.checked)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="include-uppercase">Include Uppercase</label>
            <input
              type="checkbox"
              name="include-uppercase"
              id="include-uppercase"
              checked={includeUpperCase}
              onChange={(e) => setIncludeUpperCase(e.target.checked)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="include-symbols">Include Symbols</label>
            <input
              type="checkbox"
              name="include-symbols"
              id="include-symbols"
              checked={includeSymbols}
              onChange={(e) => setIncludeSymbols(e.target.checked)}
            />
          </div>

          <button onClick={handleGeneratePassword} className="generator__btn">
            Generate Password
          </button>
          <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>
      </div>
    </div>
  );
};

export default App;
