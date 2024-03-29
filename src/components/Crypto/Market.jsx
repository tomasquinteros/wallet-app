import { TrendingDown, TrackIcon } from "../Icons"

export default function Market({ market }) {
    return (
        <div>
            {
                market.length > 0 &&
                    <div className="flex items-start flex-col">
                        {
                            market[0].price_change_24h < 0 ? <p className="flex items-center text-red-600"><TrendingDown /> ${market[0].price_change_24h} </p> : <p className="flex items-center text-[#0A937E]"><TrackIcon /> ${market[0].price_change_24h}</p>
                        }
                        {
                            market[0].price_change_percentage_24h < 0 
                                ? <p className="flex items-center text-red-600"><TrendingDown /> {market[0].price_change_percentage_24h}%</p> 
                                : <p className="flex items-center text-[#0A937E]"><TrackIcon />{market[0].price_change_percentage_24h}%</p>
                        }
                    </div>
            }
        </div>
    )
}