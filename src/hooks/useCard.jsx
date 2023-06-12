import { useContext } from "react";
import { CardContext } from "../context/cards";

export default function useCard () {
    console.log(useContext(CardContext))
    const cards = useContext(CardContext)
    return cards
}