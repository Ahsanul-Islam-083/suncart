
import Banner from "@/components/Banner";
import PopularProducts from "@/components/PopularProducts";
import SummerCareTips from "@/components/SummerCareTips";
import { Button } from "@heroui/react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto ">
      <Banner/>
      <PopularProducts/>
      <SummerCareTips/>
    </div>
  );
}
