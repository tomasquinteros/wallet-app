import { useState, useRef } from "react"
import { colors } from "../assets/styleVariables"
import { SearchIcon } from "../components/Icons"
import { ArrowLeft } from "../components/Icons"
import useFetch from "../hooks/useFetch"
import { Link } from "react-router-dom"

export default function Search () {
    const inputSearch = useRef()
    const [search, setSearch] = useState()
    const onSearch = (e) => {
        e.preventDefault()
        const s = inputSearch.current.value
        setSearch(s)
    }
    const {response} = useFetch(`https://api.coingecko.com/api/v3/search?query=${search}`)
    return (
        <div className="p-8 flex flex-col gap-5">
            <h2 className="text-center font-semibold text-l text-gray-500">Buscador de crypto</h2>
            <div >
                <form className="flex gap-2">
                    <input ref={inputSearch} type="text" placeholder="bitcoin, ethereum..." className={`border-2 border-[${colors.color_primary}] focus:border-gray-700 rounded-md p-2 w-full outline-none`}/>
                    <button type="submit" className={`bg-gray-200 text-gray-500 p-2 rounded-xl hover:bg-[#0A937E] hover:text-white transition-all`} onClick={(e) => onSearch(e)}>
                        <SearchIcon/>
                    </button>
                </form>
            </div>
            <ul className="flex flex-col gap-3 list-none">
                {
                    response.coins ?
                        response.coins.map((coin, index) => 
                        <li key={index}>
                            <Link to={`/search/${coin.id}`} className="flex justify-between items-center  even:border-gray-200 even:border-y-[1px] py-2">
                            <img src={coin.thumb} alt={coin.id}/>
                            <div className="w-2/4">
                                <p className="text-gray-700">{coin.symbol}</p>
                                <span className="text-gray-500 text-xs flex-wrap">{coin.name}</span>
                            </div>
                            <div className="text-[#0A937E]">
                                <ArrowLeft/>
                            </div>
                            </Link>
                        </li>) : console.log('')
                }
            </ul>
        </div>
    )
}