import MASTER from "../assets/MASTERCARD-IMAGE.png"
import { EyeSlashIcon, PlusIcon } from "../components/Icons"

export default function Card () {
    let lastMov = ["", "", ""]
    return (
        <div className="p-8 flex flex-col gap-4">
            <div className={`flex flex-col justify-around bg-gradient-to-r from-[#0A937E] to-[#0a937e69] text-white h-40 rounded-xl px-4 py-2 shadow-md shadow-gray-700/50`}>
                <h2 className="font-medium text-md">Crypto Card</h2>
                <p className="flex gap-4 font-semibold text-xl">5535 **** **** 2365  <EyeSlashIcon/> </p>
                <div className="flex justify-between items-center">
                    <p>QUINTEROS TOMAS</p>
                    <img src={MASTER} alt="master" className="w-12"/>
                </div>
            </div>
            <button className="flex gap-2 items-center justify-center bg-gray-300 rounded-md p-3 text-[#0a937e90] shadow-md">
                Add new Card <PlusIcon />
            </button>
            <div className="flex flex-col gap-6 mt-8">
                <h2 className="text-gray-700 text-xl">Last Movemets</h2>
                <div className="flex flex-col gap-5">

                {
                    lastMov.map((v, index) => 
                    <div key={index} className="bg-gray-200/80 h-14 rounded-md">
                        {v}
                    </div>
                   ) 
                }
                </div>
            </div>
        </div>
    )
}

