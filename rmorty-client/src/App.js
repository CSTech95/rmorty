import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css';
import Status from './components/Status';
import { Account } from './components/Account';
import Home from './components/Home';
import ErrorPage from './components/ErrorPage';
import { Search } from './components/Search';
import Dashboard from './components/Dashboard';
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>

    <Router>
      <Account>
        <Navbar/>
      {/* <Status/> */}
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
      </Account>
    </Router>
    </div>
  );
}

export default App;
