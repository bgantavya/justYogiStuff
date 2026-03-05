import { useState, useEffect } from 'react';
import ProductCard from '../components/productCard/productCard';
import { GetData } from '~/api/dataApi';
import { Header } from '~/components/productCard/hf';

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
    const [orgData, setOrgData] = useState<Product[]>([]);
    const [data, setData] = useState<Product[]>([]);
    const [keyword, setKeyword] = useState('');
    const [sort, setSort] = useState('');
    const [loading, setLoading] = useState(true);

    function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
        setKeyword(event.target.value.toLowerCase());
    }

    function handleSort(event: React.ChangeEvent<HTMLSelectElement>) {
        setSort(event.target.value);
    }

    useEffect(() => {
        GetData().then((res) => {
            setOrgData(res.data.products);
            setData(res.data.products);
            setLoading(false);
        });
    }, []);

    useEffect(() => {
        let filtered = orgData.filter((item) =>
            item.title.toLowerCase().includes(keyword) ||
            item.description.toLowerCase().includes(keyword) ||
            item.category.toLowerCase().includes(keyword)
        );

        switch (sort) {
            case 'l2h':
                filtered.sort((a, b) => a.price - b.price);
                break;
            case 'h2l':
                filtered.sort((a, b) => b.price - a.price);
                break;
            case 'alpha':
                filtered.sort((a, b) => a.title.localeCompare(b.title));
                break;
        }
        setData(filtered);
    }, [keyword, sort, orgData]);

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                <div className="flex gap-2 items-center">
                    <label htmlFor="sort" className="text-lg font-medium text-gray-700">Sort:</label>
                    <select
                        onChange={handleSort}
                        id="sort"
                        className="text-lg px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
                        value={sort}
                    >
                        <option value="">Default</option>
                        <option value="l2h">Price: Low to High</option>
                        <option value="h2l">Price: High to Low</option>
                        <option value="alpha">Title: A-Z</option>
                    </select>
                </div>
                <input
                    className="border border-gray-300 rounded-lg py-2 px-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 w-full md:w-64"
                    placeholder="Search products..."
                    onChange={handleSearch}
                    value={keyword}
                />
            </div>
                { loading ? '   Loading...' : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 bg-gray-100 p-4 rounded-lg shadow">
                {data.length > 0 ? (
                    data.map((product: Product) => (
                        <ProductCard key={product.id} {...product} />
                    ))
                ) : (
                    <div className="col-span-full text-center text-gray-600 py-8 text-xl">
                        No products found. Try searching something else.
                    </div>
                )}
            </div>
            )}
        </div>
    );
}