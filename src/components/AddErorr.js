import React, { useContext, useState } from "react";
import "./AddErorr.css";
import { Mycontext } from "./Mycontext";
import ErorrCard from "./ErorrCard";

function AddErorr() {
  const { theme } = useContext(Mycontext);
  const [inputData, changeData] = useState({
    name: "",
    describe: "",
    resolved: false,
  });

  const [attemp, setattemp] = useState("");
  const [attempslist, changelist] = useState([]);
  const [counter, counterincrease] = useState(0);

  function Attemphandler(event) {
    changelist([...attempslist, { name: attemp }]);
  }
  const submitHandle = () => {};
  const listOfAttemps = attempslist.map((attemp) => {
    return <li>{attemp.name}</li>;
  });

  return (
    <div>
      <div
        style={{
          backgroundColor: theme === "light" ? "rgb(239, 239, 239)" : "#333",
        }}
        id="Maindiv"
      >
        <div id="form">
          <form
            onSubmit={(event) => {
              event.preventDefault();
            }}
          >
            <div>
              <h1>Track New Erorr</h1>
              <div>
                <h5>Erorr Name</h5>
                <input
                  type="text"
                  onChange={(event) => {
                    changeData({ ...inputData, name: event.target.value });
                  }}
                />
              </div>
              <div>
                <h5>Error Description</h5>
                <textarea
                  onChange={(event) => {
                    changeData({ ...inputData, describe: event.target.value });
                  }}
                ></textarea>
              </div>
              <div>
                <h5>Solution Attempt</h5>
                <input
                  type="text"
                  placeholder="+ Add New Solution"
                  onChange={(event) => {
                    setattemp(event.target.value);
                  }}
                />
                <button
                  style={{ marginLeft: 10 }}
                  onClick={() => {
                    counterincrease(counter + 1);
                    Attemphandler();
                  }}
                >
                  Add Solution
                </button>
              </div>
              <div>
                <ul></ul>
              </div>
              <div>
                <p>Resolved</p>
                <input
                  type="checkBox"
                  name="Resolved"
                  onChange={(event) => {
                    changeData({
                      ...inputData,
                      resolved: event.target.checked,
                    });
                  }}
                ></input>
              </div>
            </div>
          </form>
        </div>
        <div id="listdisplay">
          <h1 style={{ marginBottom: 20 }}>
            Solutions Attempt <span>{counter}</span>
          </h1>
          <ol>{listOfAttemps}</ol>
        </div>
      </div>
      <div>
        {inputData.resolved && (
          <ErorrCard name={inputData.name} describe={inputData.describe} />
        )}
      </div>
    </div>
  );
}

export default AddErorr;
