import { ArrowUp } from "./Icons"
export default function Balance () {
    return (
        <div className="text-center flex items-center flex-col">
            <p className="text-xl font-semibold text-gray-400">Your balance</p>
            <h1 className="text-5xl text-gray-700">$21.269</h1>
            <span className="flex text-green-500 font-normal text-md"> 
            <ArrowUp/>
            $5,7772.92
            </span>
        </div>
        )
}