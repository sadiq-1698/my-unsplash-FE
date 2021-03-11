import "./App.css";
import Button from "./components/Button/Button";

function App() {
  return (
    <div>
      <Button
        color="red"
        text="Add Image"
        onClick={() => console.log("Added Image!")}
      />
      <Button
        color="red"
        text="Delete Image"
        onClick={() => console.log("Deleted image!")}
      />
      <Button text="Primary" onClick={() => console.log("Primary Image!")} />
    </div>
  );
}

export default App;
