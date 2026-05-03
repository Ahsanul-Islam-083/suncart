import Image from "next/image";
import Link from "next/link";
import { Card, Button, Chip } from "@heroui/react";
import { FiStar, FiShoppingCart } from "react-icons/fi";

const ProductCard = ({ product }) => {
    return (
        <Card className="w-full hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            {/* Image */}
            <div className="relative w-full aspect-square overflow-hidden">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 300px"
                    className="object-cover hover:scale-105 transition-transform duration-300"
                />
               
                <Chip
                    size="sm"
                    className="absolute top-2 left-2"
                >
                    {product.category}
                </Chip>
            </div>

            
            <div className="p-3 space-y-2">
                
                <p className="text-xs text-gray-400 uppercase tracking-wide">{product.brand}</p>

                {/* Product Name */}
                <h3 className="text-sm font-semibold text-gray-800 dark:text-white line-clamp-2 leading-snug">
                    {product.name}
                </h3>

                
                <div className="flex items-center gap-1">
                    <FiStar size={13} className="text-yellow-400 fill-yellow-400" />
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{product.rating}</span>
                    <span className="text-xs text-gray-400">/5</span>
                </div>

                
                <p className="text-lg font-bold text-black dark:text-white">${product.price}</p>
            </div>

            
            <div className="px-3 pb-3">
                <Link href={`/products/${product.id}`} className="w-full">
                    <Button className="w-full bg-black text-white dark:bg-white dark:text-black font-medium rounded-full text-sm hover:opacity-90 transition-opacity">
                        <FiShoppingCart size={15} />
                        View Details
                    </Button>
                </Link>
            </div>
        </Card>
    );
};

export default ProductCard;