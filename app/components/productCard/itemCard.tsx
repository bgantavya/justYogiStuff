import { useParams } from "react-router"
import data from '../../../data.json'

type Product = {
  id: string;
  title: string;
  img: string;
  category: string;
  price: number;
  about: string;
};

function findItem(id: string | undefined): Product | undefined{
    for (let item of data) {
        if (item.id == id) return {...item}
        
    }
}

export default function ItemCard(){
    let {...id} = useParams()
    let item = findItem(id.sku)
    // console.log(item?.title)
    return(
        <div className="rounded gap-2 mx-auto max-w-2xl flex border border-5 m-12">
            <div className="w-2/4"><img src={item?.img} className="w-full h-108 object-cover" alt={item?.title} /></div>
            <div className="w-2/4 flex flex-col items-center justify-evenly">
                <h2 className="font-bold text-3xl">{item?.title}</h2>
                <p className="font-bold text-red-500 text-3xl">${item?.price}</p>
                <p className="text-justify p-2">{item?.about}</p>
                <button className="bg-red-600/75 px-4 p-2 text-lg rounded-xl">Add to Cart</button>
            </div>
        </div>
    )
}