import React, { useState } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState(null);
  const [selectValue, setSelectValue] = useState(null);
  const [result, setResult] = useState(null);
  const [sideText, setSideText] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (inputValue?.length >= 7) {
      alert("input length must be under 7 number!");
    } else {
      if (selectValue === "px") {
        setSideText("Rem");
        if (inputValue >= 16) {
          setResult((inputValue / 16) * 1);
        } else {
          setResult(inputValue / 16);
        }
      } else {
        setSideText("Px");
        setResult(inputValue * 16);
      }
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSelectChange = (e) => {
    setSelectValue(e.target.value);
  };

  return (
    <div className="App">
      <div className="wrapper_div">
        <h1>Rem / Px Value Converter</h1>
        <form className="form" onSubmit={handleOnSubmit}>
          <div className="flex">
            <div className="input_div">
              <input
                type="text"
                placeholder="value"
                onChange={handleInputChange}
              />
            </div>
            <select className="select" onChange={handleSelectChange}>
              <option value="Rem">Rem</option>
              <option value="px">Px</option>
            </select>
            <span>=</span>

            <div className="result_wrapper">
              <div className="result_div">{result ? result : "00"}</div>
              <p className="side_text">{sideText ? sideText : "Rem"}</p>
            </div>
          </div>
          <button className="submit_btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
