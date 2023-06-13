import { CardIcon, ArrowPath } from '../Icons'
import CardBack from './CardBack';
import CardComponent from './CardComponent'
import { useState } from 'react'

const validKeyForPayment = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'Backspace',
];

export default function FormCard() {
    const [viewCardBack, setViewCardBack] = useState(false)
    const [card, setCard] = useState({
        cardNumber: '',
        cardName: '',
        cardMonth: '',
        cardYear: '',
        cardCVV: '',
        cardType: ''
    })
    const [errors, setError] = useState({
        errorNumber: true,
        errorName: true,
        errorMonth: true,
        errorYear: true,
        errorCVV: true,
        errorTypeCard: true
    })

    function formValidation(e) {
        e.preventDefault()
        console.log(e.target)
        
    }
    function handleInputNCard(e) {
        const inputValue = e.target.value.replace(/\s/g, '');
        if (inputValue.length < 16) {
            const errorNumber = false 
            setError({...errors, errorNumber: errorNumber})
        } else {
            const errorNumber = true
            setError({...errors, errorNumber: errorNumber})
        }
        if (inputValue !== '') {
            const result = inputValue.match(/.{1,4}/g).join(' ');
            e.target.value = result;
        }
    }
    function handleName(e) {
        if (e.target.value.lenght < 6) {
            const errorName = false
            setError({...errors, errorName: errorName})
        } else {
            setError({...errors, errorName: true})
        }
        setCard({ ...card, cardName: e.target.value })
    }
    function handleMonth(e) {
        if (e.target.value > 12) {
            const errorMonth = false
            setError({...errors, errorMonth: errorMonth})
        } else {
            setError({...errors, errorMonth: true})
        }
        setCard({ ...card, cardMonth: e.target.value })
    }
    function handleYear(e) {
        if (e.target.value <= 22) {
            const errorYear = false
            setError({...errors, errorYear: errorYear})
        }  else {
            setError({...errors, errorYear: true})
        }
        setCard({ ...card, cardYear: e.target.value })
    }
    function handleCVV(e) {
        if (e.target.value.lenght <= 2) {
            const errorCVV = false
            setError({...errors, errorCVV: errorCVV})
        } else {

            setError({...errors, errorCVV: true})
        }
        setCard({ ...card, cardCVV: e.target.value })
    }
    function handleTypeCard(e) {
        if (e.target.value.lenght === 0) {
            const errorTypeCard = false
            setError({...errors, errorTypeCard: errorTypeCard})
        } else {

            setError({...errors, errorTypeCard: true})
        }
        setCard({ ...card, cardType: e.target.value })
    }
    return (
        <div className='m-4 p-4 flex flex-col gap-5'>
            <div className='flex justify-between'>
                <h1 className='text-gray-800 text-2xl'>Add new card</h1>
                <div className='bg-gray-300 p-2 text-[#0a937e] rounded-3xl' onClick={() => setViewCardBack(!viewCardBack)}>
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
            <form className='flex flex-col gap-4' onSubmit={(e) => formValidation(e)}>
                <ul className='flex flex-col gap-4 justify-start items-start text-gray-700 font-medium text-lg'>
                    <li className='w-full'>
                        <label className='text-sm font-semibold'>Card Number</label>
                        <div className='flex items-center bg-gray-200 rounded-md justify-between p-2'>
                            <input 
                                className='w-3/4 bg-gray-200 rounded-md outline-none boder-2  border-gray-200' 
                                maxLength={19} type='text'
                                placeholder='---- ---- ---- ----' 
                                onInput={(e) => handleInputNCard(e)} 
                                onChange={(e) => setCard({ ...card, cardNumber: e.target.value })}
                                onKeyDown={(e) => {
                                    if (!validKeyForPayment.includes(e.key)) {
                                        e.preventDefault()
                                    }
                                }}
                            />
                            <span className='text-[#0A937E]'><CardIcon /></span>
                        </div>
                    </li>
                    <li className='flex justify-between gap-4 w-full'>
                        <div>
                            <label className='font-semibold text-sm' htmlFor=''>Expiry date</label>
                            <div className='flex w-full gap-2 items-center'>
                                <input className='bg-gray-200 p-2 rounded-md outline-none boder-2  border-gray-200 w-full' type='text' maxLength='2' name='cardMonth' id='cardMonth' placeholder='MM' onChange={(e) => handleMonth(e)} />
                                <span className='text-2xl text-[#0a937e]'>/</span>
                                <input className='bg-gray-200 p-2 rounded-md outline-none boder-2  border-gray-200 w-full' type='text' maxLength='2' name='cardYear' id='cardYear' placeholder='YY' onChange={(e) => handleYear(e)} />
                            </div>
                            {errors.errorMonth ? '' : <span>El mes seleccionado sobrepasa el limite</span>}
                        </div>
                        <div>
                            <label className='font-semibold text-sm' htmlFor=''>CVC/CVV</label>
                            <input className='bg-gray-200 p-2 rounded-md outline-none boder-2  border-gray-200 w-full we' type='text' maxLength={3} onChange={(e) => handleCVV(e)} />
                        </div>
                    </li>
                    <li className='flex flex-col w-full'>
                        <label className='font-semibold text-sm' htmlFor=''>Cardholder name</label>
                        <input className='bg-gray-200 p-2 rounded-md outline-none boder-2  border-gray-200' type='text' placeholder={'Enter cardholder´s fullname'} onChange={(e) => handleName(e)} />
                    </li>
                    <li className='flex flex-col'>
                        <label className='font-semibold text-sm' htmlFor='select-input'>Select card</label>
                        <select name='select-input' id='select-input' className='bg-[#0a937e90] text-white rounded-md p-2 outline-none' onChange={(e) => handleTypeCard(e)}>
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
                <button type='submit' className='bg-[#0a937e90] p-2 hover:bg-[#0a937e] text-white rounded-md'>ADD CARD</button>
            </form>
        </div>
    )
}
