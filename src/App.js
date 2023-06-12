import './App.css';

import Login from './components/Login'
import Home from './components/Home'

import { useNavigate } from 'react-router-dom'
import { NavLink, Route, Router, Routes, Switch } from 'react-router-dom'

function App() {
  const navigate = useNavigate()
  return (
    <div className="App">
      <Router>
        <Login />
       
        <Routes>
          <Route path= "/home" element={<Home />} />
        </Routes>
     </Router>
    </div>
  );
}

export default App;
