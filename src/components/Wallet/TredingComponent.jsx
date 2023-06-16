import { ArrowLeft } from "../Icons"
import { colors } from "../../assets/styleVariables"
import { Link } from "react-router-dom"
export function TredingComponent ({coin}) {
    console.log(coin)
    const { name, thumb, id, market_cap_rank } = coin.item
    return (
        <Link to={`/search/${id}`}>
            <article className="w-full rounded-xl grid grid-cols-2">
                <div className="flex gap-3 text-left items-center justify-start ">
                    <div className={`p-2 rounded-2xl text-${colors.color_secondaryL}`}>
                        <img className={`w-8`} src={thumb} alt={name} />
                    </div>
                    <div>
                        <p className={`text-${colors.color_secondary}`}>{name}</p>
                        <span className={`text-${colors.color_primary}`}>Rank {market_cap_rank}</span>

                    </div>
                </div>
                <div className={`flex flex-col text-right justify-center gap-2`}>
                    <span className="ml-auto text-sm text-green-300 flex items-center">More {<ArrowLeft/>}</span>
                </div>
            </article>
        </Link>
    )
}

