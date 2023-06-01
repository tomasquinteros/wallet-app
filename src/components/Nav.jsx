import { HomeIcon, WalletIcon, TrackIcon, CardIcon } from "./Icons"

export default function Nav () {
    return (
        <header className="p-2 bg-slate-900 sticky bottom-0">
            <ul className="flex gap-0 justify-around items-center  text-xs text-slate-500">
                <li className="flex flex-col items-center text-green-400">
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