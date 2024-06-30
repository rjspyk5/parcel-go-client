import { SectionHeading } from "@/components/sectionHeading/SectionHeading";
import { Banner } from "./Banner";
import { TopDeliveryHero } from "./TopDeliveryHero/TopDeliveryHero";
import { FeaturedSection } from "./FeaturedSection/FeaturedSection";
import { Fade } from "react-awesome-reveal";
import { Faq } from "@/components/FAQ/Faq";
import { GetInTouch } from "./GetInTouch/GetInTouch";

export const Home = () => {
  return (
    <div>
      <Fade>
        {" "}
        <Banner />
      </Fade>

      <div className="px-[6%] md:px-[10%]">
        <div className="py-10">
          <SectionHeading
            heading="Experience Our Features"
            subheading="Real-time updates, secure tracking, and dedicated support make us your top choice. Join our satisfied users today!"
          />
          <Fade>
            {" "}
            <FeaturedSection />
          </Fade>
        </div>
        <div className="py-10">
          <SectionHeading
            heading="Top Delivery Heroes"
            subheading="Meet our top three delivery experts, ensuring swift and secure parcel delivery with dedication and reliability"
          />
          <Fade>
            {" "}
            <TopDeliveryHero />
          </Fade>
        </div>
        <div className="py-10">
          <SectionHeading
            heading="Frequently Asked Questions"
            subheading="Find answers to your questions about our parcel delivery services, including booking, handling, cancellations, and more."
          />
          <Fade>
            {" "}
            <Faq />
          </Fade>
        </div>
        <div className="py-10">
          <SectionHeading
            heading="Contact Us"
            subheading="Get in touch with our team for any inquiries, support, or feedback. We're here to assist you with all your parcel delivery needs."
          />
          <Fade>
            <GetInTouch />
          </Fade>
        </div>
      </div>
    </div>
  );
};
