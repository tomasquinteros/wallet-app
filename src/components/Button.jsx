import { FavoritesIcon } from "./Icons"

export default function ButtonsADDorRemoveFavorites ({crypto, itemInFav, addToFavorites, removeFromFavorites}) {
    return (
        <button className={itemInFav ? "text-yellow-500 p-2 bg-[#0A937E] rounded-xl" : "text-gray-700 p-2 rounded-xl"} onClick={() => itemInFav ? removeFromFavorites(crypto) : addToFavorites(crypto)} >
            <FavoritesIcon />
        </button>
    )
}