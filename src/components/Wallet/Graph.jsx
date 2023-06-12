/* import image from "../../assets/Screenshot from 2023-06-03 00-25-03.png" */
/* import useFetch from "../../hooks/useFetch" */
import { ArrowUp } from "../Icons"
import data from "../../mocks/treding_cryptos.json"
export default function GraphCard () {
    /* const { response } = useFetch("https://api.coingecko.com/api/v3/search/trending")
    const { coins } = response
    console.log(coins)
    const {symbol, thumb, id} = coins[0].item */
    const { coins } = data
    console.log(coins[0].item)
    const {symbol, thumb, id} = coins[0].item
    return (
        <section className="bg-[#0A937E] rounded-2xl text-white p-4 w-5/6 m-auto flex flex-col gap-4">
            <div>
                <div className="flex gap-2 text-xl text-gray-300 font-medium">
                    <img src={thumb} alt={id} />
                    <span>{symbol}</span>
                </div>
            </div>
            <div className="flex justify-between items-center">
                <div className="flex flex-col gap-1">
                    <p className="font-bold text-3xl">$16,389.92</p>
                    <div className="font-extralight flex gap-2">
                        <span className="flex"><ArrowUp/> $136.92</span>
                        <span>- 67%</span>
                    </div>
                </div>
                {/* <div className="bg-gray-300">   
                <HistoryChart id={id}/>
                </div> */}
            </div>
        </section>
    )
}