"use client";

import { useState } from "react";
import Image from "next/image";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import {
    Button,
    FieldError,
    Form,
    Input,
    Label,
    Separator,
    TextField,
} from "@heroui/react";
import Link from "next/link";
import "animate.css";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";
import { useSearchParams } from "next/navigation";


const SignInPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const searchParams = useSearchParams();
    const callbackURL = searchParams.get("callbackURL") || "/";


    const onSubmit = async (e) => {
        e.preventDefault();


        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log({ email, password });

        const { data, error } = await authClient.signIn.email({
            email,
            password,
            callbackURL: callbackURL,
        });

        console.log({ data, error });

        if (!error) {
            toast.success("Welcome back to SunCart! 👋");

        } else {
            toast.error(error.message || "Invalid email or password.");
        }

    };

    const handleGoogleSignIn = async () => {
        // console.log("Google Sign In");
        const { data, error } = await authClient.signIn.social({
            provider: "google",
            callbackURL: callbackURL,
        });
        if (!error) {
            toast.success("Welcome to SunCart 🎉");
        } else {
            toast.error(error.message || "Something went wrong. Please try again.");
        }
    };

    return (
        <div
            className="min-h-screen flex items-center justify-center bg-cover bg-center px-4 py-6 overflow-y-auto"
            style={{ backgroundImage: "url('https://i.ibb.co.com/d4QgtKTC/bg1.jpg')" }}
        >
            <div className="animate__animated animate__fadeInUp bg-white/90 backdrop-blur-md rounded-3xl shadow-xl flex overflow-hidden max-w-5xl w-full my-4">

                {/* LEFT SIDE */}
                <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-10">
                    <h1 className="text-xl sm:text-2xl font-bold mb-1 text-black">Sign In</h1>
                    <p className="text-sm text-gray-500 mb-5">Welcome back to SunCart</p>

                    <Form className="flex flex-col gap-4" onSubmit={onSubmit}>


                        <TextField isRequired name="email" type="email" className="w-full" validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) return "Please enter a valid email address";
                            return null;
                        }}>
                            <Label>Email</Label>
                            <Input placeholder="john@example.com" />
                            <FieldError />
                        </TextField>


                        <TextField isRequired name="password" type={showPassword ? "text" : "password"} className="w-full">
                            <Label>Password</Label>
                            <div className="relative w-full">
                                <Input placeholder="Enter your password" className="w-full" />
                                <span onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400 hover:text-black transition z-10">
                                    {showPassword ? <FaEyeSlash size={15} /> : <FaEye size={15} />}
                                </span>
                            </div>
                            <FieldError />
                        </TextField>


                        <Button
                            type="submit"
                            radius="full"
                            className="w-full bg-cyan-500 text-white text-sm font-medium hover:bg-cyan-600 mt-2"

                        >
                            <FiLogIn size={15} />
                            Login
                        </Button>


                        <div className="flex items-center gap-3 my-1">
                            <Separator className="flex-1" />
                            <span className="text-xs text-gray-400">or continue with</span>
                            <Separator className="flex-1" />
                        </div>

                        <Button
                            type="button"
                            onPress={handleGoogleSignIn}
                            variant="bordered"
                            radius="full"
                            className="w-full border-2 border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 text-sm font-medium"

                        >
                            <FaGoogle size={16} className="text-red-500" />
                            Sign in with Google
                        </Button>

                        <p className="text-sm text-center text-gray-500 mt-2">
                            Don&apos;t have an account?{" "}
                            <Link href="/register" className="text-cyan-500 font-medium hover:underline">
                                Register
                            </Link>
                        </p>
                    </Form>
                </div>


                <div className="hidden md:block w-1/2 p-4">
                    <div className="relative h-full w-full min-h-125 rounded-2xl overflow-hidden">
                        <Image
                            src="https://i.ibb.co.com/d4QgtKTC/bg1.jpg"
                            alt="nature"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-black/20 flex flex-col justify-end p-6">
                            <h2 className="text-white text-xl font-bold">Welcome back.</h2>
                            <p className="text-white/80 text-sm mt-1">Sign in to continue shopping with SunCart.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SignInPage;