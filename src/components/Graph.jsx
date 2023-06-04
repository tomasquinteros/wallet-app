import image from "../assets/Screenshot from 2023-06-03 00-25-03.png"
import { ArrowUp } from "./Icons"
export default function GraphCard () {
    return (
        <section className="bg-[#0A937E] rounded-2xl text-white p-4 w-5/6 m-auto">
            <div>
                <p>Bitcoin</p>
            </div>
            <div className="flex justify-between items-center">
                <div className="flex flex-col gap-1">
                    <p className="font-medium">$16,389.92</p>
                    <div className="font-extralight">
                        <span ><ArrowUp/> $136.92</span>
                        <span>67%</span>
                    </div>
                </div>
                <div>
                    <img src={image} alt="graph" />
                </div>
            </div>
        </section>
    )
}