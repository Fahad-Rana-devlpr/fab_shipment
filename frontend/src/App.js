import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Shipment from './components/Shipment'
import Label from './components/Label'

function App() {
  return (
   <>
      <Router>
        <Routes>
          <Route  path='/' element={<Shipment />} />
          <Route  path='/label/:id' element={<Label />} />
        </Routes>
      </Router>
   </> 
  );
}

export default App;
