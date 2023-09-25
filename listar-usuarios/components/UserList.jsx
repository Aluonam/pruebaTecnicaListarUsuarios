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
            // console.log(data.results)
            setDataAPI(data.results)
        } catch (error){"error detected", error}
    }

    const candidato = dataAPI.map((actualElement)=>{
        return(
            <div key={actualElement.id.value}>
                {actualElement.name.first} {actualElement.name.last}
            </div>
        )
    })
    


  return (
    <>
    <div>
        {candidato}
    </div>
    </>
  )
}

export default UserList