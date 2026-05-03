import { Button } from "@heroui/react";
import ProductCard from "./ProductCard";
import Link from "next/link";


const PopularProducts = async () => {

    const res = await fetch('https://suncart-sigma.vercel.app/data.json');
    const products = await res.json();
    const popularProducts = products.sort((a, b) => b.rating - a.rating)
    // console.log(products);


    return (
        <div className="space-y-10 mt-10">
            <h1 className="animate__animated animate__bounceInRight animate__slow text-center text-3xl font-bold">🔥 Popular Products</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 animate__animated animate__bounceInUp animate__slow ">
                {popularProducts.slice(0, 3).map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            <div className="text-center">
                <Link href={'/products'}> <Button variant="outline" className="bg-white z-10">View all products...</Button></Link>
            </div>
        </div>
    );
};

export default PopularProducts;
