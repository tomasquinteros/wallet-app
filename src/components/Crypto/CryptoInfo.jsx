
export default function CryptoInfo({ children }) {
    return (
        <div>
            {
                children &&
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
            }
        </div>
    )
}