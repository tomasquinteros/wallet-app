import useFetch from "../hooks/useFetch"
import { TredingComponent } from "./TredingComponent"
import fetch_dls from "./fetch_dls"

export default function TredingCrypto () {
    const { response } = useFetch("https://api.coingecko.com/api/v3/search/trending")
    const { coins }  = response
    const market = fetch_dls()
    return (
        <section className="p-4">
            <h3 className="mb-2 text-lg font-bold text-green-700">Trending Cryptos</h3>
            <div className="grid gird-cols-1 gap-2">
                {
                    coins ? 
                    coins.map((coin, index) => 
                        <TredingComponent key={index} coin={coin} market={market} />) : <div>Loading...</div>
                }
            </div>
        </section>
    )
}