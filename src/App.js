import "./App.css";
import { useState, useContext } from "react";
import AddErorr from "./components/AddErorr";
import ErorrCard from "./components/ErorrCard";
import daynight from "./day-and-night.png";
import { Mycontext } from "./components/Mycontext";

function App() {
  const [theme, changetheme] = useState("light");
  const toglle = () => {
    changetheme(theme === "light" ? "dark" : "light");
  };
  const styles = {
    padding: "20px",
    backgroundColor: theme === "light" ? "#fff" : "#333",
    color: theme === "light" ? "#000" : "#fff",
  };
  return (
    <div style={styles} className="App">
      <a
        onClick={() => {
          toglle();
        }}
      >
        <span>Change</span>
        <img
          src={daynight}
          style={{ width: 40, marginTop: 6 }}
          alt="daynightmode"
        ></img>
        <span>Theme</span>
      </a>
      <Mycontext.Provider value={{theme}}>
        <AddErorr />
      </Mycontext.Provider>
    </div>
  );
}

export default App;
