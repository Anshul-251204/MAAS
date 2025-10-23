import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "motion/react";
import { Eye, EyeClosed } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@/hooks/useMutation";
import { userService } from "@/api/userServices";
import { toast } from "sonner";
import { useApi } from "@/hooks/useApi";
import { storeService } from "@/api/storeServices";
import { useAuthStore } from "@/store/AuthStore";
import { useStoreStore } from "@/store/Store";

const loginSchema = z.object({
  email: z.string().email("Enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginSchemaType = z.infer<typeof loginSchema>;

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [isPasswordHide, setIsPasswordHide] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
  });

  const { setUser, setToken } = useAuthStore();
  const { setStore } = useStoreStore();

  const { refetch: fetchStoreByUserId } = useApi<
    ApiResponseType<CategoryType[]>
  >((id) => storeService.getStoreByUserID(id), [], {
    onSuccess: (data) => {
      setStore(data.data as any);
      navigate("/dashboard");
    },
    onError: (err) => {
      toast.error(err.response.data.message, {
        position: "top-center",
      });
      console.log(err);
    },
    autoFetch: false,
  });

  const { mutate: handleLogin } = useMutation<ApiResponseType>(
    userService.singin,
    {
      onSuccess: (data) => {
        toast.success(data.message, {
          position: "top-center",
        });
        setUser(data.data?.user as any);
        setToken(data.data.accessToken as string);

        fetchStoreByUserId(data.data.user._id as string);

        // navigate("/dashboard");
      },
      onError: (err) => {
        if (err.response.data.message) {
          if (err.response.data.message == "Validation failed") {
            const errors = err.response.data.data;
            for (let error of Object.keys(errors)) {
              console.log("err", error);
              setError(error as any, {
                type: "manual",
                message: errors[error],
              });
            }
          }
          toast.error(err.response.data.message, {
            position: "top-center",
          });
        }
      },
    },
  );

  const onSubmit = (data: LoginSchemaType) => {
    console.log("cred details", data);
    handleLogin(data);
  };
  const changeIsPasswordHide = () => {
    setIsPasswordHide((p) => !p);
  };

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="border-border flex w-full flex-col gap-2 rounded-2xl border p-8 md:w-[35%]"
      >
        <div className="mb-4">
          <h1 className="text-xl font-bold">
            Sign in with your vendor account
          </h1>
          <h1 className="text-md">
            Enter your details below to get access of your account
          </h1>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
          {/* Email */}
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              {...register("email")}
              placeholder="m@example.com"
            />
            {errors.email && (
              <p className="text-xs text-red-500">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                id="password"
                type={isPasswordHide ? "text" : "password"}
                placeholder="secure@234"
                {...register("password")}
              />
              {isPasswordHide ? (
                <Eye
                  onClick={changeIsPasswordHide}
                  className="absolute top-3 right-2"
                  size={"1.2rem"}
                />
              ) : (
                <EyeClosed
                  onClick={changeIsPasswordHide}
                  className="absolute top-3 right-2"
                  size={"1.2rem"}
                />
              )}
            </div>
            {errors.password && (
              <p className="text-xs text-red-500">{errors.password.message}</p>
            )}
          </div>

          <Button type="submit" className="mt-4">
            {false ? (
              <span>
                Loading{" "}
                <span className="border-primary h-4 w-4 animate-spin rounded-full border-t border-l"></span>{" "}
              </span>
            ) : (
              "Sign Up 🚀"
            )}
          </Button>
        </form>

        <h1 className="text-center font-semibold">
          Already have an account?{" "}
          <span className="text-primary cursor-pointer font-semibold">
            Sign in
          </span>
        </h1>
      </motion.div>
    </div>
  );
};

export default Login;
