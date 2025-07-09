import { useEffect } from "react";
import { FaShoppingBag } from "react-icons/fa";
import { items } from "~/cart/cart";
useEffect(()=>{},[items])

export function Header(){
    return(<div className=" max-w-6xl pt-4 mx-auto flex justify-between">
        <div>Brand</div>
        <div><FaShoppingBag size={32}/>
            <div className="absolute text-sm top-8 bg-orange-500 text-white p-0 px-1 rounded-full">{items.length}</div>
            </div>
    </div>)
}
export function Footer(){}