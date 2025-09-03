import {BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import DashBoard from './dashboard/dashboard.jsx';
import LandingDashboard from './maincomponent/landingboard.jsx';
import SalesForm from './salesform/salesform.jsx';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<LandingDashboard/>}/>
        <Route path="/sales-submit" element={<SalesForm/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
