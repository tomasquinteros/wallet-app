/* import { useState } from "react" */
export default function CryptoInfo({ children }) {
    console.log(children)
    return (
        <div>
            {
                children ?
                    <details className="bg-gray-300 p-2 text-gray-800 w-full rounded-lg">
                        <summary className="bg-[#0A937E] p-2 -m-[0.5em] text-white">View cryptocurrency information</summary>
                        {
                            children.description ?
                                <div className="py-4">
                                    {children.description.en ?
                                        <p className="[&>a]:text-blue-600 [&>a]:underline wrap w-full" dangerouslySetInnerHTML={{ __html: children.description.en }} />
                                        : <p>Not found</p>
                                    }
                                </div>
                                : <div className="py-4">
                                    <p className="[&>a]:text-blue-600 [&>a]:underline wrap w-full" >Not found</p>
                                </div>
                        }
                    </details>
                    :console.log("not found")
            }
        </div>
    )
}
{/* <details className="bg-gray-300 p-2 text-gray-800 w-full rounded-lg">
    <summary className="bg-[#0A937E] p-2 -m-[0.5em] text-white">View cryptocurrency information</summary>
    <div className="py-4">
        <p className="[&>a]:text-blue-600 [&>a]:underline wrap w-full" >Not found</p>
    </div>
</details> */}

{/* <button className="bg-[#0A937E] p-2 rounded-md text-gray-200 w-full" onClick={() => toggleInfo()}>View cryptocurrency information {'^'}</button>
<p className={toggle ? verInfo : ocultarInfo}>
Ethereum is a global, open-source platform for decentralized applications. In other words, the vision is to create a world computer that anyone can build applications in a decentralized manner; while all states and data are distributed and publicly accessible. Ethereum supports smart contracts in which developers can write code in order to program digital value. Examples of decentralized apps (dapps) that are built on Ethereum includes tokens, non-fungible tokens, decentralized finance apps, lending protocol, decentralized exchanges, and much more.\r\n\r\nOn Ethereum, all transactions and smart contract executions require a small fee to be paid. This fee is called Gas. In technical terms, Gas refers to the unit of measure on the amount of computational effort required to execute an operation or a smart contract. The more complex the execution operation is, the more gas is required to fulfill that operation. Gas fees are paid entirely in Ether (ETH), which is the native coin of the blockchain. The price of gas can fluctuate from time to time depending on the network demand.
</p> */}