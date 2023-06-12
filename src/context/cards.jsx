import { createContext, useState } from "react";

export const CardContext = createContext()

export const CardProvider = ({children}) => {
    const [cards, setCards] = useState([])
    const addCard = (card) => {
        const newCards = prevState => ([...prevState, {...card}])
        setCards(newCards)
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

