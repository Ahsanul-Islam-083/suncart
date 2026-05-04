
import Marquee from "react-fast-marquee";
import BrandCard from "./BrandCard";

const TopBrands = async () => {
    const res = await fetch("https://suncart-sigma.vercel.app/brands.json", { cache: "no-store" });
    const brands = await res.json();

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-black">Top Brands</h2>
                <p className="text-sm text-gray-500 mt-2 max-w-md mx-auto">
                    Shop from the most trusted names in summer fashion and skincare.
                </p>
            </div>

            <Marquee speed={40} gradient={true} gradientColor="white" gradientWidth={80} pauseOnHover={true}>
                {brands.map((brand) => (
                    <BrandCard key={brand.id} brand={brand} />
                ))}
            </Marquee>
        </section>
    );
};

export default TopBrands;