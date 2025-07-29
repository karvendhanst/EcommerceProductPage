import axios from "axios"
import { useEffect, useState } from "react"

const useFetch = (url)=>{

    const [data, setData] = useState([])
    const [error, setError] = useState("")

    useEffect(()=>{

        const fetchData = async()=>{

            try{
                const response = await axios.get(url)
                setData(response.data)
            }catch(error){
                setError(error.message)
            }
        }
        fetchData()

    },[])

    return {data,error} 

}

export default useFetch