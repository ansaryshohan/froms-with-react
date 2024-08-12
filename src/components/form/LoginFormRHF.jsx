import { Button } from "flowbite-react";
import { useForm } from "react-hook-form";
import Field from "./Field";
import { useAuthContext } from "../../contexts/ContextHooks";
import { useNavigate } from "react-router-dom";

function LoginFormRHF() {
  const {logInWithEmailPass}= useAuthContext();
  const navigate= useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const handleFormSubmit =async (formData) => {
    try {
      await logInWithEmailPass(formData.email,formData.password);
      navigate("/home")
    } catch (error) {
      console.error(error)
      setError("root.random", {
        message: "invalid credentials",
        type: "random",
      });
    }
  };

  return (
    <div className="w-1/2 px-10 mx-auto">
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <Field label={"Email Address"} error={errors.email}>
          <input
            {...register("email", { required: "email is required" })}
            className={`w-11/12 px-2 py-2 text-base  outline-none focus:outline-none border-0 border-b border-gray-500 mb-1`}
            type="email"
            name="email"
            id="email"
            placeholder="Enter Your Email"
          />
        </Field>
        <Field label={"Password"} error={errors.password}>
          <input
            {...register("password", {
              required: "password is required",
              minLength: {
                value: 6,
                message: "password must be above 6 character",
              },
              maxLength: {
                value: 20,
                message: "password can not be above 20 char",
              },
            })}
            className={`w-11/12 px-2 py-2 text-base outline-none focus:outline-none border-0 border-b border-gray-500 mb-1`}
            type="password"
            name="password"
            id="password"
            placeholder="Enter Your password"
          />
        </Field>
        {
          <div className="text-sm text-red-700 font-medium mt-4">
            {errors?.root?.random?.message}
          </div>
        }
        <Field>
          <Button type="submit" className="mt-5">
            Login
          </Button>
        </Field>
      </form>
    </div>
  );
}

export default LoginFormRHF;
