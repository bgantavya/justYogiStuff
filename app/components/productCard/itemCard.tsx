import { Link, useNavigate, useParams } from "react-router"
import { GetProduct } from "~/api/dataApi";
import { useState, useEffect } from "react";
import { items } from "~/cart/cart";
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

type RouteParams = {
    sku: string
}

export default function ItemCard() {
    const [notFound, updatenf] = useState(false)
    let { sku } = useParams<RouteParams>()
    const [item, updateit] = useState<Product | null>(null)
    const num = sku ? +sku : NaN

    useEffect(() => {
        if (!sku || Number.isNaN(+sku)) updatenf(true)
        else {
            const token = GetProduct(+sku)
            token.then((res) => updateit(res.data))
        }
    }, [sku])
    let a = 0
    const [count, setCount] = useState(0)
    const navigate = useNavigate()
    if (notFound) navigate('/*')

    function AddToCart() {
        setCount(count + a)
        console.log("Adding to cart", item?.id, "count:", count)
        const t = items.findIndex(i => i.id == sku)
        if(t != -1) items[t].qty += 1
        else items.push({...item!, qty:1})
    }

    return (
        <>
        <Header tc={count}/>
            <div className="flex justify-evenly mt-5 items-center">
                {num > 0 ? <Link className="p-1 rounded px-3 bg-indigo-500 text-white" to={`/product/${num - 1}`}>Prev</Link> : ""}
                <Link className="p-1 rounded px-3 bg-indigo-500 text-white" to='/'>Back</Link>
                <Link className="p-1 rounded px-3 bg-indigo-500 text-white" to={`/product/${num + 1}`}>next</Link>
            </div>

            {item ?
                <div className="rounded gap-2 mx-auto max-w-2xl flex border border-5 m-12">
                    <div className="w-2/4"><img src={item?.thumbnail} className="w-full h-108 object-cover" alt={item?.title} /></div>
                    <div className="w-2/4 flex flex-col items-center justify-evenly">
                        <h2 className="font-bold text-3xl">{item?.title}</h2>
                        <p className="font-bold text-red-500 text-3xl">${item?.price}</p>
                        <p className="text-justify p-2">{item?.description}</p>
                        <input type="number" className="border rounded p-2 w-1/4 text-center" defaultValue={1} min={1} max={20}  onChange={(e) => a = Number(e.target.value)} />                        
                        <button onClick={AddToCart} className="bg-red-600/75 px-4 p-2 text-lg rounded-xl">Add to Cart</button>
                    </div>
                </div> : <div>Loading...</div>}
        </>
    )
}