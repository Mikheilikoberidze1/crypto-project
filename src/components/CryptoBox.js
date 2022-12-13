import Table from 'react-bootstrap/Table';
import Cryptochart from './cryptochart';
export function CryptoBox({name, price,change24h,volume24h,marketcap,charter}) {
    //console.log(charter)
    function financial(x) {
        return Number.parseFloat(x).toFixed(2);
      }
      function Capitalise(x){
       return x.charAt(0).toUpperCase()+ x.slice(1)
      }
      const numberFormatter = Intl.NumberFormat('en-US');
      let color = '';
      
      if (change24h>=0)color = 'green';
      else color = 'red';
    return (<tr>
                <td><div><img className='coinimg' src={require(`../images/${name}.png`)} alt="Coin img"></img>{Capitalise(name)}</div>
                 </td>
                 <td>
                 <div>${numberFormatter.format(price.toFixed(2))}</div>
                </td>
                <td>
                 <div style={{color : color}}>{change24h.toFixed(2)}%</div>
                 </td>
                 <td>
                 <div>${numberFormatter.format(volume24h.toFixed(2))}</div>
                 </td>
                 <td>
                 <div>${numberFormatter.format(marketcap.toFixed(2))}</div>
                 </td>
                 <td>
                 {Cryptochart(charter,color)}
                 </td>
                 </tr>)
    
}
/*

                 <div style={{width: '150px',height : '70px', margin:'0px'}}></div>
                </td> */