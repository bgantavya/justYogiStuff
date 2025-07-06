type props =  {
  id: string;
  title: string;
  img: string;
  category: string;
  price: number;
}


export default function ProductCard({id, title, img, category, price}: props){
    
    return (      
    <div className="border flex flex-col items-center p-2 gap-2 rounded justify-content border-2 max-w-lg">
        <img src={img} alt={title} className=" h-60 w-90 rounded-xl object-cover" />
        <p className="px-2 text-gray-500 self-start">{category}</p>
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-red-500 font-bolder text-lg">${price}</p>
      </div>  
    )}