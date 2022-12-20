import './App.css';
import { useEffect, useState } from 'react';
import { fetchHistory, fetchPrices, fetchHistory2 } from './client';
import { CryptoBox } from './components/CryptoBox';
import navigationbar from './components/navigationbar';
import Table from 'react-bootstrap/Table';

function App() {
  const [prices, setPrices] = useState();
  const [data, setData] = useState([]);
  const refreshData = async() => {
    const data = await fetchPrices();
    setPrices(data);
  }
  
  useEffect(() => {
    refreshData();
  }, []);

  useEffect(() => {
    if (prices) {
      calculateData().then(data => {
        setData(data);
      });
    }
  }, [prices]);

  const calculateData = async() => {
    const result =  [];
    if (!prices) {
      return [];
    }
    for (let key of Object.keys(prices)) {
        const arr = await fetchHistory(key);
        const item = {
          price: prices[key].usd,
          name: key,
          change24h: prices[key].usd_24h_change,
          volume24h: prices[key].usd_24h_vol,
          marketcap: prices[key].usd_market_cap,
          charter: arr,
        }
        result.push(item);
     }
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
              {
                data.map(item => (
                  <CryptoBox key={item.name} name={item.name} price={item.price} change24h={item.change24h} volume24h={item.volume24h} marketcap={item.marketcap} charter={item.charter} />
                ))
              }
              </tbody>
     </Table>
  </div>
   </div>
            
  );
}

export default App;