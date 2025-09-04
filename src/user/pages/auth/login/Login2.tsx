import { zodResolver } from "@hookform/resolvers/zod";
import "./Login.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { BASE_URL2 } from "../../../components/constants/BASEURL";
import axios, { AxiosError } from "axios";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/button/Button";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(4).max(12),
});
// .refine((data) => data.password === data.confirmpassword,{
//   message: "Passwords do not match",
//   path: ["confirmpassword"],
// });

type FormFields = z.infer<typeof schema>;

// type FormFields = {
//   email: string;
//   password: string;
// };
const Login2 = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormFields> = async (data: FormFields) => {
    try {
      const response = await axios.post(`${BASE_URL2}/users/login`, data,{
      });
      // await new Promise((resolve) => setTimeout(resolve, 1000));
      // throw new Error();
      console.log(response);
      console.log("login succesfully sent");

      // save token
      localStorage.setItem("auth-token", (await response).data.token);
      // redirect to dashboard
      // toast
      toast.success("Used logged in successfully", {
        onClose: () => navigate("/"),
      });
    } catch (error) {
      const err = error as AxiosError<{message:string}>;
      toast.error(err.response?.data.message)
    }
  };

  return (
    <>
    <ToastContainer/>
      <form
        className="flex p-5 flex-col  w-[50]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          {...register("email")}
          type="text"
          placeholder="email"
          className="border mb-3 p-4"
        />
        {errors.email && (
          <div className="text-red-500">{errors.email.message}</div>
        )}
        <input
          {...register("password")}
          type="password"
          placeholder="password"
          className="border mb-3 p-4"
        />
        {errors.password && (
          <div className="text-red-500">{errors.password.message}</div>
        )}
        <button
          disabled={isSubmitting}
          type="submit"
          className="bg-red-800 border-none text-white disabled:!bg-slate-400"
        >
          {isSubmitting ? "loading..." : "login"}
        </button>
        <Button label={isSubmitting ? "loading..." : "login"} className="disabled:!bg-black"/>
        {errors.root && (
          <div className="text-red-500">{errors.root.message}</div>
        )}
      </form>
    </>
  );
};

export default Login2;
