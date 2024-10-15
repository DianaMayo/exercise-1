import { BrowserRouter } from "react-router-dom";
import Dashboard from "./routes/Dashboard";
import Signup from "./routes/Signup";



function App() {
  return (
    <BrowserRouter>
  <div>
    <main/>;
    <Dashboard/>;
    <Signup/>;
  </div>
  </BrowserRouter>
  )
    }

export default App;
