import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from "./components/Navbar"
import Home from './components/Home'
function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Navbar />
            <h1>Login page</h1>
          </Route>
          <Route path="/checkout">
            <Navbar />
            <h1>Checkout Page</h1>
          </Route>
          <Route path="/">
            <Navbar />
            <Home />
            <h1>Home page</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
