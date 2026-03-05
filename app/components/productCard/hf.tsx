import { FaShoppingBag } from "react-icons/fa";

export function Header({ tc = 0 }: { tc?: number }) {
    return (
        <header className="w-full bg-white font-bold text-orange-400 shadow-md">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
                <a href="/" className="flex items-center gap-2 hover:opacity-80 transition">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
                        alt="Amazon Logo"
                        className="w-28 h-auto object-contain"
                    />
                    <span className="text-lg font-semibold hidden sm:inline text-[#febd69]">Shop</span>
                </a>
                <div className="flex items-center gap-6">
                    <div>

                    <a href="/signup" className="hover:underline text-sm hidden md:inline">
                        Sign Up
                    </a>/
                    <a href="/login" className="hover:underline text-sm hidden md:inline">
                        Log In
                    </a>
                    </div>
                    {/* <a href="/orders" className="hover:underline text-sm hidden md:inline">
                        Orders
                    </a> */}
                    <a href="/cart" className="relative flex items-center group">
                        <FaShoppingBag size={28} className="text-orange-400 group-hover:scale-110 transition-transform" />
                        {tc > 0 && (
                            <span className="absolute -top-2 -right-2 bg-orange-300 text-black text-xs font-bold px-2 py-0.5 rounded-full shadow">
                                {tc}
                            </span>
                        )}
                    </a>
                </div>
            </div>
            {/* <div className="bg-[#232f3e] px-4 py-2 text-xs">
                <nav className="max-w-7xl mx-auto flex gap-6">
                    <a href="/deals" className="hover:underline">Today's Deals</a>
                    <a href="/customer-service" className="hover:underline">Customer Service</a>
                    <a href="/gift-cards" className="hover:underline">Gift Cards</a>
                    <a href="/sell" className="hover:underline">Sell</a>
                </nav>
            </div> */}
        </header>
    );
}

export function Footer() {
    return (
        <footer className="w-full bg-[#232f3e] text-gray-300 mt-8">
            {/* <div className="max-w-6xl mx-auto py-8 px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
                <div>
                    <h3 className="font-bold mb-2 text-white">Get to Know Us</h3>
                    <ul>
                        <li><a href="#" className="hover:underline">About Us</a></li>
                        <li><a href="#" className="hover:underline">Careers</a></li>
                        <li><a href="#" className="hover:underline">Press Releases</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold mb-2 text-white">Connect with Us</h3>
                    <ul>
                        <li><a href="#" className="hover:underline">Facebook</a></li>
                        <li><a href="#" className="hover:underline">Twitter</a></li>
                        <li><a href="#" className="hover:underline">Instagram</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold mb-2 text-white">Make Money with Us</h3>
                    <ul>
                        <li><a href="#" className="hover:underline">Sell on Shop</a></li>
                        <li><a href="#" className="hover:underline">Affiliate Program</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold mb-2 text-white">Let Us Help You</h3>
                    <ul>
                        <li><a href="#" className="hover:underline">Your Account</a></li>
                        <li><a href="#" className="hover:underline">Returns Centre</a></li>
                        <li><a href="#" className="hover:underline">Help</a></li>
                    </ul>
                </div>
            </div> */}
            <div className="bg-[#131921] py-4 text-center text-xs text-gray-400">
                &copy; {new Date().getFullYear()} Shop. Inspired by Amazon. All rights reserved. For educational purposes.
            </div>
        </footer>
    );
}