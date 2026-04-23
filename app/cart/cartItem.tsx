import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";

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
    const [isRemoving, setIsRemoving] = useState(false);

    function handleQtyChange(e: React.ChangeEvent<HTMLInputElement>) {
        // const value = Math.max(1, Number(e.target.value));
        console.log(e.target.valueAsNumber, id);
        setQuantity(e.target.valueAsNumber);
        const value =  e.target.valueAsNumber
        localStorage.setItem(
            "cart",
            JSON.stringify({
                ...JSON.parse(localStorage.getItem("cart") || "{}"),
                [id]: value
            })
        );
        qtychange();
    }

    function deleteCartItem() {
        setIsRemoving(true);
        setTimeout(() => {
            const cart = JSON.parse(localStorage.getItem("cart") || "{}");
            delete cart[id];
            localStorage.setItem("cart", JSON.stringify(cart));
            qtychange();
        }, 350); // match animation duration
    }

    useEffect(() => {
        setQuantity(qty);
    }, [qty]);

    return (
        <tr
            className={`transition-all duration-350 ease-in-out ${
                isRemoving
                    ? "opacity-0 scale-95 blur-sm pointer-events-none"
                    : "hover:bg-gradient-to-r hover:from-blue-50 hover:to-orange-50"
            }`}
        >
            <td className="w-1/12 p-2">
                <div className="relative group">
                    <img
                        src={thumbnail}
                        className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105 group-hover:shadow-xl"
                        alt={title}
                    />
                    <span className="absolute bottom-1 right-1 bg-white bg-opacity-80 text-xs px-2 py-0.5 rounded shadow text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        View
                    </span>
                </div>
            </td>
            <td className="text-base md:text-lg text-center font-semibold p-2">
                <span className="block truncate max-w-[120px] md:max-w-[200px]">{title}</span>
            </td>
            <td className="text-base md:text-lg text-center p-2 text-gray-700">
                <span className="inline-block px-2 py-1 bg-blue-50 rounded transition-colors duration-200">
                    ${price.toFixed(2)}
                </span>
            </td>
            <td className="text-base md:text-lg text-center p-2">
                <input
                    value={quantity}
                    min={1}
                    onChange={handleQtyChange}
                    className="border w-16 h-10 text-center rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200 shadow-sm hover:shadow-md"
                    type="number"
                />
            </td>
            <td className="text-base md:text-lg text-center p-2 font-bold text-orange-500">
                <span className="transition-colors duration-200 hover:text-orange-700">
                    ${(quantity * price).toFixed(2)}
                </span>
            </td>
            <td>
                <button
                    onClick={deleteCartItem}
                    aria-label="Remove item"
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-50 hover:bg-red-100 text-orange-500 hover:text-red-700 transition-all duration-300 shadow hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-red-400"
                >
                    <FaTrash className="text-lg" />
                </button>
            </td>
        </tr>
    );
}