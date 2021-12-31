import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import Status from './components/Status';
import { Account } from './components/Account';

function App() {
  return (
    <div className="App">
      <Account>
      <Status/>
      <Signup/>
      <Login/>
      </Account>
    </div>
  );
}

export default App;
