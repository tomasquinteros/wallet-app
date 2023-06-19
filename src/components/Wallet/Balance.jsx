import { TrackIcon } from "../Icons"
export default function Balance () {
    return (
        <div className="text-center gap-2 flex items-center flex-col">
            <p className="text-xl font-semibold text-gray-400">Your balance</p>
            <h1 className="text-5xl text-gray-700">$21.269</h1>
            <span className="flex text-green-500 font-normal"> 
                <TrackIcon/>
                $5,7772.92
            </span>
        </div>
    )
}