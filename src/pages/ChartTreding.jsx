import ChartTredingCrypto from "../components/ChartTrending/ChartTrendingCrypto"
import { useFavorites } from "../hooks/useFavorites"
import { Link } from "react-router-dom"
import { LinkIcon } from "../components/Icons"


export default function ChartTreding() {

    const { favorites } = useFavorites()
    return (
        <>
            {
                favorites.length > 0 ? <ul className="flex p-8 gap-4 flex-col">
                    {
                        favorites.map((value, key) =>
                            <ChartTredingCrypto crypto={value} key={key} />
                        )
                    }
                </ul> 
                    : <div className="py-16 px-8 flex flex-col gap-4 justify-center items-start">
                        <h2 className="text-2xl ">We have not found any crypto in your favorites</h2>
                        <p className="text-gray-700">To have favorites you must look in the search section for the crypto you want to have in favorites and click on the button in the shape of a star</p>
                        <button className="px-4 py-2 bg-[#0A937E] text-gray-100 rounded-lg hover:bg-gray-500 hover:text-[#0A937E]">
                            <Link to={"/search"} className="flex gap-2 items-center justify-center">
                                Redirect to Search <LinkIcon/>
                            </Link>
                        </button>
                    </div>
            }
        </>
    )
}