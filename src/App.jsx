import { useEffect } from 'react';
import './App.css';
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';
import QueueTimer from './components/QueueTimer';
import ComTable from './components/ComTable';
import PloTable from './components/PloTable';
import BarhChart from './components/BarhChart';
import LineChart from './components/LineChart';
import ProgBar from './components/ProgBar';
import { HashRouter as Router, Route, Routes } from "react-router-dom";

function App() {

return (

  <Router>
    <Routes>
    <Route path ="/LoungeChart" element={<BarChart/>}/>
    <Route path ="/Concen" element={<PieChart/>}/>
    <Route path ="/QueueTime"element={<QueueTimer/>}/>
    <Route path ="/CustomerComplaint"element={<ComTable/>}/>
    <Route path ="/Employee"element={<PloTable/>}/>
    <Route path ="/BagChart" element={<BarhChart/>}/>
    <Route path = "/ViewChart" element={<LineChart/>}/>
    <Route path = "/porttoport" element={<ProgBar/>}/>
    </Routes>
  </Router>
);


}

export default App;