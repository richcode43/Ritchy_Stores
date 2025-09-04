import { zodResolver } from "@hookform/resolvers/zod";
// import "./Login.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { BASE_URL2 } from "../../../components/constants/BASEURL";
import axios from "axios";

const schema = z.object({
  fullName: z.string().min(4).max(25),
  email: z.string().email(),
  password: z.string().min(4).max(12),
  // rememberMe: z.boolean(),
  // passwordConfirm: z.string().ref("password").min(8).strict(),
  // rememberMe: z.boolean(),
  // terms: z.boolean().true(),
  // privacyPolicy: z.boolean().true(),
  // acceptCookies: z.boolean().true(),
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
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    // defaultValues: {
    //   fullName: "",
    //   email: "",
    //   password: "",
    // },
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormFields> = async (data: FormFields) => {
    try {
      const response = axios.post(`${BASE_URL2}/users/register`, data);
      console.log("Registration successful:", response);
    //   throw new Error();
    } catch (error) {
      setError("root", {
        message: "This email is already in use",
      });
    }
  };

  return (
    <>
      <form
        className="flex p-5 flex-col  w-[50]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input 
        {...register("fullName")}
        type="text" 
        placeholder="fullname" 
        className="border mb-3 p-4" />
        {errors.fullName && (
          <div className="text-red-500">{errors.fullName.message}</div>
        )}
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
          className="bg-slate-800 border-none text-white"
        >
          {isSubmitting ? "loading..." : "Register"}
        </button>
        {errors.root && (
          <div className="text-red-500">{errors.root.message}</div>
        )}
      </form>
    </>
  );
};

export default Login2;
