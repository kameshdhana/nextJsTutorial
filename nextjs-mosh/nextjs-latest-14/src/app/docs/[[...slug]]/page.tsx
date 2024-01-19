import React from 'react'

const Docs = ({params}:{params:{slug:string[]}}) => {
  return (
    <div>Docs Dynamic Content {params.slug?params.slug:""}</div>
  )
}

export default Docs