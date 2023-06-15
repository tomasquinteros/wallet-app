import { createContext, useState } from "react";

export const CardContext = createContext()

const updateLocalStorage = (state) => {
    console.log(state)
    window.localStorage.setItem('cards', JSON.stringify(state))
}

export const CardProvider = ({children}) => {
    const cartInitialState = JSON.parse(window.localStorage.getItem('cards')) || []
    const [cards, setCards] = useState(cartInitialState)
    const addCard = (card) => {
        const newCards = prevState => ([...prevState, {...card}])
        setCards(newCards)
        updateLocalStorage(cards)
    }
    const removeCard = (card) => {
        const newCards = cards.filter(value => value.name_card !== card.name_card)
        setCards(newCards)
    }
    return (
        <CardContext.Provider value={{cards, addCard, removeCard}} >
            {children}
        </CardContext.Provider>
    )
}

