import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {
  Switch,
  HashRouter,
  Route,
  Redirect,
} from "react-router-dom";
import history from './components/history';
import Header from './components/Header';
import Create from './components/Create';
import Main from './components/Main';
import View from './components/View';
import Faucet from './components/Faucet';


function App() {
  const routes = (
    <Switch>
      <Route path="/" exact>
        <Main />
      </Route>
      <Route path="/create" exact>
        <Create />
      </Route>
      <Route path="/view/:couponAddress/:nftToken/:buyToken" exact>
        <View />
      </Route>
      <Route path="/token-faucet" exact>
        <Faucet />
      </Route>
      <Redirect to="/" />
    </Switch>
  );

  return (
    <div className="App">      
      <HashRouter history={history}>
        <Header />
        {routes}
      </HashRouter>
    </div>
  );
}

export default App;
