import React from 'react'
import CardItem from '../../common/carditem/CardItem'
import { BiUserCircle } from "react-icons/bi";


const MasterDetails = () => {
    const data = [
        {
            image: <BiUserCircle />,
            name: "Super Master",
            path :"/client/list-super",
            size:"20",
            id:0
          },
          {
            image: <BiUserCircle />,
            name: "Master",
            path:`/client/list-agent`,
            size:"20",
          },
          {
            image: <BiUserCircle />,
            name: "Dealer",
            path:`/client/list-dealer`,
            size:"20",
          },
          {
            image: <BiUserCircle />,
            name: "Client",
            path:"/client/list-client",
            size:"20",
         
          }
    ]
  return (
    <>
      <CardItem data={data}/>
    </>
  )
}

export default MasterDetails
