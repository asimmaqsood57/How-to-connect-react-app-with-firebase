import "./App.css";
import ReactForm from "./components/ReactForm";
import Alert from "../src/components/Alert";
import { useState } from "react";
import { toast } from "react-toastify";

// Import toastify css file
import "react-toastify/dist/ReactToastify.css";

toast.configure();
function App() {
  const [alert, setalert] = useState(false);

  return (
    <div className="App">
      <ReactForm alert={setalert} />

      {alert ? <Alert /> : ""}
    </div>
  );
}

export default App;
