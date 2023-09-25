import React from 'react'

const NextUser = ({consumoAPI}) => {


  return (
    <button onClick={()=>{consumoAPI()}}>next</button>
  )
}

export default NextUser