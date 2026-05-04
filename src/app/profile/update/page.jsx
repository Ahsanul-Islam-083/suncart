"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Card, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { FiCheck, FiArrowLeft } from "react-icons/fi";
import Link from "next/link";

const UpdateProfilePage = () => {
    const { data } = authClient.useSession();
    const user = data?.user;
    const router = useRouter();

    const onSubmit = async (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const image = e.target.image.value;

        const { error } = await authClient.updateUser({
            name,
            image,
        });

        if (!error) {
            toast.success("Profile updated successfully! 🎉");
            router.push("/profile");
        } else {
            toast.error(error.message || "Something went wrong. Please try again.");
        }
    };

    return (
        <div className="max-w-2xl mx-auto px-4 pt-16">

            <h1 className="text-2xl font-bold text-black mb-8">Update Profile</h1>

            <Card className="w-full p-8">
                <Form className="flex flex-col gap-5" onSubmit={onSubmit}>

                    <TextField isRequired name="name" type="text" className="w-full" defaultValue={user?.name}>
                        <Label>Full Name</Label>
                        <Input placeholder="Your Name" />
                        <FieldError />
                    </TextField>


                    <TextField isRequired name="image" type="text" className="w-full" defaultValue={user?.image}>
                        <Label>Profile Image URL</Label>
                        <Input placeholder="https://example.com/photo.jpg" />
                        <FieldError />
                    </TextField>


                    <Button type="submit" radius="full" className="bg-black text-white text-sm font-medium hover:opacity-80 w-full mt-2">
                        <FiCheck size={15} />
                        Update Information
                    </Button>
                </Form>
                <div className="flex justify-center items-center mt-2.5">
                    <Link href="/profile" className="flex items-center gap-2 text-sm text-gray-500 hover:text-cyan-600 hover:font-medium transition-colors mb-8">
                        <FiArrowLeft size={16} />
                        Back to Profile
                    </Link>
                </div>
            </Card>
        </div>
    );
};

export default UpdateProfilePage;