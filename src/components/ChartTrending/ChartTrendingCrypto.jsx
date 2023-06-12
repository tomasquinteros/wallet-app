import { useState } from "react"
import HistoryChart from "../GraphHistoryChart"
import { ChevronDownIcon, ChevronUpIcon, TrackIcon, TrendingDown } from "../Icons"

export default function ChartTredingCrypto({ crypto }) {
    const [togle, setTogle] = useState(false)
    console.log(togle)
    const changePrice24h = -540.778590746
    const changePrice24hPorcentage = -2.04215
    return (
        <li className="shadow-lg p-4 bg-gray-100 rounded-2xl flex flex-col gap-4 transition-all">
            <div className="flex justify-between">
                <div className="flex gap-2">
                    <img src={crypto.thumb} alt={crypto.name} />
                    <h2>{crypto.name}</h2>
                </div>
                <div className="flex items-center gap-2">
                    <p className="text-[#0A937E] font-bold">Rank: {crypto.market_cap_rank}</p>
                    <button onClick={() => setTogle(!togle)}>{togle ? <ChevronUpIcon /> : <ChevronDownIcon />}</button>
                </div>
            </div>

            <div className={togle ? "block  transition-all" : "hidden transition-all"}>
                <HistoryChart id={crypto.id} />
                <div className="flex justify-between">
                    {
                        changePrice24h < 0 ? <p className="flex items-center text-red-600"><TrendingDown /> ${changePrice24h.toLocaleString()} </p> : <p className="flex items-center text-[#0A937E]"><TrackIcon /> ${changePrice24h.toLocaleString()}</p>
                    }
                    {
                        changePrice24hPorcentage < 0 ? <p className="flex items-center text-red-600"><TrendingDown /> {changePrice24hPorcentage.toLocaleString()}% </p> : <p className="flex items-center text-[#0A937E]"><TrackIcon /> ${changePrice24hPorcentage.toLocaleString()}%</p>
                    }
                </div>
            </div>
        </li>
    )
}