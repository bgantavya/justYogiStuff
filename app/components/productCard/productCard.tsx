import { useNavigate } from "react-router";

type Props = {
  id: string;
  title: string;
  thumbnail: string;
  category: string;
  price: number;
};

export default function ProductCard({ id, title, thumbnail, category, price }: Props) {
  const navigate = useNavigate();
  const toProduct = () => navigate(`/product/${id}`);
  // console.log(thumbnail)
  return (
    <div
      onClick={toProduct}
      className="cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex flex-col bg-white items-center p-4 gap-4 rounded-2xl max-w-xs sm:max-w-sm border border-gray-200 hover:border-orange-400 group"
      tabIndex={0}
      role="button"
      aria-label={`View details for ${title}`}
      onKeyDown={e => { if (e.key === "Enter" || e.key === " ") toProduct(); }}
    >
      <div className="w-full h-48 sm:h-56 flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-tr from-gray-100 to-gray-200 relative">
        <img
          src={thumbnail}
          alt={title}
          className="object-cover w-full h-full scale-100 group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <span className="absolute top-2 right-2 bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded-full font-medium shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          View
        </span>
      </div>
      <div className="w-full flex flex-col gap-1">
        <p className="text-xs text-gray-400 uppercase tracking-wider font-medium">{category}</p>
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 truncate">{title}</h2>
      </div>
      <div className="w-full flex items-center justify-between mt-2">
        <p className="text-orange-500 font-bold text-xl">₹{price.toFixed(2)}</p>
        <button
          className="bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold px-4 py-2 rounded-lg shadow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
          onClick={e => { e.stopPropagation(); toProduct(); }}
          tabIndex={-1}
        >
          Buy Now
        </button>
      </div>
    </div>
        // </>
  );
}