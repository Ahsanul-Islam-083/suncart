import ProductCard from "./ProductCard";


const PopularProducts = async () => {

    const res = await fetch('https://suncart-sigma.vercel.app/data.json');
    const products = await res.json();
    // console.log(products);


    return (
        <div>
            <h1 className="animate__animated animate__bounceInRight animate__slow text-center text-3xl font-bold">🔥 Popular Products</h1>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 animate__animated animate__bounceInUp animate__slow ">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

        </div>
    );
};

export default PopularProducts;
