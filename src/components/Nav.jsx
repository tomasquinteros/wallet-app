import { SearchIcon, WalletIcon, TrackIcon, CardIcon } from "./Icons"
import { NavLink } from "react-router-dom"
export default function Nav() {
    return (
        <header className="py-3 bg-white border-t-2 sticky bottom-0">
            <ul className="flex gap-0 justify-around items-center  text-xs text-slate-500">
                <li>
                    <NavLink className={({isActive}) => isActive ? "bg-[#0A937E] p-2 text-white rounded-xl flex" : "p-2"} to="">
                        <WalletIcon />
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) => isActive ? "bg-[#0A937E] p-2 text-white rounded-xl flex" : "p-2"} to="/search">
                        <SearchIcon />
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) => isActive ? "bg-[#0A937E] p-2 text-white rounded-xl flex" : "p-2"} to="/chart_treding">
                        <TrackIcon />
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) => isActive ? "bg-[#0A937E] p-2 text-white rounded-xl flex" : "p-2"} to="/card">
                        <CardIcon />
                    </NavLink>
                </li>
            </ul>
        </header>
    )
}