import { useState, useRef } from "react"
import { colors } from "../assets/styleVariables"
import { SearchIcon } from "../components/Icons"
import useFetch from "../hooks/useFetch"
import SearchList from "../components/Search/SearchList"


export default function Search() {
    const inputSearch = useRef()
    const [search, setSearch] = useState()
    const onSearch = (e) => {
        e.preventDefault()
        const s = inputSearch.current.value
        setSearch(s)
    }
    const { response } = useFetch(`https://api.coingecko.com/api/v3/search?query=${search}`)
    return (
        <div className="p-8 flex flex-col gap-5">
            <h2 className="text-center font-semibold text-l text-gray-500">Buscador de crypto</h2>
            <div >
                <form className="flex gap-2">
                    <input ref={inputSearch} type="text" placeholder="bitcoin, ethereum..." className={`border-2 border-[${colors.color_primary}] focus:border-gray-700 rounded-md p-2 w-full outline-none`} />
                    <button type="submit" className={`bg-gray-200 text-gray-500 p-2 rounded-xl hover:bg-[#0A937E] hover:text-white transition-all`} onClick={(e) => onSearch(e)}>
                        <SearchIcon />
                    </button>
                </form>
            </div>
            <ul className="flex flex-col gap-3 list-none">
                {
                    response.coins ?
                        response.coins.map((coin, index) =>
                            <SearchList crypto={coin} key={index} />
                        ) : console.log('')
                }
            </ul>
        </div>
    )
}