import { useState, useEffect } from 'react'

function useFetch(url) {
    const [data, setData] = useState(null)
 
    useEffect(() => {
      async function fetchData() {
        try {
        const response = await fetch(url)
        const data = await response.json()
        setData(data)
        } catch (err) {
          console.log(err)
        } 
      }
      fetchData()
    }, [url])
    return { data }
  }

  export default useFetch
