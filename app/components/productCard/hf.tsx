import { FaShoppingBag } from "react-icons/fa";

export function Header({ tc = 0 }: { tc?: number }) {
    return (
        <header className="w-full bg-white font-bold text-orange-400 shadow-md sticky top-0 z-50 transition-shadow duration-300">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
                <a
                    href="/"
                    className="flex items-center gap-2 hover:opacity-90 transition-opacity duration-200"
                >
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
                        alt="Amazon Logo"
                        className="w-28 h-auto object-contain drop-shadow-md transition-transform duration-300 hover:scale-105"
                    />
                    <span className="text-lg font-semibold hidden sm:inline text-[#febd69] tracking-wide animate-fadeIn">
                        Shop
                    </span>
                </a>
                <nav className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                        <a
                            href="/signup"
                            className="hover:underline text-sm hidden md:inline transition-colors duration-200 hover:text-orange-500"
                        >
                            Sign Up
                        </a>
                        <span className="hidden md:inline text-gray-300">/</span>
                        <a
                            href="/login"
                            className="hover:underline text-sm hidden md:inline transition-colors duration-200 hover:text-orange-500"
                        >
                            Log In
                        </a>
                    </div>
                    <a
                        href="/cart"
                        className="relative flex items-center group focus:outline-none focus:ring-2 focus:ring-orange-300 rounded transition-shadow duration-200"
                        aria-label="View cart"
                    >
                        <FaShoppingBag
                            size={28}
                            className="text-orange-400 group-hover:scale-110 group-hover:text-orange-500 transition-transform duration-200 drop-shadow-sm"
                        />
                        {tc > 0 && (
                            <span className="absolute -top-2 -right-2 bg-orange-400 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow-lg animate-bounce">
                                {tc}
                            </span>
                        )}
                    </a>
                    <button
                        className="ml-2 md:hidden flex flex-col justify-center items-center group"
                        aria-label="Open menu"
                        onClick={() => {
                            const nav = document.getElementById("mobile-nav");
                            if (nav) nav.classList.toggle("hidden");
                        }}
                    >
                        <span className="block w-6 h-0.5 bg-orange-400 mb-1 rounded transition-all group-hover:w-8"></span>
                        <span className="block w-6 h-0.5 bg-orange-400 mb-1 rounded"></span>
                        <span className="block w-6 h-0.5 bg-orange-400 rounded transition-all group-hover:w-8"></span>
                    </button>
                </nav>
            </div>
            <div
                id="mobile-nav"
                className="md:hidden hidden bg-white shadow-inner transition-all duration-300"
            >
                <nav className="flex flex-col gap-2 px-4 py-2">
                    <a
                        href="/signup"
                        className="hover:underline text-sm transition-colors duration-200 hover:text-orange-500"
                    >
                        Sign Up
                    </a>
                    <a
                        href="/login"
                        className="hover:underline text-sm transition-colors duration-200 hover:text-orange-500"
                    >
                        Log In
                    </a>
                    <a
                        href="/cart"
                        className="hover:underline text-sm transition-colors duration-200 hover:text-orange-500"
                    >
                        Cart
                    </a>
                </nav>
            </div>
            <div className="bg-[#232f3e] px-4 py-2 text-xs animate-fadeIn">
                <nav className="max-w-7xl mx-auto flex flex-wrap gap-4 sm:gap-6">
                    <a href="/deals" className="hover:underline hover:text-orange-300 transition-colors duration-200">
                        Today's Deals
                    </a>
                    <a href="/customer-service" className="hover:underline hover:text-orange-300 transition-colors duration-200">
                        Customer Service
                    </a>
                    <a href="/gift-cards" className="hover:underline hover:text-orange-300 transition-colors duration-200">
                        Gift Cards
                    </a>
                    <a href="/sell" className="hover:underline hover:text-orange-300 transition-colors duration-200">
                        Sell
                    </a>
                </nav>
            </div>
        </header>
    );
}

export function Footer() {
    return (
        <footer className="w-full bg-[#232f3e] text-gray-300 mt-8 shadow-inner">
            <div className="max-w-6xl mx-auto py-8 px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm animate-fadeIn">
                <div>
                    <h3 className="font-bold mb-2 text-white">Get to Know Us</h3>
                    <ul>
                        <li>
                            <a href="#" className="hover:underline hover:text-orange-300 transition-colors duration-200">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline hover:text-orange-300 transition-colors duration-200">
                                Careers
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline hover:text-orange-300 transition-colors duration-200">
                                Press Releases
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold mb-2 text-white">Connect with Us</h3>
                    <ul>
                        <li>
                            <a href="#" className="hover:underline hover:text-orange-300 transition-colors duration-200">
                                Facebook
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline hover:text-orange-300 transition-colors duration-200">
                                Twitter
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline hover:text-orange-300 transition-colors duration-200">
                                Instagram
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold mb-2 text-white">Make Money with Us</h3>
                    <ul>
                        <li>
                            <a href="#" className="hover:underline hover:text-orange-300 transition-colors duration-200">
                                Sell on Shop
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline hover:text-orange-300 transition-colors duration-200">
                                Affiliate Program
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold mb-2 text-white">Let Us Help You</h3>
                    <ul>
                        <li>
                            <a href="#" className="hover:underline hover:text-orange-300 transition-colors duration-200">
                                Your Account
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline hover:text-orange-300 transition-colors duration-200">
                                Returns Centre
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline hover:text-orange-300 transition-colors duration-200">
                                Help
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="bg-[#131921] py-4 text-center text-xs text-gray-400 animate-fadeIn">
                &copy; {new Date().getFullYear()} Shop. Inspired by Amazon. All rights reserved. For educational purposes.
            </div>
        </footer>
    );
}

// Add these styles to your global CSS or Tailwind config for fadeIn animation
/*
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px);}
  to { opacity: 1; transform: translateY(0);}
}
.animate-fadeIn {
  animation: fadeIn 0.7s ease;
}
*/