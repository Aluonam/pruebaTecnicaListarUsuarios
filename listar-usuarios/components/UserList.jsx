import React, { useEffect, useState } from 'react'

const UserList = () => {

    const [dataAPI, setDataAPI] = useState([])

    useEffect(() => {
      consumoAPI()
    }, [])

    const consumoAPI = async () => {
        try{
            const call = await fetch(`https://randomuser.me/api/`)
            const data = await call.json()
            console.log(data.results)
        } catch (error){"error detected", error}
    }
    


  return (
    <div>UserList</div>
  )
}

export default UserList