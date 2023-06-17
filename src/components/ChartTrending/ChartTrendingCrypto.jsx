import { useState } from "react"
import HistoryChart from "../GraphHistoryChart"
import { ChevronDownIcon, ChevronUpIcon} from "../Icons"
import Market from "../Crypto/Market";
import FetchPricesID from "../fetch_dls";
export default function ChartTredingCrypto({ crypto }) {
    console.log(crypto)
    const [togle, setTogle] = useState(false)
    const market = FetchPricesID(crypto.id)
    console.log(market)
    return (
        <li className="shadow-lg p-4 bg-gray-100 rounded-2xl flex flex-col gap-4 transition-all w-full">
            <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                    <img src={crypto.image.small} alt={crypto.name} />
                    <h2>{crypto.name}</h2>
                </div>
                <div className="flex items-center gap-2">
                    <p className="text-[#0A937E] font-bold">Rank: {crypto.market_cap_rank}</p>
                    <button onClick={() => setTogle(!togle)}>{togle ? <ChevronUpIcon /> : <ChevronDownIcon />}</button>
                </div>
            </div>

            <div className={togle ? "block  transition-all" : "hidden transition-all"}>
                <HistoryChart id={crypto.id} />
                <div className="flex justify-between w-full flex-wrap">
                    {
                        market ? <Market market={market} /> : <></>
                    }
                </div>
            </div>
        </li>
    )
}