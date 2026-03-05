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

  return (
    <div
      onClick={toProduct}
      className="cursor-pointer transition-shadow hover:shadow-lg flex flex-col bg-white items-center p-4 gap-3 rounded-xl max-w-sm border border-gray-200"
    >
      <div className="w-full h-56 flex items-center justify-center overflow-hidden rounded-xl bg-gray-100">
        <img
          src={thumbnail}
          alt={title}
          className="object-cover w-full h-full"
        />
      </div>
      <p className="px-2 text-xs text-gray-400 self-start uppercase tracking-wide">{category}</p>
      <h2 className="text-lg font-semibold text-gray-800 self-start">{title}</h2>
      <p className="text-orange-500 font-bold text-xl self-start">${price.toFixed(2)}</p>
    </div>
  );
}