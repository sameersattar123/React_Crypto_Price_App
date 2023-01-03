import React, { useEffect, useState } from 'react'
import axios from "axios";
import Coin from './Components/Coin';
import "./App.css"
import Navbar from './Components/Navbar';
const App = () => {


const [PriceOfCoin , setPriceOfCoin ] = useState([])
const [SearchWord , setSearchWord ] = useState("")

useEffect(()=>{
 axios.get("https://api.coinstats.app/public/v1/coins?skip=0").then((response)=>{
     setPriceOfCoin(response.data.coins) 
     console.log(response.data.coins) 
 })
}, [])


const FilterCryptoPrice = PriceOfCoin.filter((coin)=>{
  return coin.name.toLowerCase().includes(SearchWord.toLowerCase())
})


  return (
    <>

    <Navbar/>
    <div className="container">
      <div class="m-3">
        <input
          type="email"
          class="form-control text-center bg-light font-weight-bold"
          id="exampleFormControlInput1"
          placeholder="Bitcoin... "
          style={{height : "3rem"}}
          onChange={(event)=>{setSearchWord(event.target.value)}}
        />
      </div>
    </div>
    <div className='container '>
    <div className="row m-2">
    {
      FilterCryptoPrice.map((coin)=>{
        return(
      <Coin name={coin.name} img={coin.icon} price={coin.price} symbol={coin.symbol} url={coin.websiteUrl}  />
        )
      })

    }
    </div>
    </div>
    </>
  )
}

export default App
