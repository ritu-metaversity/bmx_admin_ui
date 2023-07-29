
import { BiUserCircle } from "react-icons/bi";
import CardItem from '../../common/carditem/CardItem';


const LadgerDetails = () => {

    const data = [
        {
            image: <BiUserCircle />,
            name: "P/L",
            path :"/Events/matchledger",
            size:"20"
          },
          {
            image: <BiUserCircle />,
            name: "My Ledger",
            path:"/client/my-ledger",
            size:"20"
          },
          {
            image: <BiUserCircle />,
            name: "Super Master",
            path:"/client/ledger-super",
            size:"20"
          },
          {
            image: <BiUserCircle />,
            name: "Agent Master",
            path:"/client/ledger-agent",
            size:"20"

          },
          {
            image: <BiUserCircle />,
            name: "Client Master",
            path:"/client/ledger-client",
            size:"20"
          }
    ]

  return (
    <>
        <CardItem data={data}/>
    </>
  )
}

export default LadgerDetails
