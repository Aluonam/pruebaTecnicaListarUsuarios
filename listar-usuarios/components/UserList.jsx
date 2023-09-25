import React, { useEffect, useState } from 'react'
import ModalUserData from './ModalUserData'
import NextUser from './NextUser'

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
                <ModalUserData persona={actualElement} consumoAPI={consumoAPI}></ModalUserData>
                
            </div>
        )
    })
    
//     <div key={dataAPI[0].id.value}>
//     {dataAPI[0].name.first} {dataAPI[0].name.last}
//     <ModalUserData persona={dataAPI[0]} consumoAPI={consumoAPI}></ModalUserData>
    
// </div>


  return (
    <>
    <div>
        {candidato}
        
    </div>
    </>
  )
}

export default UserList