// import HomeWL from "./pages/HomeWL";
import Login from "./pages/login/Login";
import Register from "./pages/register/register";
import HomeWL from './pages/HomeWL'
import HomeWithLogin from './pages/HomeWithLogin/HomeWithLogin'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import UserFeed from "./pages/userFeed/UserFeed";
import { ApolloProvider, ApolloClient,InMemoryCache, HttpLink, ApolloLink, concat} from '@apollo/client'
import AuthProvide from "./Authentication/AuthProvide";
import PrivateRoute from "./Authentication/PrivateRoute";

const httpLink = new HttpLink({ uri: 'http://localhost:4000/graphql' });

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem('token')
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }));
  return forward(operation);
})


const client = new ApolloClient({
  link: concat(authMiddleware, httpLink),
  cache: new InMemoryCache()
})

console.log(client)

function App() {
  return (
    <div className="App">
    <ApolloProvider client = {client}>
    <Router>
    <AuthProvide>
    <div >
    <Switch>
      <PrivateRoute exact path="/">
        <HomeWithLogin />
      </PrivateRoute>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path = "/user">
        <UserFeed/>
      </Route>
    </Switch>
  </div>
    </AuthProvide>
    
  </Router>
  </ApolloProvider>
    </div>
  );
}

export default App;
