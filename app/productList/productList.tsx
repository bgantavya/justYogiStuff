import data from 'data.json'
import ProductCard from '../components/productCard/productCard'
interface Product {
  id: string;
  title: string;
  img: string;
  category: string;
  price: number;
}

export default function ProductList(){
    return(
        <div className='flex gap-6 m-2 p-2 flex-wrap max-w-7xl mx-auto'>
        {data.map((product:Product)=> {
            return <ProductCard key={product.id} {...product} />
        })}
        </div>
    )
}