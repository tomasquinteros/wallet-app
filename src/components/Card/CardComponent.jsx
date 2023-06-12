import {EyeSlashIcon} from "../Icons"
import MASTER from "../../assets/MASTERCARD-IMAGE.png"
import useCard from "../../hooks/useCard"
export default function CardComponent () {
    const {cards} = useCard
    console.log(cards)
    return (
        <div className={`flex flex-col justify-around bg-gradient-to-r from-[#0A937E] to-[#0a937e69] text-white h-40 rounded-xl px-4 py-2 shadow-md shadow-gray-700/50`}>
                <h2 className="font-medium text-md">Crypto Card</h2>
                <p className="flex gap-4 font-semibold text-xl">5535 **** **** 2365  <EyeSlashIcon/> </p>
                <div className="flex justify-between items-center">
                    <p>QUINTEROS TOMAS</p>
                    <img src={MASTER} alt="master" className="w-12"/>
                </div>
            </div>
    )
}