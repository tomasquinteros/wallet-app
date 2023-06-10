import { createContext, useState } from "react";

export const FavoritesContext = createContext()

export const FavoritesProvider = ({children}) => {
    const [favorites, setFavorites] = useState([])
    const addToFavorites = (crypto) => {
            const newFavorites = prevState => ([...prevState, {...crypto}])
            setFavorites(newFavorites)
    }
    const removeFromFavorites = (crypto) => {
        const newFavorites = favorites.filter(item => item.id !== crypto.id)
        return setFavorites(newFavorites)
    }
    return (
        <FavoritesContext.Provider value={{favorites, addToFavorites, removeFromFavorites}} >
            {children}
        </FavoritesContext.Provider>
    )
}
