import {EyeSlashIcon} from "../Icons"
import MASTER from "../../assets/MASTERCARD-IMAGE.png"
import VISA from "../../assets/card_img/images/visa.png"


export default function CardComponent ({card}) {
    /*  console.log(card) */
    const {cardNumber ,cardName, cardType, cardMonth, cardYear} = card
    const cardTypeArray = cardType.split(" ")
    return (
        <div className={cardTypeArray[1] === "MASTERCARD" ? `flex flex-col justify-around bg-gradient-to-r from-[#0A937E] to-[#0a937e69] text-white rounded-xl min-h-[170px] px-4 py-4 shadow-md shadow-gray-700/50 gap-` : `flex flex-col justify-around bg-gradient-to-r from-[#021c18] to-[#0a937e69] text-white rounded-xl min-h-[170px] px-4 py-4 shadow-md shadow-gray-700/50 gap-` }>
            <div className="flex justify-between items-center">
                <h2 className="font-medium text-xs">{cardType}</h2>
                <img src={cardTypeArray[1] === "MASTERCARD" ? MASTER : VISA} alt="" className="w-12"/>
            </div>
            <p className="flex gap-4 font-semibold text-xl">{cardNumber}  <EyeSlashIcon/> </p>
            <div className="flex justify-between items-center">
                <div>
                    <span className="text-[0.5rem]">CARD HOLDER</span>
                    <p className="text-lg font-medium">{cardName}</p>
                </div>
                <div>
                    <span className="text-[0.5rem]">VALID TILL</span>
                    <p className="text-lg font-medium">{cardMonth}/{cardYear}</p>
                </div>
            </div>
        </div>
    )
}