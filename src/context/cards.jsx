import { createContext, useState } from "react";
import { cardInitialState } from "../GlobalsVariables";
export const CardContext = createContext()


export const CardProvider = ({children}) => {
    const updateLocalStorage = (state) => {
        window.localStorage.setItem('cards', JSON.stringify(state))
    }
    const [cards, setCards] = useState(cardInitialState)
    const addCard = (card) => {
        const newCards = prevState => ([...prevState, {...card}])
        
        setCards(newCards)
    }
    const removeCard = (card) => {
        const newCards = cards.filter(value => value.name_card !== card.name_card)
        setCards(newCards)
    }
    updateLocalStorage(cards)
    return (
        <CardContext.Provider value={{cards, addCard, removeCard, updateLocalStorage}} >
            {children}
        </CardContext.Provider>
    )
}

