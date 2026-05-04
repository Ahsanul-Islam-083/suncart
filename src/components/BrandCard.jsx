import { Card } from "@heroui/react";
import Image from "next/image";

const BrandCard = ({ brand }) => {
    return (
        <Card className="mx-4 w-52 transition-shadow duration-300 cursor-pointer group shrink-0">
            <div className="relative w-full aspect-video overflow-hidden">
                <Image
                    src={brand.image}
                    alt={brand.name}
                    fill
                    sizes="208px"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20" />
            </div>
            <div className="p-3">
                <h3 className="text-sm font-bold text-black">{brand.name}</h3>
                <p className="text-xs text-gray-500 mt-0.5">{brand.tagline}</p>
            </div>
        </Card>
    );
};

export default BrandCard;