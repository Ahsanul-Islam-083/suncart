// app/profile/page.jsx
"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar, Button, Card } from "@heroui/react";
import Link from "next/link";
import { FiEdit2 } from "react-icons/fi";

const ProfilePage = () => {
    const { data } = authClient.useSession();
    const user = data?.user;

    return (
        <div className="max-w-2xl mx-auto px-4 py-16">
            <h1 className="text-2xl font-bold text-black mb-8">My Profile</h1>

            <Card className="w-full p-8 flex flex-col items-center gap-5">
                <Avatar className="w-20 h-20">
                    <Avatar.Image
                        alt={user?.name}
                        src={user?.image}
                        referrerPolicy="no-referrer" />
                    <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                </Avatar>
                <div className="text-center">
                    <h2 className="text-xl font-bold text-black">{user?.name}</h2>
                    <p className="text-sm text-gray-500 mt-1">{user?.email}</p>
                </div>

                <Link href="/profile/update">
                    <Button radius="full" className="bg-black text-white text-sm font-medium hover:opacity-80">
                        <FiEdit2 size={14} />
                        Update Profile
                    </Button>
                </Link>
            </Card>
        </div >
    );
};

export default ProfilePage;