import "./App.css";
import * as React from "react";

function App() {
  const [checked, setChecked] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");
  const [task, setTask] = React.useState([]);

  const handleChange = () => {
    setChecked(!checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTask([
      ...task,
      <Checkbox label={inputValue} value="false" toggle={handleChange} />,
    ]);
    console.log(task);
  };

  const Checkbox = ({ label, value, toggle }) => {
    return (
      <label>
        <input type="checkbox" checked={value} onClick={toggle} />
        {label}
      </label>
    );
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          Please enter your task:
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </label>
        <button type="submit">Add task</button>
      </form>
      <div>{task}</div>
      <Checkbox label="Hond" value={checked} toggle={handleChange} />
    </div>
  );
}

export default App;
