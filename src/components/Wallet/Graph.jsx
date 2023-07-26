
import { Link } from "react-router-dom"
export default function GraphCard({ coins }) {
    return (
        <Link to={coins && `search/${coins[0].item.id}` } className="bg-[#0A937E] rounded-2xl text-white p-4 w-5/6 m-auto flex flex-col gap-4">
            {
                coins ?
                    <>
                        <div>
                            {
                                coins.length > 0 ?
                                    <div className="flex items-center gap-2 text-white font-medium">
                                        <h1>
                                            TOP TREDING CRYPTO: 
                                        </h1>
                                        <img src={coins[0].item.thumb} alt={coins[0].item.id} />
                                        <span className="text-2xl">{coins[0].item.symbol}</span>
                                    </div>
                                    : <div><p>Loading...</p></div>

                            }
                        </div>
                    </>
                    :
                    <div>Loading...</div>
            }
        </Link>
    )
}