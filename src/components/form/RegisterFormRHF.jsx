import { Button } from "flowbite-react";
import { useForm } from "react-hook-form";
import Field from "./Field";

function RegisterFormRHF() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const handleFormSubmit = (formData) => {
    const passwordMatch = formData.password === formData.confirm;
    if (!passwordMatch) {
      setError("register.passwordMatch", {
        message: "password and confirm field unmatched",
      });
    }
    console.log(formData);
  };

  const validatePassword = (value) => {
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const numberRegex = /[0-9]/;
    const specialCharRegex = /[^A-Za-z0-9]/;

    if (!uppercaseRegex.test(value)) {
      return "Password must contain at least one uppercase letter.";
    } else if (!lowercaseRegex.test(value)) {
      return "Password must contain at least one lowercase letter.";
    } else if (!numberRegex.test(value)) {
      return "Password must contain at least one number.";
    } else if (!specialCharRegex.test(value)) {
      return "Password must contain at least one special character.";
    }
    return true;
  };

  return (
    <div className="w-2/3 px-10 mx-auto pb-20">
      <h3 className="text-center text-2xl text-green-500 font-medium mt-5 mb-10">
        Register With React Hook Form
      </h3>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <Field label={"First Name"} error={errors.firstName}>
          <input
            {...register("firstName", { required: "name is required" })}
            className="w-full border-0 border-b-2 border-b-indigo-600 outline-0 mb-4"
            type="text"
            name="firstName"
            id="firstName"
            placeholder="Enter your first name"
          />
        </Field>
        <Field label={"Last Name"} error={errors.lastName}>
          <input
            {...register("lastName", { required: "name is required" })}
            className="w-full border-0 border-b-2 border-b-indigo-600 outline-0"
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Enter your last name"
          />
        </Field>

        <Field label={"Email"} error={errors.email}>
          <input
            {...register("email", { required: "email is required" })}
            className="w-full border-0 border-b-2 border-b-indigo-600 outline-0"
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
          />
        </Field>
        <Field label={"Password"} error={errors.password}>
          <input
            {...register("password", {
              required: "password is required",
              minLength: {
                value: 6,
                message: "password must be at least 6 character",
              },
              // pattern:{
              //   value:/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/,
              //   message:"password must contain this pattern",
              // }
              validate: validatePassword,
            })}
            className="w-full border-0 border-b-2 border-b-indigo-600 outline-0"
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
          />
        </Field>
        <Field label={"Confirm Password"} error={errors.confirm}>
          <input
            {...register("confirm", {
              required: "confirm password is required",
            })}
            className="w-full border-0 border-b-2 border-b-indigo-600 outline-0"
            type="password"
            name="confirm"
            id="confirm"
            placeholder="Confirm your password"
          />
        </Field>

        <p className="mt-5 mb-2 text-red-600 text-sm font-medium">
          {" "}
          {errors?.register?.passwordMatch?.message}{" "}
        </p>

        <Field>
          <Button
            type="submit"
            gradientDuoTone="greenToBlue"
            className="mt-8 mx-auto"
          >
            Register
          </Button>
        </Field>
      </form>
    </div>
  );
}

export default RegisterFormRHF;
