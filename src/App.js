// import HomeWL from "./pages/HomeWL";
import Login from "./pages/login/Login";
import Register from "./pages/register/register";
import HomeWL from './pages/HomeWL'
import HomeWithLogin from './pages/HomeWithLogin/HomeWithLogin'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import UserFeed from "./pages/userFeed/UserFeed";
import { ApolloProvider, ApolloClient,InMemoryCache, HttpLink, ApolloLink, from, concat } from '@apollo/client'
import AuthProvide from "./Authentication/AuthProvide";
import PrivateRoute from "./Authentication/PrivateRoute";
import LoginRoute from "./Authentication/LoginRoute";

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
  link: concat(authMiddleware,httpLink),
  cache: new InMemoryCache()
})

console.log(client)

function App() {
  return (
    <>
    <ApolloProvider client = {client}>
      <Router>
      <AuthProvide>
        <Switch>
          <LoginRoute path = "/login">
            <Login/>
          </LoginRoute>
          <LoginRoute path = "/register">
            <Register/>
          </LoginRoute>
          <LoginRoute path = "/home">
            <HomeWL/>
          </LoginRoute>
          <PrivateRoute path = "/">
            <HomeWithLogin/>
          </PrivateRoute>
        </Switch>
        </AuthProvide>
      </Router>
    </ApolloProvider>
    </>
  );
}

export default App;
