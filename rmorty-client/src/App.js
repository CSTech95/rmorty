import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import Status from './components/Status';
import { Account } from './components/Account';
import Home from './components/Home';
import ErrorPage from './components/ErrorPage';
import { Search } from './components/Search';

function App() {
  return (
    <div>

    <Router className="App">
      <Account>
      <Status/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/characters" element={<Search/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
      </Account>
    </Router>
    </div>
  );
}

export default App;
