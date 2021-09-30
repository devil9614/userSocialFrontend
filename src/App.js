// import HomeWL from "./pages/HomeWL";
import Login from "./pages/login/Login";
import Register from "./pages/register/register";
import HomeWithLogin from './pages/HomeWithLogin/HomeWithLogin'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
    <Router>
    <div >
      <Switch>
        <Route exact path="/">
          <HomeWithLogin />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </div>
  </Router>
    </div>
  );
}

export default App;
