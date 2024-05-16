import { useEffect } from 'react';
import './App.css';
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';
import QueueTimer from './components/QueueTimer';
import { HashRouter as Router, Route, Routes } from "react-router-dom";

function App() {

return (

  <Router>
    <Routes>
    <Route path ="/LoungeChart" element={<BarChart/>}/>
    <Route path ="/Concen" element={<PieChart/>}/>
    <Route path ="/QueueTime"element={<QueueTimer/>}/>
    </Routes>
  </Router>
);


}

export default App;