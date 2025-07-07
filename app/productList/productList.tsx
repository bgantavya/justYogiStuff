import products from 'data.json'
import { useState, useEffect } from 'react';
import ProductCard from '../components/productCard/productCard'
interface Product {
    id: string;
    title: string;
    img: string;
    category: string;
    price: number;
    about: string;
    brand: string;
}

<<<<<<< HEAD
export default function ProductList() {
    const [data, updateData] = useState<Product[]>(products)
    const [keyword, updateKeyword] = useState('')
    const [sort, updateSort] = useState('')

    function Search(event: React.ChangeEvent<HTMLInputElement>) {
        const word = event.target.value.toLowerCase()
        updateKeyword(word)
    }

    function HandleSort(event: React.ChangeEvent<HTMLSelectElement>) {
        console.log(event.target.value)
        const way = event.target.value
        updateSort(way)
    }

    useEffect(() => {
        let up = products.filter((item) =>
            item.title.toLowerCase().includes(keyword) ||
            item.about.toLowerCase().includes(keyword) ||
            item.brand.toLowerCase().includes(keyword) ||
            item.category.toLowerCase().includes(keyword)
        )

        switch (sort) {
            case 'l2h':
                up.sort((a, b) => a.price - b.price)
                break
            case 'h2l':
                up.sort((a, b) => b.price - a.price)
                break
            case 'alpha':
                up.sort((a, b) => a.title.localeCompare(b.title))
                break
        }
        updateData(up)
    }, [keyword, sort])



    return (
        <div className='max-w-7xl mx-auto'>
            <div className='flex justify-end mt-4 gap-2 items-center'>
                <select onChange={HandleSort} id="sort" className='text-lg px-2 p-1 border rounded'>
                    <option value="">Default</option>
                    <option value="l2h">Sort by Price (asc)</option>
                    <option value="h2l">Sort by Price (desc)</option>
                    <option value="alpha">Sort by Title</option>
                </select>
                <input className='border rounded p-1 px-2' placeholder='searchbox' onChange={Search} />
            </div>
            <div className='flex gap-6 m-2 p-2 flex-wrap justify-center'>
                {data.length > 0 ? data.map((product: Product) => {
                    return <ProductCard key={product.id} {...product} />
                }) : <div className='text-black'>found nothing try searching something else</div>}
            </div>
=======
export default function ProductList(){
    return(
        <div className='flex gap-6 m-2 p-2 flex-wrap w-full justify-center mx-auto'>
        {data.map((product:Product)=> {
            return <ProductCard key={product.id} {...product} />
        })}
>>>>>>> 435add398e81eafb522aaf35d6e7aa863dbbc20d
        </div>
    )
}