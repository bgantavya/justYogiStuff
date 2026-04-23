import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "~/page";

export default function DashBoard() {
    const { user } = useContext(UserContext);
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md animate-fade-in-up">
                <h2 className="text-2xl font-bold text-center mb-6">Welcome to the Dashboard</h2>
                <p className="text-gray-600 text-center mb-4">This is a protected area</p>
                hello! {user}
                <Link
                    to="/products"
                    className="block w-full bg-orange-600 text-white text-center py-2 rounded-lg hover:bg-orange-700 transition-colors duration-200"
                >
                    Buy
                </Link>
            </div>
        </div>
    );
}