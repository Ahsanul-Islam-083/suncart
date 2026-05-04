"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import { FiLogOut } from "react-icons/fi";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    const { data } = authClient.useSession();
    const user = data?.user;

    const handleSignOut = async () => {
        await authClient.signOut();
        router.push("/");
    };

    const menuItems = [
        { name: "Home", href: "/" },
        { name: "Products", href: "/products" },
        { name: "My Profile", href: "/profile" },
    ];

    const isActive = (href) => {
        if (href === "/") return pathname === "/";
        return pathname.startsWith(href);
    };

    return (
        <nav className="relative w-full border-b border-gray-100 bg-white/80 backdrop-blur-md z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">

                  
                    <Link href="/" className="flex items-center gap-2 shrink-0">
                        <Image src="/logo.png" alt="SunCart logo" width={30} height={30} priority className="w-auto h-auto" />
                        <span className="font-black text-2xl tracking-tight">SunCart</span>
                    </Link>

                    {/* Desktop Navbar */}
                    <div className="hidden md:flex items-center gap-8">
                        {menuItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`text-sm font-medium transition-colors relative pb-0.5 ${isActive(item.href)
                                    ? "text-black after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-black after:rounded-full"
                                    : "text-gray-500 hover:text-black"
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop Auth */}
                    <div className="hidden md:flex items-center gap-2">
                        {!user ? (
                            <>
                                <Link href="/signin" className="text-sm px-5 py-2 rounded-full border-2 font-medium text-gray-600 hover:text-black transition-colors hover:bg-gray-100">
                                    Sign In
                                </Link>
                                <Link href="/register" className="px-5 py-2 bg-black text-white rounded-full text-sm font-semibold hover:opacity-80 transition-all">
                                    Register
                                </Link>
                            </>
                        ) : (
                            <div className="flex items-center gap-3">
                                <p className="text-sm font-medium text-gray-700">Hi ! {user?.name?.split(" ")[0]}</p>
                                <Avatar size="sm">
                                    <Avatar.Image
                                        alt={user?.name}
                                        src={user?.image}
                                        referrerPolicy="no-referrer" />
                                    <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                                </Avatar>
                                {/* used onPres cause it works on Mouse, touch, keyboard (Enter/Space)*/}
                                <Button onPress={handleSignOut} size="sm" variant="" radius="full" className="border-2 hover:bg-gray-100">
                                    <FiLogOut size={13} />
                                    Sign Out
                                </Button>
                            </div>
                        )}
                    </div>

                    {/* Mobile Menu*/}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 p-2 focus:outline-none">
                            {isMenuOpen ? <HiX size={26} /> : <HiMenuAlt3 size={26} />}
                        </button>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden absolute top-16 left-0 w-full bg-white border-b border-gray-100 shadow-xl">
                    <div className="px-4 pt-2 pb-6 space-y-1">

                        {menuItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsMenuOpen(false)}
                                className={`flex items-center justify-between px-3 py-4 text-sm font-semibold border-b border-gray-50 transition-colors ${isActive(item.href) ? "text-black" : "text-gray-600"}`}
                            >
                                {item.name}
                                {isActive(item.href) && <span className="w-1.5 h-1.5 rounded-full bg-black" />}
                            </Link>
                        ))}

                     
                        {user ? (
                            <div className="pt-4 flex flex-col items-center gap-3">
                                <Avatar size="sm">
                                    <Avatar.Image
                                        alt={user?.name}
                                        src={user?.image}
                                        referrerPolicy="no-referrer" />
                                    <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                                </Avatar>
                                <p className="text-sm font-medium text-gray-700">Hi, {user?.name?.split(" ")[0]}</p>
                                <Button onPress={handleSignOut} size="sm" variant="" radius="full" className="border-2 border-gray-200 text-gray-600 text-xs">
                                    <FiLogOut size={13} />
                                    Sign Out
                                </Button>
                            </div>
                        ) : (
                            <div className="pt-4 flex flex-col gap-3 px-3">
                                <Link href="/signin" onClick={() => setIsMenuOpen(false)} className="text-center py-2.5 text-sm text-gray-600 font-medium border border-gray-200 rounded-full hover:bg-gray-50 transition-all">
                                    Sign In
                                </Link>
                                <Link href="/register" onClick={() => setIsMenuOpen(false)} className="text-center py-2.5 text-sm bg-black text-white rounded-full font-semibold hover:opacity-80 transition-all">
                                    Register
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;