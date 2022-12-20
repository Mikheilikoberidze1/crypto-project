import Table from 'react-bootstrap/Table';
import Cryptochart from './cryptochart';
import Modalbox from './Modalbox';
import { useEffect, useState } from 'react';


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
      
      if (change24h>=0)color = 'rgba(0, 255, 0';
      else color = 'rgba(255, 0, 0';
    return (<tr>
                <td><div><img className='coinimg' src={require(`../images/${name}.png`)} alt={`${name} img`}></img>{Capitalise(name)}</div>
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
                 <td style={{'maxWidth':'150px','marginRight':'0px'}}>
                  <div className='chartdiv'>
                 {Cryptochart(charter,color)} {Modalbox(charter,name,color)}
                 </div>
                 </td>
                 </tr>)
    
}
/*

                 <div style={{width: '150px',height : '70px', margin:'0px'}}></div>
                </td> */