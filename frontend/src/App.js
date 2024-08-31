import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Shipment from './components/Shipment'

function App() {
  return (
   <>
      <Router>
        <Routes>
          <Route  path='/' element={<Shipment />} />
        </Routes>
      </Router>
   </> 
  );
}

export default App;
