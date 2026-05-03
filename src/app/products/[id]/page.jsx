import Image from "next/image";
import { Chip, Separator } from "@heroui/react";
import { FiStar, FiPackage, FiShield, FiTruck, FiShoppingCart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";

const ProductDetailsPage = async ({ params }) => {
    const { id } = await params;

    const res = await fetch("https://suncart-sigma.vercel.app/data.json", { cache: "no-store" });
    const products = await res.json();
    const product = products.find((p) => p.id === Number(id));

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-gray-500 text-lg">Product not found.</p>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">

                {/* Left — Image */}
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-900">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover hover:scale-105 transition-transform duration-300"
                        priority
                    />
                </div>

                {/* Right — Details */}
                <div className="flex flex-col gap-5">

                   
                    <div className="flex items-center gap-2 flex-wrap">
                        <Chip size="sm">
                            {product.category}
                        </Chip>
                        <Chip color="warning" size="sm">
                            {product.brand}
                        </Chip>
                    </div>

                  
                    <h1 className="text-2xl sm:text-3xl font-bold text-black dark:text-white leading-tight">
                        {product.name}
                    </h1>

                    <div className="flex items-center gap-2">
                        <div className="flex items-center gap-0.5">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <FiStar
                                    key={star}
                                    size={16}
                                    className={star <= Math.round(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                                />
                            ))}
                        </div>
                        <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{product.rating}</span>
                        <span className="text-sm text-gray-400">/ 5</span>
                    </div>

                    <div className="flex items-baseline gap-3">
                        <span className="text-3xl font-bold text-black dark:text-white">${product.price}</span>
                        <span className="text-sm text-gray-400 line-through">${(product.price * 1.2).toFixed(2)}</span>
                        <Chip size="sm" className="bg-green-100 text-green-700 text-xs font-semibold">20% OFF</Chip>
                    </div>

                    <Separator />


                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {product.description}
                    </p>


                    <p className={`text-sm font-medium ${product.stock > 0 ? "text-green-600" : "text-red-500"}`}>
                        {product.stock > 0 ? `${product.stock} items in stock` : "Out of stock"}
                    </p>

                    <Separator />

                    <div className="flex flex-col sm:flex-row gap-3">
                        <button className="flex-1 flex items-center justify-center gap-2 bg-black text-white dark:bg-white dark:text-black font-medium rounded-full py-3 px-6 hover:opacity-90 transition-opacity text-sm">
                            <FiShoppingCart size={16} />
                            Add to Cart
                        </button>
                        <button className="flex-1 flex items-center justify-center gap-2 border border-black dark:border-white text-black dark:text-white font-medium rounded-full py-3 px-6 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all text-sm">
                            Buy Now
                        </button>
                        <button className="flex items-center justify-center p-3 rounded-full border border-gray-200 dark:border-white/10 hover:border-red-400 hover:text-red-500 transition-all text-gray-500">
                            <FaHeart size={16} />
                        </button>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mt-2">
                        <div className="flex flex-col items-center gap-1.5 text-center p-3 rounded-xl bg-gray-50 dark:bg-white/5">
                            <FiTruck size={18} className="text-black dark:text-white" />
                            <span className="text-xs text-gray-600 dark:text-gray-400">Free Delivery</span>
                        </div>
                        <div className="flex flex-col items-center gap-1.5 text-center p-3 rounded-xl bg-gray-50 dark:bg-white/5">
                            <FiPackage size={18} className="text-black dark:text-white" />
                            <span className="text-xs text-gray-600 dark:text-gray-400">Easy Returns</span>
                        </div>
                        <div className="flex flex-col items-center gap-1.5 text-center p-3 rounded-xl bg-gray-50 dark:bg-white/5">
                            <FiShield size={18} className="text-black dark:text-white" />
                            <span className="text-xs text-gray-600 dark:text-gray-400">2yr Warranty</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsPage;