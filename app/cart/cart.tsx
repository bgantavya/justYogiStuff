import { useEffect, useState } from "react"
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom"
import { CartItem } from "./cartItem";
// import { orgData } from "~/productList/productList"
import { Header } from "~/components/productCard/hf";
type Product = {
    id: string;
    title: string;
    thumbnail: string;
    category: string;
    price: number;
    description: string;
    qty: number
};

export const items : Product[] = []

export default function Cart(){
    const [pp,upd] = useState(0.00)
 useEffect(() => {
    const total = items.reduce((acc, item) => acc + item.price * item.qty, 0);
    upd(parseFloat(total.toFixed(2))); // Keep 2 decimal places
  }, [items]);

    return (
        <>
            <Header/>
        
        <div className="max-w-5xl mx-auto">
        <Link to='/'>
        <FaArrowLeft size={30}/>
        </Link>
        {items.length > 0 ? <div>
            
          {items.map((item, index) => (
<CartItem key={index} {...item}/>
))}
        <div>Total: ${pp}</div>
            </div>
         : <div className="text-center">Added nothing here</div>}
        </div>
         </>
    )
}