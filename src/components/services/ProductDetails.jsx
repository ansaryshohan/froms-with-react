import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { productDataFn } from "../../utils/tanstactQueryFns";

function ProductDetails() {
  const { id } = useParams();
  const {
    data: product,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["products", id],
    queryFn: productDataFn,
  });

  if (isLoading) return <h3>Data is fetching</h3>;
  if (isError) return <h3>{error.message}</h3>;

  const { title, description, tags, price, image } = product;

  return (
    <div className="w-full h-[50vh] flex justify-center items-center">
      {product && (
        <div className="shadow-xl p-4 rounded-xl bg-slate-300">
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
            <p className="text-lg font-semibold text-red-400">
              Price : ${price}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
