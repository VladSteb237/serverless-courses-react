import Airtable from "./Airtable";
import Basic from "./Basic";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Basic />
      <Airtable />
    </div>
  );
}

export default App;
