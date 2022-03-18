import React from 'react'
import "./Coin.scss";

const Coin = ({ coin, rank }:any) => {
    
    return (
        <tr className='border-bottom'> 
            <td>{coin.market_cap_rank}</td>
            <td className='extra-width'>
                <img src={coin.image} alt={coin.name} style={{width: '6%',minWidth:22}} className='img-fluid me-1 crypto-img' />
                <span className='fonts-body'>{coin.name}</span>
            </td> 
            <td><span className='ms-3 text-muted text-uppercase'>{coin.symbol}</span></td>
            <td>{Intl.NumberFormat('en', {style: 'currency',currency: 'USD',currencySign: 'accounting'}).format(coin.current_price)}</td>
            <td id='center-text' className={coin.price_change_percentage_24h > 0 ? 'text-success' : 'text-danger'}>%{(coin.price_change_percentage_24h).toString().substring(0, 4) }</td>
            <td id='center-text' >${Intl.NumberFormat('en-GB', {notation: "compact",compactDisplay: "short"}).format(coin.market_cap) }</td>
        <br/><br/></tr>
    )
} 
export default Coin
