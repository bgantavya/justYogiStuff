import { useEffect, useState } from "react";
import { FaArrowLeft, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartItem } from "./cartItem";
import { GetProduct } from "~/api/dataApi";

type Product = {
  id: string;
  title: string;
  thumbnail: string;
  category: string;
  price: number;
  description: string;
  qty: number;
};

export default function Cart({ qtychange }: { qtychange: any }) {
  const [cart, setCart] = useState<{ [key: number]: number }>(
    JSON.parse(localStorage.getItem("cart") || "{}")
  );
  const [total, setTotal] = useState(0.0);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const promises = Object.keys(cart).map((key) => GetProduct(+key));
      const res = await Promise.all(promises);
      setProducts(res.map((item) => item.data as Product));
      setLoading(false);
    };
    fetchProducts();
  }, [cart]);

  useEffect(() => {
    const totalPrice = products.reduce(
      (acc, item) => acc + item.price * (cart[+item.id] || 0),
      0
    );
    setTotal(totalPrice);
  }, [cart, products]);

  const handleQtyChange = () => {
    setCart(JSON.parse(localStorage.getItem("cart") || "{}"));
    // qtychange();
  };

  return (
    <div className="max-w-4xl mx-auto my-8 px-2 sm:px-6 py-6 bg-white rounded-2xl shadow-2xl transition-all duration-500 animate-fade-in">
      <Link
        to="/"
        className="flex items-center gap-2 text-orange-500 hover:text-orange-700 mb-6 transition-colors duration-200"
      >
        <FaArrowLeft size={22} />
        <span className="font-semibold text-base sm:text-lg">Back to Shop</span>
      </Link>
      <div className="flex items-center justify-center mb-4 animate-slide-down">
        <FaShoppingCart className="text-orange-500 mr-2" size={28} />
        <h1 className="text-2xl sm:text-3xl font-bold tracking-wide text-gray-800">
          Your Cart
        </h1>
      </div>
      {loading ? (
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-orange-500 border-opacity-50"></div>
        </div>
      ) : products.length > 0 ? (
        <div className="overflow-x-auto transition-all duration-300">
          <table className="border-collapse w-full mt-0 bg-white rounded-lg shadow-md animate-fade-in">
            <thead className="bg-gradient-to-r from-orange-100 to-orange-200">
              <tr className="text-center">
                <th className="w-20"></th>
                <th className="text-center font-semibold py-3">Title</th>
                <th className="font-semibold py-3">Price</th>
                <th className="font-semibold py-3">Quantity</th>
                <th className="font-semibold py-3">Total</th>
              </tr>
            </thead>
            <tbody>
              {products.map((item, idx) => (
                <CartItem
                  key={item.id}
                  {...item}
                  qtychange={handleQtyChange}
                  qty={cart[+item.id]}
                />
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={4} className="text-lg text-right pr-8 font-bold py-4">
                  Total:
                </td>
                <td className="font-bold text-lg text-orange-600 py-4">
                  ${total.toFixed(2)}
                </td>
              </tr>
            </tfoot>
          </table>
          <button
            className="mt-6 w-full bg-gradient-to-r from-orange-500 to-orange-400 text-white py-3 rounded-xl font-semibold text-lg shadow-lg hover:from-orange-600 hover:to-orange-500 transition-all duration-200 active:scale-95"
            aria-label="Proceed to Checkout"
          >
            Proceed to Checkout
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-gray-400 text-xl font-medium animate-fade-in">
          <FaShoppingCart size={48} className="mb-4 text-orange-200 animate-bounce" />
          Your cart is empty.
        </div>
      )}
      <style>
        {`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(20px);}
            to { opacity: 1; transform: translateY(0);}
          }
          .animate-fade-in {
            animation: fade-in 0.7s cubic-bezier(.4,0,.2,1);
          }
          @keyframes slide-down {
            from { opacity: 0; transform: translateY(-30px);}
            to { opacity: 1; transform: translateY(0);}
          }
          .animate-slide-down {
            animation: slide-down 0.6s cubic-bezier(.4,0,.2,1);
          }
        `}
      </style>
    </div>
  );
}