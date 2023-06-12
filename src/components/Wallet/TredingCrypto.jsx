/* import useFetch from "../hooks/useFetch" */
import { TredingComponent } from "./TredingComponent"
/* import fetch_dls from "./fetch_dls" */
import data from "../../mocks/treding_cryptos.json"

export default function TredingCrypto () {
    /* const { response } = useFetch("https://api.coingecko.com/api/v3/search/trending")
    const { coins }  = response
    const market = fetch_dls() */
    const { coins } = data

    return (
        <section className="w-4/5 m-auto">
            <h3 className="mb-6 text-lg font-bold text-gray-500">Trending Cryptos</h3>
            <div className="grid gird-cols-1 gap-4">
                {
                    coins ? coins.map((coin, index) => <TredingComponent key={index} coin={coin}/*  market={market} */ />) : <div>Loading...</div>
                }
            </div>
        </section>
    )
}