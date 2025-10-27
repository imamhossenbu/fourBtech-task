import HeroWithNav from "@/components/server/HeroWithNav";
import Features from "@/components/server/Features";
import HowItWorks from "@/components/server/HowItWorks";
import Security from "@/components/server/Security";
import Pricing from "@/components/server/Pricing";
import Testimonial from "@/components/server/Testimonial";
import FinalCta from "@/components/server/FinalCta";
import Footer from "@/components/server/Footer";
import Brand from "@/components/server/Brand";
import Mission from "@/components/server/Mission";
import GlobalReach from "@/components/server/GlobalReach";



export default function Page() {
  return (
    <>

      <HeroWithNav />

      <main>
        <Features />
        <Brand />
        <HowItWorks />
        <Mission />
        <Security />
        <Pricing />
        <Testimonial />
        <GlobalReach />
        <FinalCta />
      </main>

      <Footer />
    </>
  );
}
