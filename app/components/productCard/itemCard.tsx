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
    stock: number;
    images: string[];
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
    const [activeImg, setActiveImg] = useState<string | null>(null);

    useEffect(() => {
        setCount(1);
        setItem(null);
        setActiveImg(null);
        if (!sku || Number.isNaN(+sku)) setNotFound(true);
        else {
            GetProduct(+sku)
                .then((res) => {
                    setItem(res.data);
                    setActiveImg(res.data.thumbnail);
                })
                .catch(() => setNotFound(true));
        }
    }, [sku]);

    useEffect(() => {
        if (notFound) navigate("/*");
    }, [notFound, navigate]);

    const AddToCart = () => {
        onAdd(count, +sku!);
        setCount(1);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-indigo-100 py-8">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
                {num > 1 && (
                    <Link
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-orange-600 hover:bg-orange-700 text-white shadow transition-all duration-300 transform hover:-translate-x-1"
                        to={`/product/${num - 1}`}
                    >
                        <FaArrowLeft /> Prev
                    </Link>
                )}
                <Link
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-500 hover:bg-gray-600 text-white shadow transition-all duration-300"
                    to="/products"
                >
                    <FaArrowLeft /> Back
                </Link>
                <Link
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-orange-600 hover:bg-orange-700 text-white shadow transition-all duration-300 transform hover:translate-x-1"
                    to={`/product/${num + 1}`}
                >
                    Next <FaArrowRight />
                </Link>
            </div>

            {item ? (
                <div className="mx-auto max-w-4xl bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden border border-indigo-200 animate-fade-in">
                    <div className="md:w-1/2 flex flex-col items-center justify-center bg-indigo-50 p-6">
                        <div className="relative w-full flex justify-center items-center">
                            <img
                                src={activeImg || item.thumbnail}
                                className="w-full max-w-xs h-80 object-contain rounded-xl shadow-lg transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl"
                                alt={item.title}
                                style={{ background: "linear-gradient(135deg, #e0e7ff 0%, #f3f4f6 100%)" }}
                            />
                            <span className="absolute top-2 right-2 bg-orange-500 text-white text-xs px-3 py-1 rounded-full shadow animate-bounce">
                                {item.category}
                            </span>
                        </div>
                        <div className="flex justify-center gap-2 mt-4 flex-wrap">
                            {item.images.map((img, idx) => (
                                <button
                                    key={img}
                                    onClick={() => setActiveImg(img)}
                                    className={`transition-all duration-300 border-2 rounded-lg p-1 ${
                                        activeImg === img
                                            ? "border-orange-500 scale-110 shadow-lg"
                                            : "border-transparent opacity-80 hover:opacity-100"
                                    }`}
                                    aria-label={`View image ${idx + 1}`}
                                >
                                    <img
                                        src={img}
                                        alt={`Product preview ${idx + 1}`}
                                        className="w-12 h-12 object-cover rounded-lg"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="md:w-1/2 flex flex-col gap-6 p-8 justify-center animate-slide-in">
                        <h2 className="font-bold text-3xl md:text-4xl text-orange-500 tracking-tight transition-colors duration-300 hover:text-orange-600">
                            {item.title}
                        </h2>
                        <p className="font-bold text-2xl md:text-3xl text-indigo-700 flex items-center gap-2">
                            <span className="animate-pulse">₹{item.price}</span>
                            <span className="text-xs bg-indigo-100 text-indigo-600 px-2 py-1 rounded-full">
                                In Stock: {item.stock}
                            </span>
                        </p>
                        <p className="text-gray-700 text-base md:text-lg leading-relaxed transition-all duration-300">
                            {item.description}
                        </p>
                        <div className="flex items-center gap-3">
                            <label htmlFor="qty" className="font-medium text-gray-600">
                                Qty:
                            </label>
                            <input
                                id="qty"
                                type="number"
                                className="border rounded p-2 w-20 text-center focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-300"
                                value={count}
                                min={1}
                                max={item.qty}
                                onChange={(e) => setCount(Math.max(1, Math.min(item.qty, Number(e.target.value))))}
                            />
                        </div>
                        <button
                            onClick={AddToCart}
                            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-8 py-3 text-lg rounded-xl text-white font-semibold shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-orange-400"
                        >
                            <span className="inline-block animate-bounce">🛒</span> Add to Cart
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