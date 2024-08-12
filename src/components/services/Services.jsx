import { useQuery } from "@tanstack/react-query";
import { productsDataFn } from "../../utils/tanstactQueryFns";
import ProductCard from "./ProductCard";

function Services() {
  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: productsDataFn,
  });

  if (isLoading) return <h3>Data is fetching</h3>;
  if (isError) return <h3>{error.message}</h3>;

  return (
    <div className="w-10/12 mx-auto grid grid-cols-3 gap-5">
      {products &&
        products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  );
}

export default Services;
