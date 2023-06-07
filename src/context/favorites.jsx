import { createContext, useState } from "react";

export const FavoritesContext = createContext()

export const FavoritesProvider = ({children}) => {
    const [favorites, setFavorites] = useState([])
    const addToFavorites = (crypto) => {
        const cryptoInFav = favorites.findIndex(item => item.id === crypto.id)
        if (cryptoInFav) {
            const newFavorites = prevState => ([...prevState, {...cryptoInFav}])
            setFavorites(newFavorites)
        }
    }
    const removeFromFavorites = (crypto) => {
        const newFavorites = favorites.filter(item => item.id !== crypto.id)
        console.log(newFavorites)
        return setFavorites(newFavorites)
    }
    return (
        <FavoritesContext.Provider value={{favorites, addToFavorites, removeFromFavorites}} >
            {children}
        </FavoritesContext.Provider>
    )
}
