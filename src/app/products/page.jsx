import ProductCard from "@/components/ProductCard";

const AllProducts = async () => {
    const res = await fetch('https://suncart-sigma.vercel.app/data.json');
    const products = await res.json();
    return (
        <div className="container mx-auto space-y-10 mt-10 w-full">
            <h1 className="animate__animated animate__bounceInDown animate__slow text-center text-3xl font-bold">All Products</h1>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 animate__animated animate__bounceInLeft animate__slow ">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default AllProducts;