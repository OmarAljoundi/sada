import HomeHero from "@/components/home-hero";
import { cn } from "@/lib/utils";
import FeatureTours from "@/components/feature-tours";
import HowItWorks from "@/components/how-it-works";
import CallToAction from "@/components/call-to-action";
import Faqs from "@/components/faq";
import Footer from "@/components/layout/footer";
import Menu from "@/components/layout/menu";
import { Separator } from "@/components/ui/separator";
export default function Page({ params: { lng } }: any) {
  return (
    <div
      className={cn(
        lng == "ar" ? "font-primary" : "font-english",
        "mx-auto h-full"
      )}
    >
      <h1 className="text-white text-5xl lg:text-7xl px-0 text-center pt-20 ">
        Soon in Morocco
      </h1>

      {/* <Menu lng={lng} />
      <Separator />
      <HomeHero params={lng} />
      <FeatureTours params={lng} />
      <HowItWorks params={lng} />
      <CallToAction params={lng} />
      <Faqs params={lng} />
      <Separator />
      <Footer params={lng} />
      <Separator /> */}
    </div>
  );
}
