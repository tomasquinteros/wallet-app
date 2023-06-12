import { useRef } from "react"
import { CardIcon } from "../Icons"
export default function FormCard() {
    const inputCardNumber = useRef()
    return (
        <div className="m-4 p-4 flex flex-col gap-5">
            <h1 className="text-gray-800 text-2xl">Add new card</h1>

            <form>
                <ul className="flex flex-col gap-4 justify-start items-start text-gray-700 font-medium text-lg">
                    <li className="w-full">
                        <label>Card Number</label>
                        <div className="flex items-center bg-gray-200 rounded-md justify-between p-2">
                            <input className="w-3/4 bg-gray-200 rounded-md outline-none boder-2  border-gray-200" type="number" ref={inputCardNumber} placeholder="---- ---- ---- ----"/>
                            <span className="text-[#0A937E]"><CardIcon /></span>
                        </div>
                    </li>
                    <li className="flex justify-between gap-4 w-full">
                        <div>
                            <label htmlFor="">Expiry date</label>
                            <input className="bg-gray-200 p-2 rounded-md outline-none boder-2  border-gray-200" type="date" id="" />
                        </div>
                        <div>
                            <label htmlFor="">CVC/CVV</label>
                            <input className="bg-gray-200 p-2 rounded-md outline-none boder-2  border-gray-200 w-full we" type="number" maxLength={"3"} />
                        </div>
                    </li>
                    <li className="flex flex-col w-full">
                        <label htmlFor="">Cardholder name</label>
                        <input className="bg-gray-200 p-2 rounded-md outline-none boder-2  border-gray-200" type="text" placeholder="Enter cardholder's fullname" />
                    </li>
                    <li className="flex flex-col">
                        <label htmlFor="select-input">Select card</label>
                        <select name="select-input" id="select-input" className="bg-[#0a937e90] text-white rounded-md p-2 outline-none">
                            <option className="rounded-md" value="CREDITO VISA">Credito Visa</option>
                            <option value="CREDITO MASTERCARD">
                                Credito Mastercard
                            </option>
                            <option value="DEBITO VISA">Debito Visa</option>
                            <option value="DEBITO MASTERCARD">
                                Debito Mastercard
                            </option>
                        </select>

                    </li>
                </ul>
            </form>
        </div>
    )
}