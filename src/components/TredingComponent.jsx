import { ArrowLeft } from "./Icons"
import { colors } from "../assets/styleVariables"
export function TredingComponent () {
    /* const { name, market_cap_rank, price_btc, thumb, id } = coin.item
    const dolaresValue = market.filter(value => value.id === id)
    console.log(dolaresValue) */
    /* if (dolaresValue) { */
        return (
            <article className="w-full rounded-xl grid grid-cols-2">
            <div className="flex gap-3 text-left items-center justify-start ">
                <div className={`p-2 rounded-2xl text-${colors.color_secondaryL}`}>
                <img className={`w-8`} src="https://assets.coingecko.com/coins/images/29850/thumb/pepe-token.jpeg?1682922725" alt="" />

                </div>
                <div>
                    <p className={`text-${colors.color_secondary}`}>Bitcoin</p>
                    <span className={`text-${colors.color_primary}`}>Rank 30</span>

                </div>
            </div>
            <div className={`flex flex-col text-right justify-center gap-2`}>
                <span className={`text-${colors.color_secondary}`}>BTC 2</span>
                <span className="ml-auto text-sm text-green-300 flex items-center">More {<ArrowLeft/>}</span>
            </div>
        </article>
    )
    /* } */
}
{/* <article className="p-4 w-full h-32 rounded-xl bg-gradient-to-l from-slate-700 to-slate-900 shadow-slate-700 shadow-sm grid grid-cols-2">
                <div className="flex gap-2 text-left items-center justify-start w-2/4 flex-wrap">
                    <img className="w-8" src={thumb} alt="" />
                    <p className="text-slate-300">{name}</p>
                </div>
                <div className="flex flex-col text-right justify-center gap-2">
                    <span className="text-slate-100">{ dolaresValue ? `U$ ${dolaresValue[0].current_price.toLocaleString()}` : `BTC ${price_btc}` }</span>
                    <span className="text-green-500">Market Rank {market_cap_rank}</span>
                    <span className="ml-auto text-lg text-green-300">{<ArrowLeft/>}</span>
                </div>
            </article> */}