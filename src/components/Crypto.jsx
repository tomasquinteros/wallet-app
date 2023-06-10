import { Link, useParams } from "react-router-dom";
import HistoryChart from "./GraphHistoryChart";
import { Exchange, BackIcon } from "./Icons";
import { useState } from "react";
import { useFavorites } from "../hooks/useFavorites"
import { checkProductInFavorites } from "../functions/favorites";
import ButtonsADDorRemoveFavorites from "./Button";
import data from "../mocks/treding_cryptos.json"
import CryptoInfo  from "./CryptoInfo";


export default function Crypto () {
    const {id} = useParams();
    const { addToFavorites, removeFromFavorites, favorites } = useFavorites()
    const itemInFav = checkProductInFavorites(id, favorites)
    let crypto

    data.coins.forEach(value => {
        if (value.item.id === id) {
            crypto = value.item
        }
    })

    // Search
    const [value, setValue] = useState(1)    
    function onExchange (e) {
        const { value } = e.target
        return setValue(value)
    }
    
    return (
        <div className="p-8 flex flex-col gap-10">
            <div className="flex justify-between">
                <div className="flex gap-5 items-center">
                    <Link to="/search" className="hover:bg-gray-300 rounded-xl p-2">
                        <BackIcon/>
                    </Link>
                    <p className="font-semibold text-gray-100 p-2 bg-[#0A937E] rounded-lg">{id.toLocaleUpperCase()}</p>
                </div>
                <div>
                    <ButtonsADDorRemoveFavorites 
                        crypto={crypto}
                        addToFavorites={addToFavorites} 
                        removeFromFavorites={removeFromFavorites} 
                        itemInFav={itemInFav}
                    />
                </div>
            </div>
            <div>
                <span className="text-xs text-gray-500 text-right block">last 7 day</span>
                <HistoryChart id={id}/>
            </div>
            <div>
                <p className="text-gray-700 font-medium">Exchange BTC to Dolar</p>
                <form className="flex flex-col gap-2 items-center">
                    <div>
                        <input className="border-slate-500 border-2 rounded-lg p-2 w-full focus:border-[#0A937E] outline-none" type="number" name="crypto" id="crypto" defaultValue={1} onChange={event => onExchange(event)}/>
                        <span className="text-[#0A937E] text-sm">1 BTC = 25670 US</span>
                    </div>
                    <Exchange/>
                    <input className="border-slate-500 border-2 rounded-lg p-2 w-full focus:border-[#0A937E] outline-none" type="number" name="dolares" id="dolares" value={25670 * value} readOnly={true}/>
                </form>
            </div>
            <CryptoInfo/>
        </div>
    )
}