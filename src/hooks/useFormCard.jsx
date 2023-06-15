import { useState } from "react"
export function useFormCard() {
    const [card, setCard] = useState({
        cardNumber: '',
        cardName: '',
        cardMonth: '',
        cardYear: '',
        cardCVV: '',
        cardType: ''
    })
    const [errors, setError] = useState({
        errorNumber: undefined,
        errorName: undefined,
        errorMonth: undefined,
        errorYear: undefined,
        errorCVV: undefined,
        errorTypeCard: undefined
    })
    function resetForm () {
        const newCard = {
            cardNumber: '',
            cardName: '',
            cardMonth: '',
            cardYear: '',
            cardCVV: '',
            cardType: ''
        }
        setCard(newCard)
        const newError = {
            errorNumber: undefined,
            errorName: undefined,
            errorMonth: undefined,
            errorYear: undefined,
            errorCVV: undefined,
            errorTypeCard: undefined
        }
        setError(newError)
    }
    function handleInputNCard(e) {
        const inputValue = e.target.value.replace(/\s/g, '');
        if (inputValue.length < 16) {
            const errorNumber = false
            setError({ ...errors, errorNumber: errorNumber })
        } else {
            const errorNumber = true
            setError({ ...errors, errorNumber: errorNumber })
        }
        if (inputValue !== '') {
            const result = inputValue.match(/.{1,4}/g).join(' ');
            e.target.value = result;
        }
    }
    function handleName(e) {
        if (e.target.value.length < 6) {
            const errorName = false
            setError({ ...errors, errorName: errorName })
        } else {
            setError({ ...errors, errorName: true })
        }
        setCard({ ...card, cardName: e.target.value })
    }
    function handleMonth(e) {
        if (e.target.value > 12) {
            const errorMonth = false
            setError({ ...errors, errorMonth: errorMonth })
        } else {
            setError({ ...errors, errorMonth: true })
        }
        setCard({ ...card, cardMonth: e.target.value })
    }
    function handleYear(e) {
        if (e.target.value <= 23) {
            const errorYear = false
            setError({ ...errors, errorYear: errorYear })
        } else {
            setError({ ...errors, errorYear: true })
        }
        setCard({ ...card, cardYear: e.target.value })
    }
    function handleCVV(e) {
        if (e.target.value.length < 3) {
            const errorCVV = false
            setError({ ...errors, errorCVV: errorCVV })
        } else {
            setError({ ...errors, errorCVV: true })
        }
        setCard({ ...card, cardCVV: e.target.value })
    }
    function handleTypeCard(e) {
        if (e.target.value.length === 0) {
            const errorTypeCard = false
            setError({ ...errors, errorTypeCard: errorTypeCard })
        } else {

            setError({ ...errors, errorTypeCard: true })
        }
        setCard({ ...card, cardType: e.target.value })
    }

    return {handleInputNCard, handleName, handleMonth, handleYear, handleCVV, handleTypeCard, errors, card, setCard, resetForm}
}