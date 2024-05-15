import './App.css';
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';
import QueueTimer from './components/QueueTimer';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  var beerX = Math.floor(Math.random() * (100-20)+20);
  var wineX = Math.floor(Math.random() * (75-10)+10);
  var vodkaX = Math.floor(Math.random() * (65-5)+5);
  var colaX = Math.floor(Math.random() * (120-20)+20);

  var arrX = Math.floor(Math.random() * (1474-400)+400);
  var depX = Math.floor(Math.random() * (1000-300)+300);
  var secX = Math.floor(Math.random() * (800-250)+250);
  var retX = Math.floor(Math.random() * (350-200)+200);

  const datathree = [
    {
      "Beverage Type": "Beer",
      "Beer": beerX,

    },
    {
      "Beverage Type": "Wine",
      "Wine": wineX,

    },
    {
      "Beverage Type": "Vodka",
      "Vodka": vodkaX,
    },
    {
      "Beverage Type": "Cola",
      "Cola": colaX,

    }
  ]
  
  const datatwo = [
    
      { id: "Retail Area", label: "Retail Area", value: retX, color: "rgb(100 116 139)" },
      { id: "Security", label: "Security", value: secX, color: "hsl(56, 70%, 50%)" },
      { id: "Departures", label: "Departures", value: depX, color: "hsl(0, 100%, 50%)" },
      { id: "Arrivals", label: "Arrivals", value: arrX, color: "hsl(186, 70%, 50%)" },
  ]
;
  return (
    <Router>
      <Routes>
      <Route path ="/LoungeChart" element={<BarChart data={datathree}/>}/>
      <Route path ="/Concen" element={<PieChart data={datatwo}/>}/>
      <Route path ="/QueueTime"element={<QueueTimer/>}/>
      </Routes>
    </Router>
  );
}

export default App;