import { useState } from "react"
import type { Url } from "url"

export function CartItem({thumbnail, title, price, qty}:{thumbnail:string, title:string, price: number, qty:number}){
    // console.log(data)
    const [qity,update] = useState(qty)
    // console.log(data.data)
    return(
        <div className="flex p-2 border">
            <div className="w-1/5"><img src={thumbnail} className="w-full object-cover" alt="" /></div>
            <div className="w-full">
                <h1 className="text-center text-2xl">{title}</h1>
                <p className="text-xl">Price:{price}</p>
                <p className="text-xl w-min">Quantity: <input onInput={(event)=>{ 
                    update(Number((event.target as HTMLInputElement).value ))
                } } defaultValue={qity} className="border w-fit" type="number"/></p>
                <p>total:{qity * price}</p>
            </div>
        </div>
    )
}