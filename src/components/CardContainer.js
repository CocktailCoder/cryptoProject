import {useEffect, useState} from "react";
import Card from "./Card"

function CardContainer({coins, handleClick, sortCoins, sortBy}) {
    const [ search, setSearch ] = useState('')
   

    const handleChange = (e) => {
        setSearch(e.target.value)
    }
    
    const searchFilterCrypto = coins.filter(coin => 
        coin.name.toLowerCase().includes(search.toLowerCase())
    ); 

    return (
    <div className="coin-container">
        <h1>Crypto Container</h1>
        <div>
            <form>
                <input onChange = {handleChange}
                type="text" placeholder="Search Crypto"/>
            </form>
            <div>
            <strong>Sort Name By:</strong>
            <label>
                <input
                type="radio"
                value="Ascending"
                name="sort"
                checked={sortBy === 'Ascending'}
                onChange={sortCoins}
                />
            </label>
            <label>
                <input
                type="radio"
                value="Descending"
                name="sort"
                checked={sortBy === 'Descending'}
                onChange={sortCoins}
                />
            </label>
            </div>
                {searchFilterCrypto.map(coin => {
                    return (
                    <Card
                    key = {coin.id}
                    name = {coin.name}
                    image = {coin.image}
                    symbol = {coin.symbol}
                    price = {coin.current_price}
                    handleClick={handleClick}
                    coins={coin}
                    />
                )
                })
                }
            
        </div>
    </div>
    )

   
}

export default CardContainer