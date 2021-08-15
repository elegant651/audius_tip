import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {
  Switch,
  HashRouter,
  Route,
  Redirect,
} from "react-router-dom";
import {
  Button
} from "react-bootstrap";
import useWeb3Modal from "./hooks/useWeb3Modal";
import history from './components/history';
import Header from './components/Header';
import Main from './components/Main';
import Create from './components/Create';
import View from './components/View';

const WalletButton = ({ provider, loadWeb3Modal, logoutOfWeb3Modal }) => {
  return (
    <Button style={{fontSize: "11px", lineHeight: "20px", color: "#212736", background: "#F3F3F3", borderRadius: "199px"}}
      onClick={async () => {
        if (!provider) {
          loadWeb3Modal();
        } else {
          logoutOfWeb3Modal();
        }
      }}
    >
      {!provider ? "Connect Wallet" : "Disconnect Wallet"}
    </Button>
  );
}


function App() {
  const [provider, loadWeb3Modal, logoutOfWeb3Modal] = useWeb3Modal();
  
  const routes = (
    <Switch>
      <Route path="/" exact>
        <Main />
      </Route>
      <Route path="/create" exact>
        <Create />
      </Route>
      <Route path="/view/:profileAddr" exact>
        <View />
      </Route>
      <Redirect to="/" />
    </Switch>
  );

  return (
    <div className="App">      
      <HashRouter history={history}>
        <Header />
        <WalletButton provider={provider} loadWeb3Modal={loadWeb3Modal} logoutOfWeb3Modal={logoutOfWeb3Modal} />
        {routes}
      </HashRouter>
    </div>
  );
}

export default App;
