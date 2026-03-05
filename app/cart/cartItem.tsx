import { useEffect, useState } from "react";
import { FaDumpster, FaTrash } from "react-icons/fa";

interface CartItemProps {
    thumbnail: string;
    id: string;
    title: string;
    price: number;
    qty: number;
    qtychange: () => void;
}

export function CartItem({
    thumbnail,
    id,
    title,
    price,
    qty,
    qtychange,
}: CartItemProps) {
    const [quantity, setQuantity] = useState(qty);

    function handleQtyChange(e: React.ChangeEvent<HTMLInputElement>) {
        const value = Math.max(1, Number(e.target.value));
        setQuantity(value);
        localStorage.setItem(
            "cart",
            JSON.stringify({
                ...JSON.parse(localStorage.getItem("cart") || "{}"),
                [id]: value,
            })
        );
        qtychange();
    }
    function deleteCartItem() {
        const cart = JSON.parse(localStorage.getItem("cart") || "{}");
        delete cart[id];
        localStorage.setItem("cart", JSON.stringify(cart));
        qtychange();
    }

    useEffect(() => {
        setQuantity(qty);
    }, [qty]);

    return (
        <tr className="hover:bg-gray-100 transition-colors duration-200">
            <td className="w-1/12 p-2">
                <img
                    src={thumbnail}
                    className="w-16 h-16 object-cover rounded shadow"
                    alt={title}
                />
            </td>
            <td className="text-lg text-center font-semibold p-2">{title}</td>
            <td className="text-lg text-center p-2 text-gray-700">${price.toFixed(2)}</td>
            <td className="text-lg text-center p-2">
                <input
                    value={quantity}
                    min={1}
                    onChange={handleQtyChange}
                    className="border w-16 h-10 text-center rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    type="number"
                />
            </td>
            <td className="text-lg text-center p-2 font-bold text-orange-500">
                ${(quantity * price).toFixed(2)}
            </td>
            <td>
                <button onClick={deleteCartItem} 
                className="hover:cursor-pointer text-orange-500 hover:text-red-700 transition-colors duration-200">
                    <FaTrash/>
                </button>
            </td>
        </tr>
    );
}