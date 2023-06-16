import { useContext } from "react";
import { CardContext } from "../context/cards";

export default function useCard () {
    const cards = useContext(CardContext)
    return cards
}