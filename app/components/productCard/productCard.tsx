import { useNavigate } from "react-router"

type props =  {
  id: string;
  title: string;
  thumbnail: string;
  category: string;
  price: number;
}

export default function ProductCard({id, title, thumbnail, category, price}: props){
  let navigate = useNavigate()
  const toProduct = () => navigate(`/product/${id}`)

  return (      
    <div onClick={toProduct} className="flex flex-col bg-white items-center p-2 gap-2 rounded justify-content max-w-lg">
        <img src={thumbnail} alt={title} className=" h-60 w-90 rounded-xl object-cover" />
        <p className="px-2 text-gray-500 self-start">{category}</p>
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-red-500 font-bolder text-lg">${price}</p>
      </div>  
    )}