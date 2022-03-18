import React from 'react';
import './App.scss';
import "./../node_modules/@fortawesome/fontawesome-free/scss/fontawesome.scss";
import "./../node_modules/@fortawesome/fontawesome-free/scss/solid.scss";
import {getJSONData} from "./tools/Toolkit";
import {Cryptocurrency, Roi, Currency} from './tools/crypto.model';
import { Route, Switch } from "react-router-dom";
import LoadingOverlay from "./LoadingOverlay/LoadingOverlay";
import Error from './Error/Error'
import Content from "./Content/Content";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import logo from '/images/eth-logo.jpg';


function App() {
  const RETRIEVE_SCRIPT = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1"; 

  const onResponse = (result:Cryptocurrency[]) => { 
    setLoading(true);
    setCoins(result);
    console.log("RESPONSE");
    setLoading(false);
  };
    
  const onSuccess = () => {
    setLoading(true);
    console.log("Success!");
    getJSONData(RETRIEVE_SCRIPT, onResponse, onError);
    setLoading(false);
  };
    
  const onError = (message:string) => {
    console.log("*** Error has occured during AJAX data transmission: " + message);
    setLoading(false)};

    // ---------------------------------------------- state variables
    const [loading, setLoading] = React.useState<boolean>(true);
    const [coins, setCoins] = React.useState<Cryptocurrency[]>([]);
    const [search, setSearch] = React.useState<any>('');
    const [headers] = React.useState<any>(['#', 'NAME','SYMBOL', 'PRICE','24H VOLUME', 'MARKET CAP']);

      // ---------------------------------------------- lifecycle hooks
      React.useEffect(() => {
        getJSONData(RETRIEVE_SCRIPT, onResponse, onError);
      }, []);

  return (
    <div className="main">
       <LoadingOverlay bgColor="#dee2e6" spinnerColor="#4d4d4e" enabled={loading} />

        <Switch>
          <Route
            path="/"
            render={() => 
      
              <div>
                <Header /> 
              <table>
                <input
                type="text" 
                placeholder="Search a coin" 
                className="search-bar form-control bg-white text-dark border-0 mt-5 text-center shadow-lg"
                onChange={e => setSearch(e.target.value)}
                /><br/><br/>
                <Content coins={coins}  search={search}/> 
                </table><br/><br/>

                <Footer /> 

              </div>
          
            } exact />

          <Route render={() => <Error />} />
          <Route
            path="/react-crypto-dashboard"
            render={() => 
      
              <div>
                <Header /> 
              <table>
                <input
                type="text" 
                placeholder="Search a coin" 
                className="search-bar form-control bg-white text-dark border-0 mt-5 text-center shadow-lg"
                onChange={e => setSearch(e.target.value)}
                /><br/><br/>
                <Content coins={coins}  search={search}/> 
                </table><br/><br/>

                <Footer /> 

              </div>
          
            } exact />

          <Route render={() => <Error />} />
        </Switch>
  
    </div>
    
  );
}
export default App;
