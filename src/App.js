import "./App.css";
import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Create from "./Components/Create";
import Delete from "./Components/Delete";
import Update from "./Components/Update";

function App() {
  return (
    <Router>
  <Routes>
  <Route  exact path ='/' element ={<Home/>} />
  <Route path ='/Create' element ={<Create/>} />
  <Route path ='/Delete' element ={<Delete/>} />
  <Route path ='/Update' element ={<Update/>} />
  </Routes>
 </Router>
  );
}

export default App;
