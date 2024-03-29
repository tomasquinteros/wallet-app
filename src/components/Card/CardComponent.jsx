import MASTER from "../../assets/MASTERCARD-IMAGE.png"
import VISA from "../../assets/card_img/images/visa.png"


export default function CardComponent (card) {
    const {cardNumber ,cardName, cardType, cardMonth, cardYear} = card.card
    const cardTypeArray = cardType.split(" ")
    return (
        <div className={cardTypeArray[1] === "MASTERCARD" ? `flex flex-col justify-around bg-gradient-to-r from-[#0A937E] to-[#0a937e69] text-white rounded-xl min-h-[170px] px-4 py-4 shadow-md shadow-gray-700/50 gap-` : `flex flex-col justify-around bg-gradient-to-r from-[#021c18] to-[#0a937e69] text-white rounded-xl min-h-[170px] px-4 py-4 shadow-md shadow-gray-700/50 gap-` }>
            <div className="flex justify-between items-center">
                <h2 className="font-medium text-xs">{cardType.length < 1 ? 'TYPE CARD' : cardType}</h2>
                <img src={cardTypeArray[1] === "MASTERCARD" ? MASTER : VISA} alt="" className="w-12 h-[30px] object-contain"/>
            </div>
            <p className="flex gap-4 font-semibold text-xl">{cardNumber.length < 1 ? "0000 0000 0000 0000" : cardNumber} </p>
            <div className="flex justify-between items-center">
                <div>
                    <span className="text-[0.5rem]">CARD HOLDER</span>
                    <p className="text-lg font-medium">{cardName.length < 1 ? "Your name" : cardName.toUpperCase()}</p>
                </div> 
                <div>
                    <span className="text-[0.5rem]">VALID TILL</span>
                    <p className="text-lg font-medium">{cardMonth.length < 1 ? "00" : cardMonth }/{cardYear.length < 1 ? "00" : cardYear}</p>
                </div>
            </div>
        </div>
    )
}