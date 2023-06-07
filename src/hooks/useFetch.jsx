import { useEffect, useState } from "react"

function useFetch (param) {
    const [response, setResponse] = useState([])
    const fetchData = (param) => {
        fetch(param)
            .then(res => res.json())
            .then(data => setResponse(data))
    }
    useEffect(() => {
        fetchData(param)
    },[param])
    return {response}
}

export default useFetch