import { Link, useParams } from "react-router-dom";
import HistoryChart from "../GraphHistoryChart";
import { Exchange, BackIcon} from "../Icons";
import { useEffect, useState } from "react";
import { useFavorites } from "../../hooks/useFavorites"
import { checkProductInFavorites } from "../../functions/favorites";
import ButtonsADDorRemoveFavorites from "./ButtonFavorites";
import FetchPricesID from "../fetch_dls";
import CryptoInfo from "./CryptoInfo";
import useFetch from "../../hooks/useFetch";
import Market from "./Market";


export default function Crypto() {
    const { id } = useParams();
    const { addToFavorites, removeFromFavorites, favorites } = useFavorites()
    const itemInFav = checkProductInFavorites(id, favorites)
    const { response } = useFetch(`https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&market_data=false&community_data=false&sparkline=false`)
    // Search
    const market = FetchPricesID(id)
    console.log(market)
    const [value, setValue] = useState(1)
    function onExchange(e) {
        const { value } = e.target
        return setValue(value)
    }
    useEffect(() => {
        
    }, [response])
    return (
        response  ?
            <div className="p-8 flex flex-col gap-6">
                <div className="flex justify-between">
                    <div className="flex gap-5 items-center mb-4">
                        <Link to="/search" className="hover:bg-gray-300 rounded-xl p-2">
                            <BackIcon />
                        </Link>
                        <p className="font-semibold text-gray-100 p-2 bg-[#0A937E] rounded-lg">{id.toLocaleUpperCase()}</p>
                    </div>
                    <div>
                        <ButtonsADDorRemoveFavorites
                            crypto={response}
                            addToFavorites={addToFavorites}
                            removeFromFavorites={removeFromFavorites}
                            itemInFav={itemInFav}
                        />
                    </div>
                </div>
                <div>
                    <span className="text-xs text-gray-500 text-right block">last 7 day</span>
                    <HistoryChart id={id} />
                </div>
                <div className="flex justify-between">
                    {
                        market ? <Market market={market} /> : <></>
                    }
                </div>
                <div>
                    <p className="text-gray-700 font-medium">Exchange {response.symbol} to dolar</p>
                    <form className="flex flex-col gap-2 items-center">
                        <div className="w-full">
                            <input className="border-slate-500 border-2 rounded-lg p-2 w-full focus:border-[#0A937E] outline-none" type="number" name="crypto" id="crypto" defaultValue={1} onChange={event => onExchange(event)} />
                            <span className="text-[#0A937E] text-sm">1 {response.symbol} = {market.length > 0 ? market[0].current_price : 'not found'} usd</span>
                        </div>
                        <Exchange />
                        <input className="border-slate-500 border-2 rounded-lg p-2 w-full focus:border-[#0A937E] outline-none" type="number" name="dolares" id="dolares" value={market.length > 0 ? market[0].current_price * value : 0 * value} readOnly={true} />
                    </form>
                </div>
                <CryptoInfo>{crypto.info}</CryptoInfo>
            </div> : <div>Loading...</div>
    )
}
