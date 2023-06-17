
import { ArrowUp } from "../Icons"
export default function GraphCard ({coins}) {
    return (
        <section className="bg-[#0A937E] rounded-2xl text-white p-4 w-5/6 m-auto flex flex-col gap-4">
            {
                coins ? 
                    <>
                        <div>
                            {
                                coins.length > 0 ?
                                    <div className="flex gap-2 text-xl text-gray-300 font-medium">
                                        <img src={coins[0].item.thumb} alt={coins[0].item.id} />
                                        <span>{coins[0].item.symbol}</span>
                                    </div>
                                    : <div><p>Loading...</p></div>

                            }
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex flex-col gap-1">
                                <p className="font-bold text-3xl">$16,389.92</p>
                                <div className="font-extralight flex gap-2">
                                    <span className="flex"><ArrowUp/> $136.92</span>
                                    <span>- 67%</span>
                                </div>
                            </div>
                        </div>
                    </>
                    : 
                    <div>Loading...</div>
            }
        </section>
    )
}