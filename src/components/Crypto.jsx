import { Link, useParams } from "react-router-dom";
import HistoryChart from "./GraphHistoryChart";
import { FavoritesIcon, Exchange, BackIcon } from "./Icons";
import { useState } from "react";
export default function Crypto () {
    const {id} = useParams();
    const [value, setValue] = useState(1)
    

    function onExchange (e) {
        const { value } = e.target
        return setValue(value)
    }
    const [toggle, setToggle] = useState(false)
    const ocultarInfo = 'hidden'
    const verInfo = 'block text-gray-700 p-4 text-justify text-sm transition-all'
    function toggleInfo () {
        setToggle(!toggle)
    }

    return (
        <div className="p-8 flex flex-col gap-10">
            <div className="flex justify-between">
                <div className="flex gap-5 items-center">
                    <Link to="/search" className="hover:bg-gray-300 rounded-xl p-2">
                        <BackIcon/>
                    </Link>
                    <p className="font-semibold text-gray-100 p-2 bg-[#0A937E] rounded-lg">{id.toLocaleUpperCase()}</p>
                </div>
                <button className="hover:bg-[#0A937E] p-2 rounded-xl hover:text-yellow-300">
                    <FavoritesIcon />
                </button>
            </div>
            <div>
                <span className="text-xs text-gray-500 text-right block">last 7 day</span>
                <HistoryChart id={id}/>
            </div>
            <div>
                <p className="text-gray-700 font-medium">Exchange BTC to Dolar</p>
                <form className="flex flex-col gap-2 items-center">
                    <div>
                        <input className="border-slate-500 border-2 rounded-lg p-2 w-full focus:border-[#0A937E] outline-none" type="number" name="crypto" id="crypto" defaultValue={1} onChange={event => onExchange(event)}/>
                        <span className="text-[#0A937E] text-sm">1 BTC = 25670 US</span>
                    </div>
                    <Exchange/>
                    <input className="border-slate-500 border-2 rounded-lg p-2 w-full focus:border-[#0A937E] outline-none" type="number" name="dolares" id="dolares" defaultValue={25670} value={25670 * value}/>
                </form>
            </div>
            <div>
                <button className="bg-[#0A937E] p-2 rounded-md text-gray-200 w-full" onClick={() => toggleInfo()}>View cryptocurrency information {'^'}</button>
                <p className={toggle ? verInfo : ocultarInfo}>
                Ethereum is a global, open-source platform for decentralized applications. In other words, the vision is to create a world computer that anyone can build applications in a decentralized manner; while all states and data are distributed and publicly accessible. Ethereum supports smart contracts in which developers can write code in order to program digital value. Examples of decentralized apps (dapps) that are built on Ethereum includes tokens, non-fungible tokens, decentralized finance apps, lending protocol, decentralized exchanges, and much more.\r\n\r\nOn Ethereum, all transactions and smart contract executions require a small fee to be paid. This fee is called Gas. In technical terms, Gas refers to the unit of measure on the amount of computational effort required to execute an operation or a smart contract. The more complex the execution operation is, the more gas is required to fulfill that operation. Gas fees are paid entirely in Ether (ETH), which is the native coin of the blockchain. The price of gas can fluctuate from time to time depending on the network demand.
                </p>
            </div>
        </div>
    )
}