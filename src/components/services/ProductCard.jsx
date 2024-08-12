import { Link } from "react-router-dom";

function ProductCard({
  product: { id, title, description, tags, price, image },
}) {
  return (
    <div className=" shadow-xl p-4 rounded-xl bg-slate-300">
      <img
        src={image}
        alt=""
        className="w-full h-48 object-cover object-center"
      />
      <h3>{title}</h3>
      <p>{description.slice(0, 25)}</p>
      <ul className=" flex justify-start items-center gap-5 my-2">
        {tags.map((tag, idx) => (
          <li
            key={idx}
            className="bg-orange-400 text-white text-sm font-medium px-2 rounded-md"
          >
            {tag}
          </li>
        ))}
      </ul>
      <div className="flex justify-between items-center gap-6 mt-3 ">
        <p className="text-lg font-semibold text-red-400">Price : ${price}</p>
        <div>
          <button className="px-5 py-1 rounded-xl text-lg bg-orange-400 mr-1 text-white">
            <Link to={`/product/edit/${id}`}>Edit</Link>
          </button>
          <button className="px-5 py-1 rounded-xl text-lg bg-lime-400 text-white">
            <Link to={`/product/${id}`}>Details</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
