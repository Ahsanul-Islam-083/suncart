"use client";

import Marquee from "react-fast-marquee";
import BrandCard from "./BrandCard";

const BrandsMarquee = ({ brands }) => {
    return (
        <Marquee speed={40} gradient={true} gradientColor="white" gradientWidth={80} pauseOnHover={true}>
            {brands.map((brand) => (
                <BrandCard key={brand.id} brand={brand} />
            ))}
        </Marquee>
    );
};

export default BrandsMarquee;