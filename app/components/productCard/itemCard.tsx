import { Link, useNavigate, useParams } from "react-router";
import { GetProduct } from "~/api/dataApi";
import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

type Product = {
    id: string;
    title: string;
    thumbnail: string;
    category: string;
    price: number;
    description: string;
    qty: number;
};

type RouteParams = {
    sku: string;
};

export default function ItemCard({ onAdd }: { onAdd: (qty: number, i: number) => void }) {
    const [notFound, setNotFound] = useState(false);
    const { sku } = useParams<RouteParams>();
    const [item, setItem] = useState<Product | null>(null);
    const num = sku ? +sku : NaN;
    const navigate = useNavigate();
    const [count, setCount] = useState(1);

    useEffect(() => {
        setItem(null);
        if (!sku || Number.isNaN(+sku)) setNotFound(true);
        else {
            GetProduct(+sku)
                .then((res) => setItem(res.data))
                .catch(() => setNotFound(true));
            }
    }, [sku]);

    useEffect(() => {
        if (notFound) navigate("/*");
    }, [notFound, navigate]);
    
    const AddToCart = () => {;
        onAdd(count, +sku!);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-indigo-100 py-8">
            <div className="flex justify-center gap-4 mb-8">
                {num > 1 && (
                    <Link
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-orange-600 hover:bg-orange-700 text-white shadow transition"
                        to={`/product/${num - 1}`}
                    >
                        <FaArrowLeft /> Prev
                    </Link>
                )}
                <Link
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-500 hover:bg-gray-600 text-white shadow transition"
                    to="/"
                >
                    <FaArrowLeft /> Back
                </Link>
                <Link
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-orange-600 hover:bg-orange-700 text-white shadow transition"
                    to={`/product/${num + 1}`}
                >
                    Next <FaArrowRight />
                </Link>
            </div>

            {item ? (
                <div className="mx-auto max-w-3xl bg-white rounded-xl shadow-lg flex flex-col md:flex-row overflow-hidden border border-indigo-200">
                    <div className="md:w-1/2 flex items-center justify-center bg-indigo-50 p-6">
                        <img
                            src={item.thumbnail}
                            className="w-full h-80 object-contain rounded-lg"
                            alt={item.title}
                        />
                    </div>
                    <div className="md:w-1/2 flex flex-col gap-4 p-8 justify-center">
                        <h2 className="font-bold text-3xl text-orange-500">{item.title}</h2>
                        <p className="font-bold text-2xl">${item.price}</p>
                        <p className="text-gray-700">{item.description}</p>
                        <div className="flex items-center gap-2">
                            <label htmlFor="qty" className="font-medium text-gray-600">
                                Qty:
                            </label>
                            <input
                                id="qty"
                                type="number"
                                className="border rounded p-2 w-20 text-center focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                value={count}
                                min={1}
                                max={20}
                                onChange={(e) => setCount(Number(e.target.value))}
                            />
                        </div>
                        <button
                            onClick={AddToCart}
                            className="bg-orange-600 hover:bg-orange-700 px-6 py-3 text-lg rounded-xl text-white font-semibold shadow transition"
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            ) : (
                <div className="flex justify-center items-center h-64">
                    <span className="text-indigo-500 text-xl font-semibold animate-pulse">Loading...</span>
                </div>
            )}
        </div>
    );
}