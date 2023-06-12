import { Link } from "react-router-dom"
import { ArrowLeft } from "../Icons"

export default function SearchList({ crypto }) {
    const { id, thumb, symbol, name } = crypto
    return (
        <li>
            <Link to={`/search/${id}`} className="flex justify-between items-center  even:border-gray-200 even:border-y-[1px] py-2">
                <img src={thumb} alt={id} />
                <div className="w-2/4">
                    <p className="text-gray-700">{symbol}</p>
                    <span className="text-gray-500 text-xs flex-wrap">{name}</span>
                </div>
                <div className="text-[#0A937E]">
                    <ArrowLeft />
                </div>
            </Link>
        </li>
    )
}