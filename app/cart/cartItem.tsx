import { useEffect, useState } from "react"

export function CartItem({thumbnail, id, title, price, qty, qtychange}:{thumbnail:string, id:string, title:string, price: number, qty:number, qtychange: () => void}){
    function updateqty(e: React.ChangeEvent<HTMLInputElement>){
        const value = Number(e.target.value);
        update(value)
        localStorage.setItem("cart", JSON.stringify({...JSON.parse(localStorage.getItem("cart") || "{}"), [id]: value}))
        qtychange();
    }
    useEffect(()=>{},[localStorage.getItem("cart")])
    const [qity,update] = useState(qty)
    return(
<tr>

            <td className="w-1/12"><img src={thumbnail} className="w-full object-cover" alt="" /></td>
            <td className="text-lg text-center">{title}</td>
            <td className="text-lg">{price}</td>
            <td className="text-lg"><input onInput={updateqty} defaultValue={qity} className="border w-18 h-12 text-center rounded" type="number"/></td>
            <td className="text-lg">{(qity * price).toFixed(2)}</td>
</tr>
    )
}