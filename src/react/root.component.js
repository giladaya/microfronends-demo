import React from "react";
import { navigateToUrl } from "single-spa";
import _style from "./index.css";

const App = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div className="react-app-container">
      React App
      <br />
      <div>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default App;
