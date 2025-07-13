import { useState, useEffect } from 'react';
import ProductCard from '../components/productCard/productCard'
import { GetData } from '~/api/dataApi';
import { Link } from 'react-router';
import { Header } from "~/components/productCard/hf";

interface Product {
    id: string;
    title: string;
    thumbnail: string;
    category: string;
    price: number;
    description: string;
    brand: string;
}

export default function ProductList() {
    const [orgData, updateOrgData] = useState<Product[]>([])
    const [data, updateData] = useState<Product[]>([])
    const [keyword, updateKeyword] = useState('')
    const [sort, updateSort] = useState('')

    function Search(event: React.ChangeEvent<HTMLInputElement>) {
        const word = event.target.value.toLowerCase()
        updateKeyword(word)
    }

    function HandleSort(event: React.ChangeEvent<HTMLSelectElement>) {
        const way = event.target.value
        updateSort(way)
    }

    useEffect(() =>{
        const token = GetData()
        token.then((res) =>{
        updateOrgData(res.data.products)
        updateData(res.data.products)
        })
    },[])

    useEffect(() => {

        let up = orgData.filter((item) =>
            item.title.toLowerCase().includes(keyword) ||
            item.description.toLowerCase().includes(keyword) ||
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
    }, [keyword, sort, orgData])



    return (
        <>
        <div className='max-w-6xl mx-auto'>
            <div className='flex justify-end mt-4 gap-2 items-center'>
                <select onChange={HandleSort} id="sort" className='text-lg px-2 p-1 border rounded'>
                    <option value="">Default</option>
                    <option value="l2h">Sort by Price (asc)</option>
                    <option value="h2l">Sort by Price (desc)</option>
                    <option value="alpha">Sort by Title</option>
                </select>
                <input className='border rounded p-1 px-2' placeholder='searchbox' onChange={Search} />
            </div>
            <div className='grid bg-gray-400/50 md:grid-cols-3 m-2 p-2 gap-2'>
                {data.length > 0 ? data.map((product: Product) => {
                    return <ProductCard key={product.id} {...product} />
                }) : <div className='text-black'>found nothing try searching something else</div>}
            </div>
        </div>
        </>
    )
}