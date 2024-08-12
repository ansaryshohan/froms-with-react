import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Button } from "flowbite-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { productDataFn } from "../../utils/tanstactQueryFns";
import Field from "../form/Field";

function EditProduct() {
  const navigate=useNavigate();
  const { id } = useParams();
  // tanStack query
  const queryClient = useQueryClient();
  const {
    data: product,
    isLoading,
    isError,
    isSuccess,
    
    error,
  } = useQuery({ queryKey: ["products", id], queryFn: productDataFn });

  // data editing with useMutation
  const mutation = useMutation({
    mutationKey: ["products", id],
    mutationFn: async (updatedProduct) => {
       await axios.patch(
        `http://localhost:8000/products/${updatedProduct["id"]}`,
        updatedProduct
      );
    },
    onSuccess:()=>{
      queryClient.invalidateQueries(["products"])
    }
  });

  // react hook form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      description: "",
      price: "",
      image: "",
    },
  });

  // setting the product data in the input field as default
  useEffect(() => {
    let initial = false;
    if (!initial && isSuccess) {
      reset(product);
    }
    return () => {
      initial = true;
    };
  }, [isSuccess, product, reset]);

  // handle form data on submit
  const handleFormSubmit = (formData) => {
    mutation.mutate(formData);
    navigate(`/product/${product.id}`)
  };

  if (isLoading) return <h3>Data is fetching</h3>;
  if (isError) return <h3>{error.message}</h3>;

  return (
    <div>
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className=" w-2/3 mx-auto grid items-center"
      >
        <div>
          <Field label={"product title"} error={errors.title}>
            <input
              {...register("title")}
              type="text"
              name="title"
              id="title"
              className="w-full p-2"
            />
          </Field>
        </div>
        <div>
          <Field label={"product description"} error={errors.description}>
            <input
              {...register("description")}
              type="text"
              name="description"
              id="description"
              className="w-full p-2"
            />
          </Field>
        </div>
        <div>
          <Field label={"product price"} error={errors.price}>
            <input
              {...register("price")}
              type="text"
              name="price"
              id="price"
              className="w-full p-2"
            />
          </Field>
        </div>
        <div>
          <Field label={"product image"} error={errors.image}>
            <input
              {...register("image")}
              type="text"
              name="image"
              id="image"
              className="w-full p-2"
            />
          </Field>
        </div>
        <Field>
          <Button type="submit" className="mt-5 mx-auto">
            Update
          </Button>
        </Field>
      </form>
    </div>
  );
}

export default EditProduct;
