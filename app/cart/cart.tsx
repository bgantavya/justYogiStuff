import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
// import { orgData } from "~/productList/productList"

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
        <div>
        <Link to='/'>BACK</Link>
        {items.length > 0 ? <div>
            <ul className="list-disc pl-6 mt-2">
          {items.map((item, index) => (
              <li key={index} className="my-1">{item.id}:{item.price} {} {item.qty}</li>
            ))}
        </ul>
        <div>Total: ${pp}</div>
            </div>
         : <div> `u added nothing here`</div>}
        </div>
    )
}