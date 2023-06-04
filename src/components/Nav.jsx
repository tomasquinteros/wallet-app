import { HomeIcon, WalletIcon, TrackIcon, CardIcon } from "./Icons"

export default function Nav () {
    return (
        <header className="py-3 bg-white border-t-2 sticky bottom-0">
            <ul className="flex gap-0 justify-around items-center  text-xs text-slate-500">
                <li className="flex flex-col items-center bg-[#0A937E] p-2 text-white rounded-2xl">
                    <HomeIcon/>
                    <span>
                        Home
                    </span>
                </li>
                <li className="flex flex-col items-center justify-center">
                    <div className="">
                        <WalletIcon/>
                    </div>
                    <span>
                    Wallet
                    </span>
                </li>
                <li className="flex flex-col items-center justify-center">
                    <TrackIcon/>
                    <span>
                    Track
                    </span>
                </li>
                <li className="flex flex-col items-center justify-center">
                    <CardIcon/>
                    <span>
                    Card
                    </span>
                </li>
            </ul>
        </header>
    )
}