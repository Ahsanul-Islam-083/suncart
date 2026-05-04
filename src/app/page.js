
import Banner from "@/components/Banner";
import PopularProducts from "@/components/PopularProducts";
import SummerCareTips from "@/components/SummerCareTips";
import TopBrands from "@/components/TopBrands";


export default function Home() {
  return (
    <div className="container mx-auto ">
      <Banner/>
      <PopularProducts/>
      <SummerCareTips/>
      <TopBrands/>
    </div>
  );
}
