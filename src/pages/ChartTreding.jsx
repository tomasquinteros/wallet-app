import ChartTredingCrypto from "../components/ChartTrendingCrypto"
import { useFavorites } from "../hooks/useFavorites"
/* import useFetch from "../hooks/useFetch" */

export default function ChartTreding () {
    /* const { response } = useFetch(`https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=true&sparkline=false`) */
    const {favorites} = useFavorites() 
    return (
        <>
            {
                favorites.length > 0 ? <ul className="flex p-8 gap-4 flex-col">
                    {
                        favorites.map((value, key) => 
                            <ChartTredingCrypto crypto={value} key={key}/>
                        )
                    }
                </ul> : <div>Not found crypto favorites</div>
            }
        </>
    )
}