import axios from "axios"
import { useState } from "react"

const useFetch = (baseUrl) => {

    const [response, setResponse] = useState()

    //read
    const getApi = () => {
        const url = `${baseUrl}/crud/`
        axios.get(url)
        .then(res => setResponse(res.data))
        .catch(err => console.log(err))
    }

    //create
    const createApi = (data) => {
        const url = `${baseUrl}/crud/`
        axios.post(url, data)
        .then(res => {
            setResponse([...response, res.data])
        })
        .catch(err => console.log(err))
    }
    //delete
    const deleteApi = (id) => {
        const url = `${baseUrl}/crud/${id}/`
        axios.delete(url)
        .then (res => {
            setResponse(response.filter(user => user.id !== id))
        })
        .catch(err => console.log(err))
    }
    //update
    const updateApi = (id, data) => {
        const url = `${baseUrl}/crud/${id}/`
        axios.put(url, data)
            .then(res => {
                setResponse(response.map (user => user.id ===id ? res.data : user))
            })
            .catch(err => console.log(err))
    }

    return [ response, getApi, createApi, deleteApi, updateApi ]
}

export default useFetch