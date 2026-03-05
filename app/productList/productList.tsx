import { useState, useEffect } from 'react';
import ProductCard from '../components/productCard/productCard';
import { Filter } from '~/api/dataApi';
import { Link, Navigate, useSearchParams } from 'react-router-dom';

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
    // const [orgData, setOrgData] = useState<Product[]>([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [data, setData] = useState<Product[]>([]);
    // const [keyword, setKeyword] = useState(searchParams.get('q')! || '');
    // const [order, setOrder] = useState(searchParams.get('order')! || '');
    // const [sort, setSort] = useState(searchParams.get('sort')! || '');
    // const [page, setPage] = useState(+searchParams.get('page')! || 1);
    const [pages, setPages] = useState<number[]>([]);
    const [loading, setLoading] = useState(true);
    let page = +searchParams.get('page')! || 1;
    let sort = searchParams.get('sort')! || '';
    let order = searchParams.get('order')! || '';
    let keyword = searchParams.get('q')! || '';

    function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
        // setKeyword(event.target.value.toLowerCase());
        setSearchParams({ page: '1', q: event.target.value.toLowerCase(), ...searchParams });
        // <Navigate to={`?q=${event.target.value.toLowerCase()}`} />;
    }
    
    function handleSort(event: React.ChangeEvent<HTMLSelectElement>) {
        if (event.target.value === 'l2h') {
            setSearchParams({ ...Object.fromEntries(searchParams) ,sort: 'price', order: 'asc'});
            // setSort('price');
            // setOrder('asc');
        } else if (event.target.value === 'h2l') {
            setSearchParams({...Object.fromEntries(searchParams) ,sort: 'price', order: 'desc'});
            // setSort('price');
            // setOrder('desc');
        } else if (event.target.value === 'alpha') {
            setSearchParams({...Object.fromEntries(searchParams) ,sort: 'title', order: 'asc'});
            // setSort('title');
            // setOrder('asc');
        } else {
            // setOrder('');
            // setSort('');
            setSearchParams({ ...Object.fromEntries(searchParams) , page: '1' , sort: '', order: ''});
        }
        // setPage(1)
    }

    // useEffect(() => {
    //     GetData().then((res) => {
    //         setData(res.data.products);
    //         setLoading(false);
    //     });
    // }, []);
    
    useEffect(() => {
        // setLoading(true);
        Filter(keyword, sort, order, page).then((res) => {
            setData(res.data.products);
            setLoading(false);
            let arr = Array.from({length: Math.ceil(res.data.total/15) }, (_, i) => i + 1);
            setPages(arr)
            // console.log(pages)
            // console.log("Data fetched:", res.data.products.length);
            // console.log("Data fetched with keyword:", keyword, "sort:", sort, "order:", order);
            // console.log(res);
        });
        
        
        // let filtered = orgData.filter((item) =>
        //     item.title.toLowerCase().includes(keyword) ||
        //     item.description.toLowerCase().includes(keyword) ||
        //     item.category.toLowerCase().includes(keyword)
        // );

        // switch (sort) {
        //     case 'l2h':
        //         filtered.sort((a, b) => a.price - b.price);
        //         break;
        //     case 'h2l':
        //         filtered.sort((a, b) => b.price - a.price);
        //         break;
        //     case 'alpha':
        //         filtered.sort((a, b) => a.title.localeCompare(b.title));
        //         break;
        // }
        // setData(filtered);
    }, [searchParams]);

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-6 animate-fade-in">
                <h1 className="text-3xl font-bold text-gray-800 tracking-tight transition-all duration-500">
                    Product Catalog
                </h1>
                <div className="flex flex-col sm:flex-row gap-4 items-center w-full sm:w-auto">
                    <div className="flex gap-2 items-center w-full sm:w-auto">
                        <label htmlFor="sort" className="text-lg font-medium text-gray-700">Sort:</label>
                        <select
                            onChange={handleSort}
                            id="sort"
                            className="text-lg px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white transition-all duration-300 shadow-sm hover:shadow-md"
                            // value={sort}
                        >
                            <option value="">Default</option>
                            <option value="l2h">Price: Low to High</option>
                            <option value="h2l">Price: High to Low</option>
                            <option value="alpha">Title: A-Z</option>
                        </select>
                    </div>
                    <input
                        className="border border-gray-300 rounded-lg py-2 px-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 w-full sm:w-64 transition-all duration-300 shadow-sm hover:shadow-md"
                        placeholder="Search products..."
                        onChange={handleSearch}
                        value={keyword}
                    />
                </div>
            </div>
            {loading ? (
                <div className="flex justify-center items-center h-64 animate-pulse">
                    <svg className="w-12 h-12 text-blue-400 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                    </svg>
                    <span className="ml-4 text-xl text-gray-600">Loading products...</span>
                </div>
            ) : (
                <>
                <div className=" flex justify-center mt-4">
                            {pages.map((num: number) => (
                                <Link
                                    key={num}
                                    className={`mx-1 px-3 py-1 rounded-lg text-sm font-medium ${
                                        page === num
                                            ? "bg-orange-500 text-white"
                                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                    }`}
                                    to={`?page=${num}`}
                                >
                                    {num}
                                </Link>
                            ))}
                        </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-2xl shadow-lg transition-all duration-500">
                    {data.length > 0 ? (
                        <>
                        {data.map((product: Product, idx) => (
                            <div
                                key={product.id}
                                className="transform transition-transform duration-300 hover:-translate-y-2 hover:scale-105"
                                style={{ animation: `fadeInUp 0.4s ease ${(idx * 0.07).toFixed(2)}s both` }}
                            >
                                <ProductCard {...product} />
                            </div>
                        ))}
                        
                                        </>
                    ) : (
                        <div className="col-span-full text-center text-gray-600 py-16 text-2xl font-semibold animate-fade-in">
                            No products found.<br />
                            <span className="text-base font-normal text-gray-400">Try searching with different keywords.</span>
                        </div>
                    )}
                    
                </div>
                <br/>
                        <div className=" flex justify-center mt-4">
                            {pages.map((num: number) => (
                                <Link
                                    key={num}
                                    className={`mx-1 px-3 py-1 rounded-lg text-sm font-medium ${
                                        page === num
                                            ? "bg-orange-500 text-white"
                                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                    }`}
                                    to={`?page=${num}`}
                                >
                                    {num}
                                </Link>
                            ))}
                        </div>
                        </>
            )}

        </div>
    );
}