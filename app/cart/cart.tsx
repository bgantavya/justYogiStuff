import { use, useEffect, useState } from "react"
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom"
import { CartItem } from "./cartItem";
import { GetData, GetProduct } from "~/api/dataApi";
type Product = {
    id: string;
    title: string;
    thumbnail: string;
    category: string;
    price: number;
    description: string;
    qty: number
};


export default function Cart({cartItems}: {cartItems: {[key: number]: number}}) {
  const data = localStorage.getItem('cart') || '{}';
  const [cart, setCart] = useState<{[key: number]: number}>(JSON.parse(data));
    const [pp,upd] = useState(0.00)
    const [orgData,updateOrgData] = useState<Product[]>([])

    const handleqtychange = () => {
        const data = localStorage.getItem('cart') || '{}';
        setCart(JSON.parse(data));
    }
    useEffect(() => {
    const promises = Object.keys(cart).map((key)=> GetProduct(+key))
    Promise.all(promises).then((res) => {
      updateOrgData(res.map((item) => item.data as Product))
    })},[cart])
 useEffect(() => {
    const total = orgData.reduce((acc, item) => acc + item.price * cart[+item.id], 0);
    upd(total);
  }, [cart, orgData]);

    return (
        <>   
        <div className="max-w-5xl mx-auto">
        <Link to='/'>
        <FaArrowLeft size={30}/>
        </Link>
        {orgData.length > 0 ? <div>
          <div className="bg-orange-500 p-2 text-white text-center">
            <h1 className="text-xl">Your Cart</h1></div>
            <table className="border-collapse w-full">
            <thead className="bg-gray-200">
            <tr className="text-left">
              <th></th>
              <th className="text-center">Title</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
            </thead>
            <tbody>
            {orgData.map((item, index) => (
              <CartItem key={index} {...item} qtychange={handleqtychange} qty={cart[+item.id]} />
            ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={4} className="text-lg text-right pr-16 font-bold">Total:</td>
                <td className="font-bold text-lg">${pp.toFixed(2)}</td>
              </tr>
            </tfoot>
            </table>
            </div>
         : <div className="text-center">Added nothing here</div>}
        </div>
         </>
    )
}