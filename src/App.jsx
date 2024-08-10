import { Route, Routes,BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import './Static/css/font-awesome.min.css'

import HomePage from "./Pages/HomePage/HomePage.jsx";


function App() {
  
  return (
    <Router>
    <Routes>
      <Route path="/" exact element={<HomePage />} /> 
       
    
    </Routes>
    </Router>
  );
}

export default App;



