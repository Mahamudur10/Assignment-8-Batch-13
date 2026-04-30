import Banner from "@/components/Banner";
import FeaturedBooks from "@/components/FeaturedBooks";
import Marquee from "@/components/Marquee ";
import Newsletter from "@/components/Newsletter";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner/>
      <Marquee/>
      <FeaturedBooks/>
      <WhyChooseUs/>
      <Newsletter/>
    </div>
  );
}
