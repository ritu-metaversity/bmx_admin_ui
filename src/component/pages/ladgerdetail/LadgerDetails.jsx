
import { BiUserCircle } from "react-icons/bi";
import CardItem from '../../common/carditem/CardItem';


const LadgerDetails = () => {

    const data = [
        {
            image: <BiUserCircle />,
            name: "P/L",
            path :"/Events/matchledger",
            size:"20",
            userType:6
          },
          {
            image: <BiUserCircle />,
            name: "My Ledger",
            path:"/client/my-ledger",
            size:"20",
            userType:7
          },
          {
            image: <BiUserCircle />,
            name: "Super Master",
            path:"/client/ledger-super",
            size:"20",
            userType:0
          },
          {
            image: <BiUserCircle />,
            name: "Master",
            path:"/client/ledger-maste",
            size:"20",
            userType:1

          },
          {
            image: <BiUserCircle />,
            name: "Dealer",
            path: `/client/ledger-agent`,
            size: "20",
            userType:2
      
          },
          {
            image: <BiUserCircle />,
            name: "Client Master",
            path:"/client/ledger-client",
            size:"20",
            userType:3
          }
    ]

    const uType =localStorage.getItem("userType")
  const userTypeMatch={
    0:[1,3,6,7],
    1:[2,3,6,7],
    2:[3,6,7],
    5:[0,3,6,7]
  }

  return (
    <>
        <CardItem data={data.filter(
        res=>
        ((userTypeMatch[uType]?.includes(res?.userType))) 
      )} />
    </>
  )
}

export default LadgerDetails
