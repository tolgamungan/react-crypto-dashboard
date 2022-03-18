import React from 'react';
import "./Content.scss";
import {ContentProps,Cryptocurrency} from './../tools/crypto.model';
import Coin from './../Coin/Coin'


const headers = ['#', 'NAME','SYMBOL', 'PRICE','24H VOLUME', 'MARKET CAP'];

const Content = ({coins, search}:ContentProps) => {
    
    const [sort, setSort] = React.useState<any>('');

    const filteredCoins = coins.filter(
        (coin:any) => 
        coin.name.toLowerCase().includes(search.toLowerCase()) |
        coin.symbol.toLowerCase().includes(search.toLowerCase())
        ).sort(GetSortOrder(sort)); // Ascending only

        // Comparer Function
        function GetSortOrder(prop:any) {    
            return function(a:any, b:any) {    
                if (a[prop] > b[prop]) {    
                    return 1;    
                } else if (a[prop] < b[prop]) {    
                    return -1;    
                }    
                return 1;    
            }    
        }
    return (
        <table>
            <thead>
                <tr className='bg-light'>
                {
                headers.map((title:string, rank:number) => ( // 
                <th id={(title).toLowerCase().replace(/ /g,"_")} key={rank}  className='border-bottom'>
                    <button className='btn btn-light nowrap' value={title} onClick={(e:any) => {setSort(e.target.value.toLowerCase().replace(/ /g,"_"))} }>    
                        {title} 
                        <svg width="12" height="12" fill="currentColor" className="bi bi-chevron-up" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/></svg>
                    </button>
                </th>
                    ))
                }
                </tr>
            </thead>

            <tbody>
                {filteredCoins.map((coin:Cryptocurrency, n:number) => 
                    <Coin coin={coin} key={n} rank={n + 1} />
                )}
            </tbody>

        </table>
    );
}
export default Content;