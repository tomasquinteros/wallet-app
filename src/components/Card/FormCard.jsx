import { CardIcon, ArrowPath, XIcon } from '../Icons'
import CardBack from './CardBack';
import CardComponent from './CardComponent'
import { useRef, useState } from 'react'
import {validKeyForPayment, validKeyForName} from '../../GlobalsVariables'
import { useFormCard } from '../../hooks/useFormCard';
import useCard from '../../hooks/useCard';

export default function FormCard() {
    const [viewCardBack, setViewCardBack] = useState(false)
    const {handleInputNCard, handleName, handleMonth, handleYear, handleCVV, handleTypeCard, errors, card, setCard, resetForm} = useFormCard()
    const {addCard} = useCard()
    const form = useRef()
    function validateCard() {
        if (Object.entries(errors).every(value => value[1] === true)) {
            addCard(card)
        }
        resetForm()
    }

    return (
        <div className='m-4 p-4 flex flex-col gap-5'>
            <div className='flex justify-between'>
                {/* <h1 className='text-gray-800 text-2xl'>Add new card</h1> */}
                <div className='bg-gray-300 p-2 text-[#0a937e] rounded-3xl ml-auto' onClick={() => setViewCardBack(!viewCardBack)}>
                    <ArrowPath />
                </div>
            </div>
            <div>
                <div className={viewCardBack ? 'hidden' : 'block'}>
                    <CardComponent card={card} />
                </div>
                <div className={viewCardBack ? 'block' : 'hidden '}>
                    <CardBack card={card} />
                </div>
            </div>
            <form className='flex flex-col gap-4' onSubmit={(e) => {e.preventDefault()}} ref={form} >
                <ul className='flex flex-col gap-4 justify-start items-start text-gray-700 font-medium text-lg'>
                    <li className='w-full'>
                        <label className='text-sm font-semibold' htmlFor='number-card'>Card Number</label>
                        <div className='flex items-center bg-gray-200 rounded-md justify-around p-2 px-4 w-full'>
                            <input 
                                className='bg-gray-200 rounded-md outline-none border-2  border-gray-200 focus:border-b-[#0a937e] focus:rounded-none mr-auto w-2/3 transition-all duration-100' 
                                maxLength={19} type='text'
                                placeholder='---- ---- ---- ----' 
                                onInput={(e) => handleInputNCard(e)} 
                                onChange={(e) => setCard({ ...card, cardNumber: e.target.value })}
                                onKeyDown={(e) => {
                                    if (!validKeyForPayment.includes(e.key)) {
                                        e.preventDefault()
                                    }
                                }}
                                value={card.cardNumber} inputMode='tel'
                                id='number-card'
                            />
                            <span className='text-[#0A937E]'><CardIcon /></span>
                        </div>
                    </li>
                    <li className='flex justify-between gap-4 w-full'>
                        <div>
                            <label className='font-semibold text-sm' htmlFor='expiry-data'>Expiry date</label>
                            <div className='flex w-full gap-2 items-center'>
                                <input className='bg-gray-200 p-2 rounded-md  focus:outline-b-2 focus:outline-[#0a937e]  w-full transition-all duration-100' type='text' maxLength='2' name='cardMonth' id='cardMonth' placeholder='MM' onChange={(e) => handleMonth(e)} value={card.cardMonth}
                                    onKeyDown={(e) => {
                                        if (!validKeyForPayment.includes(e.key)) {
                                            e.preventDefault()
                                        }
                                    }}
                                    inputMode='tel'
                                />
                                <span className='text-2xl text-[#0a937e]'>/</span>
                                <input className='bg-gray-200 p-2 rounded-md  focus:outline-b-2 focus:outline-[#0a937e] w-full transition-all duration-100' type='text' maxLength='2' name='cardYear' id='expiry-data' placeholder='YY' onChange={(e) => handleYear(e)} value={card.cardYear}
                                    onKeyDown={(e) => {
                                        if (!validKeyForPayment.includes(e.key)) {
                                            e.preventDefault()
                                        }
                                    }}
                                    inputMode='tel'
                                />
                            
                            </div>
                        </div>
                        <div>
                            <label className='font-semibold text-sm' htmlFor='card-cvv'>CVC/CVV</label>
                            <input className='bg-gray-200 p-2 rounded-md  focus:outline-b-2 focus:outline-[#0a937e]  w-full we transition-all duration-100' type='text' maxLength={3} onChange={(e) => handleCVV(e)} value={card.cardCVV}
                                onKeyDown={(e) => {
                                    if (!validKeyForPayment.includes(e.key)) {
                                        e.preventDefault()
                                    }
                                }}
                                inputMode='tel'
                                id='card-cvv'
                            />
                        </div>
                    </li>
                    <li className='flex flex-col w-full'>
                        <label className='font-semibold text-sm' htmlFor='card-name'>Cardholder name</label>
                        <input className='bg-gray-200 p-2 rounded-md  focus:outline-b-2 focus:outline-[#0a937e] transition-all duration-100' type='text' placeholder={'Enter cardholder´s fullname'} onChange={(e) => handleName(e)} 
                            onKeyDown={(e) => {
                                if (!validKeyForName.includes(e.key)) {
                                    e.preventDefault()
                                }
                            }
                            }
                            value={card.cardName}
                            id='card-name'
                        />
                    </li>
                    <li className='flex flex-col'>
                        <label className='font-semibold text-sm' htmlFor='select-input'>Select card</label>
                        <select name='select-input' id='select-input' className='bg-[#0a937e90] text-white rounded-md p-2 outline-none transition-all duration-100' onChange={(e) => handleTypeCard(e)}>
                            <option className='rounded-md' value='CREDIT VISA'>Credit Visa</option>
                            <option value='CREDIT MASTERCARD'>
                                Credit Mastercard
                            </option>
                            <option value='DEBIT VISA'>Debit Visa</option>
                            <option value='DEBIT MASTERCARD'>
                                Debit Mastercard
                            </option>
                        </select>
                    </li>
                </ul>
                <div className='flex flex-col gap-2'>
                    {errors.errorNumber ? '' : <span className='text-xs text-red-600 flex gap-1 items-center'><XIcon/> The card number must have 16 digits.</span>}

                    {errors.errorMonth ? '' : <span className='text-xs text-red-600 flex gap-1 items-center'><XIcon/> The expiration month must be less than 13</span>}

                    {errors.errorYear ? '' : <span className='text-xs text-red-600 flex gap-1 items-center'><XIcon/> The expiration year must be greater than 23</span>}

                    {errors.errorCVV ? '' : <span className='text-xs text-red-600 flex gap-1 items-center'><XIcon/> Your security code must be 3 digits</span>}

                    {errors.errorName ? '' : <span className='text-xs text-red-600 flex gap-1 items-center'><XIcon/> The name on the card must be greater than 6</span>}
                </div>
                <button type='submit' className='bg-[#0a937e] p-2 hover:bg-[#0a937e] text-white rounded-md' onClick={() => validateCard()} >ADD CARD</button>
            </form>
        </div>
    )
}
