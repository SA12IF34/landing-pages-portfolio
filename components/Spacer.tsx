import React from 'react'

type props = {
    background: string
}

const Spacer = ({background}: props) => {
  return (
    <div style={{width: "100%", height: "100px", backgroundColor: background}}>

    </div>
  )
}

export default Spacer;