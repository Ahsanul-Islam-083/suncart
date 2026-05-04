// app/not-found.jsx
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import { Button } from "@heroui/react";

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">

            {/* Big 404 */}
            <h1 className="text-[120px] sm:text-[180px] font-black text-gray-100 leading-none select-none">
                404
            </h1>

            {/* Text */}
            <div className="-mt-6 sm:-mt-10 flex flex-col items-center gap-3">
                <h2 className="text-2xl sm:text-3xl font-bold text-black">
                    Page Not Found
                </h2>
                <p className="text-sm text-gray-500 max-w-sm">
                    Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
                </p>
            </div>

            {/* Button */}
            <Link href="/" className="mt-8">
                <Button
                    radius="full"
                    className="bg-black text-white text-sm font-medium hover:opacity-80 px-8"
                    startContent={<FiArrowLeft size={15} />}
                >
                    Back to Home
                </Button>
            </Link>
        </div>
    );
};

export default NotFound;