"use client";

import { useState } from "react";
import Image from "next/image";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { FiCheck } from "react-icons/fi";
import {
    Description,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
    Checkbox,
} from "@heroui/react";
import "animate.css";
import Link from "next/link";

export default function SignUpPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [agreed, setAgreed] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const image = e.target.image.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log({ name, image, email, password });
    };

    const handleGoogleSignIn = () => {
        console.log("Google Sign In");
    };

    return (
        <div
            className="min-h-screen flex items-center justify-center bg-cover bg-center px-4 py-6 overflow-y-auto"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470')" }}
        >
            <div className="animate__animated animate__fadeInUp bg-white/90 backdrop-blur-md rounded-3xl shadow-xl flex overflow-hidden max-w-5xl w-full my-4">

                {/* LEFT SIDE */}
                <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-10">
                    <h1 className="text-xl sm:text-2xl font-bold mb-1 text-black">Register</h1>
                    <p className="text-sm text-gray-500 mb-5">Create your SunCart account</p>

                    <Form className="flex flex-col gap-4" onSubmit={onSubmit}>

                        {/* NAME */}
                        <TextField isRequired name="name" type="text" className="w-full">
                            <Label>Full Name</Label>
                            <Input placeholder="Your Name" />
                            <FieldError />
                        </TextField>

                        {/* IMAGE URL */}
                        <TextField isRequired name="image" type="text" className="w-full">
                            <Label>Profile Image URL</Label>
                            <Input placeholder="https://example.com/photo.jpg" />
                            <FieldError />
                        </TextField>

                        {/* EMAIL */}
                        <TextField isRequired name="email" type="email" className="w-full" validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) return "Please enter a valid email address";
                            return null;
                        }}>
                            <Label>Email</Label>
                            <Input placeholder="john@example.com" />
                            <FieldError />
                        </TextField>

                        {/* PASSWORD */}
                        <TextField isRequired name="password" minLength={8} type={showPassword ? "text" : "password"} className="w-full" validate={(value) => {
                            if (value.length < 8) return "Password must be at least 8 characters";
                            if (!/[A-Z]/.test(value)) return "Must contain at least one uppercase letter";
                            if (!/[0-9]/.test(value)) return "Must contain at least one number";
                            return null;
                        }}>
                            <Label>Password</Label>
                            <div className="relative w-full">
                                <Input placeholder="Enter your password" className="w-full" />
                                <span onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400 hover:text-black transition z-10">
                                    {showPassword ? <FaEyeSlash size={15} /> : <FaEye size={15} />}
                                </span>
                            </div>
                            <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                            <FieldError />
                        </TextField>

                        {/* TERMS */}
                        <Checkbox isSelected={agreed} onValueChange={setAgreed} size="sm" classNames={{ label: "text-sm text-gray-600" }}>
                            I agree to <span className="text-cyan-500 cursor-pointer hover:underline">Terms & Conditions</span>
                        </Checkbox>

                        {/* BUTTONS */}
                        <div className="flex flex-wrap gap-3 mt-2">
                            <button type="submit" className="flex items-center gap-2 bg-cyan-500 text-white rounded-full px-6 py-2.5 text-sm font-medium hover:bg-cyan-600 transition-all">
                                <FiCheck size={15} />
                                Register
                            </button>
                            <Link href={'/signin'}><button className="flex items-center gap-2 border border-cyan-500 text-cyan-500 rounded-full px-6 py-2.5 text-sm font-medium hover:bg-cyan-50 transition-all">
                                Sign In
                            </button></Link>
                        </div>

                        {/* DIVIDER */}
                        <div className="flex items-center gap-3 my-1">
                            <div className="flex-1 h-px bg-gray-200" />
                            <span className="text-xs text-gray-400">or continue with</span>
                            <div className="flex-1 h-px bg-gray-200" />
                        </div>

                        {/* GOOGLE */}
                        <button type="button" onClick={handleGoogleSignIn} className="w-full flex items-center justify-center gap-3 border border-gray-200 rounded-full py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all">
                            <FaGoogle size={16} className="text-red-500" />
                            Sign in with Google
                        </button>
                    </Form>
                </div>

                {/* RIGHT SIDE IMAGE */}
                <div className="hidden md:block w-1/2 p-4">
                    <div className="relative h-full w-full min-h-[560px] rounded-2xl overflow-hidden">
                        <Image
                            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
                            alt="nature"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-black/20 flex flex-col justify-end p-6">
                            <h2 className="text-white text-xl font-bold">Shop smarter.</h2>
                            <p className="text-white/80 text-sm mt-1">Quality products delivered to your door.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}