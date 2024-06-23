import { SectionHeading } from "@/components/sectionHeading/SectionHeading";
import { Banner } from "./Banner";
import { TopDeliveryHero } from "./TopDeliveryHero/TopDeliveryHero";
import { FeaturedSection } from "./FeaturedSection/FeaturedSection";
import { useLoaderData } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <Banner />
      <div className="px-[6%] md:px-[10%]">
        <div className="py-10">
          <SectionHeading
            heading="Experience Our Features"
            subheading="Real-time updates, secure tracking, and dedicated support make us your top choice. Join our satisfied users today!"
          />
          <FeaturedSection />
        </div>
        <div className="py-10">
          <SectionHeading
            heading="Top Delivery Heroes"
            subheading="Meet our top three delivery experts, ensuring swift and secure parcel delivery with dedication and reliability"
          />
          <TopDeliveryHero />
        </div>
      </div>
    </div>
  );
};
