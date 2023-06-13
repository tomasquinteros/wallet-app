import patternImage from "../../assets/card_img/images/pattern.png" 
import MASTER from "../../assets/MASTERCARD-IMAGE.png"
import VISA from "../../assets/card_img/images/visa.png"
export default function CardBack ({card}) {
    /* console.log(card) */
    const {cardName, cardType, cardCVV} = card
    const cardTypeArray = cardType.split(" ")
    return (
        <div className={cardTypeArray[1] === "MASTERCARD" ? `flex flex-col bg-gradient-to-r from-[#0A937E] to-[#0a937e69] text-white rounded-xl min-h-[170px] shadow-md shadow-gray-700/50`: `flex flex-col bg-gradient-to-r from-[#021c18] to-[#0a937e69] text-white rounded-xl min-h-[170px] shadow-md shadow-gray-700/50` } >
            <div className="w-full h-10 mt-4 bg-black"></div>
            <div className="p-4 flex flex-col gap-6 justify-between">
                <div className="flex items-center w-full">
                    <img src={patternImage} alt="" className="w-5/6 h-6" />
                    <p className="bg-white text-[#0a937e] h-6">{cardCVV}</p>
                </div>
                <div className="flex justify-between">
                    <h3>{cardName}</h3>
                    <img src={cardTypeArray[1] === "MASTERCARD" ? MASTER : VISA} alt="" className="w-12"/>
                </div>
            </div>
        </div>
    )
}