import { useState } from "react"
import axios, { AxiosError } from 'axios'
import { IError } from "../const/model"


// our custom hook for get Api
export function useFetch(url: string){
  const [data, setData] = useState<Array<string>>()
	const [error, setError] = useState<IError | any>(null)
  
  const getData = async () => {
    try {
      const	{data} = await axios.get(url);
      setData(data.words);
      setError(null)
    } catch (error) {
      const err = error as AxiosError
      setData([]);
      setError(err.response?.data)
    }
  }
  return {data, error, getData}
}