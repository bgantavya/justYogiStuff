import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
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

export default function Cart({ cartItems }: { cartItems: { [key: number]: number } }) {
  const [cart, setCart] = useState<{ [key: number]: number }>(
    JSON.parse(localStorage.getItem("cart") || "{}")
  );
  const [total, setTotal] = useState(0.0);
  const [products, setProducts] = useState<Product[]>([]);

  const handleQtyChange = () => {
    setCart(JSON.parse(localStorage.getItem("cart") || "{}"));
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const promises = Object.keys(cart).map((key) => GetProduct(+key));
      const res = await Promise.all(promises);
      setProducts(res.map((item) => item.data as Product));
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

  return (
    <div className="max-w-4xl mx-auto my-8 p-6 bg-white rounded-lg shadow-lg">
      <Link to="/" className="flex items-center gap-2 text-orange-500 hover:text-orange-800 mb-6">
        <FaArrowLeft size={24} />
        <span className="font-semibold">Back to Shop</span>
      </Link>
      {products.length > 0 ? (
        <div>
          <div className="bg-orange-500 p-4 rounded-t-lg text-white text-center shadow">
            <h1 className="text-2xl font-bold tracking-wide">Your Cart</h1>
          </div>
          <table className="border-collapse w-full mt-0">
            <thead className="bg-gray-100">
              <tr className="text-left">
                <th className="w-20"></th>
                <th className="text-center font-semibold">Title</th>
                <th className="font-semibold">Price</th>
                <th className="font-semibold">Quantity</th>
                <th className="font-semibold">Total</th>
              </tr>
            </thead>
            <tbody>
              {products.map((item) => (
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
                <td colSpan={4} className="text-lg text-right pr-8 font-bold">
                  Total:
                </td>
                <td className="font-bold text-lg text-orange-600">${total.toFixed(2)}</td>
              </tr>
            </tfoot>
          </table>
          <button className="mt-4 w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition">
            Proceed to Checkout
          </button>
        </div>
      ) : (
        <div className="text-center py-16 text-gray-500 text-xl font-medium">
          Your cart is empty.
        </div>
      )}
    </div>
  );
}