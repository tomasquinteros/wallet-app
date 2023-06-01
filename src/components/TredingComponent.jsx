import { ArrowLeft } from "./Icons"

export const TredingComponent = (coin) => {
    const {name, price_btc, market_cap_rank, thumb} = coin.coin.item
    let i = 0
    console.log(i++)
    return (
        <article className="p-4 w-full h-32 rounded-xl bg-gradient-to-l from-slate-700 to-slate-900 shadow-slate-700 shadow-sm grid grid-cols-2">
                        <div className="flex gap-2 text-left items-center justify-start w-2/4 flex-wrap">
                            <img className="w-8" src={thumb} alt="" />
                            <p className="text-slate-300">{name}</p>
                        </div>
                        <div className="flex flex-col text-right justify-center gap-2">
                            <span className="text-slate-100">BTC {price_btc.toFixed(6)}</span>
                            <span className="text-green-500">Market Rank {market_cap_rank}</span>
                            <span className="ml-auto text-lg text-green-300">{<ArrowLeft/>}</span>
                        </div>
                    </article>
    )
}