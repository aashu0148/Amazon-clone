import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from "./components/Navbar"
import Home from './components/Home'
import Checkout from './components/checkout'
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Navbar />
            <h1>Login page</h1>
          </Route>
          <Route path="/checkout">
            <Navbar />
            <Checkout />
          </Route>
          <Route path="/">
            <Navbar />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
