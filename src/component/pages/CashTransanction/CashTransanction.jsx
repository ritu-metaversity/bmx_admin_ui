import { BiUserCircle } from "react-icons/bi";
import CardItem from "../../common/carditem/CardItem";


const data = [
    {
        image: <BiUserCircle />,
        name: "Dr/Cr Entry Super",
        path :"/client/txn-super",
        size:"14"
      },
      {
        image: <BiUserCircle />,
        name: "Dr/Cr Entry Agent",
        path:"/client/txn-agent",
        size:"14"
      },
      {
        image: <BiUserCircle />,
        name: "Dr/Cr Entry Client",
        path:"/client/txn-client",
        size:"14"
      },
]

const CashTransanction = () => {
  return (
    <>
      <CardItem data={data}/>
    </>
  )
}

export default CashTransanction
