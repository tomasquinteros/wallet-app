import HistoryChart from "../components/GraphHistoryChart"
import { TrackIcon, TrendingDown } from "../components/Icons"
import { useFavorites } from "../hooks/useFavorites"
/* import useFetch from "../hooks/useFetch" */

export default function ChartTreding () {
    /* const { response } = useFetch(`https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=true&sparkline=false`) */
    const {favorites} = useFavorites() 
    const changePrice24h = -540.778590746
    const changePrice24hPorcentage = -2.04215
    return (
        <>
            {
                favorites.length > 0 ? <ul className="flex p-8 gap-4 flex-col">
                    {
                        favorites.map((value, index) => 
                            <li key={index} className="shadow-lg p-4 bg-gray-100 rounded-2xl flex flex-col gap-4">
                                <div className="flex justify-between">
                                    <div className="flex gap-2">
                                        <img src={value.thumb} alt={value.name} />
                                        <h2>{value.name}</h2>
                                    </div>
                                    <p className="text-[#0A937E] font-bold">Rank: {value.market_cap_rank}</p>
                                </div>
                                <HistoryChart id={value.id}/>
                                <div className="flex justify-between">
                                    {
                                        changePrice24h < 0 ? <p className="flex items-center text-red-600"><TrendingDown/> ${changePrice24h.toLocaleString()} </p> : <p className="flex items-center text-[#0A937E]"><TrackIcon/> ${changePrice24h.toLocaleString()}</p>
                                    }
                                    {
                                       changePrice24hPorcentage < 0 ? <p className="flex items-center text-red-600"><TrendingDown/> {changePrice24hPorcentage.toLocaleString()}% </p> : <p className="flex items-center text-[#0A937E]"><TrackIcon/> ${changePrice24hPorcentage.toLocaleString()}%</p> 
                                    }
                                </div>
                            </li>
                        )
                    }
                </ul> : <div>Not found crypto favorites</div>
            }
        </>
    )
}