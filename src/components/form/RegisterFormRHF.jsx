import { useForm } from "react-hook-form";

function RegisterFormRHF() {
  const {register,handleSubmit,formState:{errors}}= useForm()
  return (
    <div>
      <h3 className="text-center text-2xl text-green-500 font-medium" >Register With React Hook Form</h3>
    </div>
  )
}

export default RegisterFormRHF