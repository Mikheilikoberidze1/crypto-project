import './App.css';
import { useEffect, useState } from 'react';
import { fetchPrices } from './client';
import { CryptoBox } from './components/CryptoBox';
import navigationbar from './components/navigationbar';
import Table from 'react-bootstrap/Table';

function App() {
  const [prices, setPrices] = useState();
  const refreshData = async() => {
    const data = await fetchPrices();
    setPrices(data);
  }
  
  useEffect(() => {
    refreshData();
    
  }, []);
  const renderPrices = () => {
    const result =  [];
    if (!prices) {
      return [];
    }
    
    Object.keys(prices).map(key => {
      var arr=[];
      const fetchData2 = async (key) => {
        const result2 = await fetch(
          `https://api.coingecko.com/api/v3/coins/${key}/market_chart?vs_currency=usd&days=6&interval=daily`,
        );
        
        const data2 = await result2.json();
        data2.prices.forEach(element => {
          arr.push(element[1]);
        })
        
      }
        fetchData2(key);
        
      result.push(<CryptoBox price={prices[key].usd} name={key} change24h={prices[key].usd_24h_change} volume24h={prices[key].usd_24h_vol} marketcap={prices[key].usd_market_cap} charter={arr}/>);
     })
     
    return result;
  }
 
  
  return (
    <div>
    {navigationbar()}
    <div className='tbl'>
    <Table striped bordered="true" hover variant="dark">
    <thead>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th>24h Change</th>
                  <th>24h Volume</th>
                  <th>Market Cap</th>
                  <th>Chart Js</th>
                  
                </tr>
              </thead>
              <tbody>
              {renderPrices()}
              </tbody>
     </Table>
  </div>
    
      

      </div>
  );
}

export default App;