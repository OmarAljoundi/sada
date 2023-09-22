import Link from "next/link";
import { useTranslation } from "../i18n";
import { Suspense } from "react";
import HomeHero from "@/components/home-hero";
import { cn } from "@/lib/utils";
import FeatureTours from "@/components/feature-tours";
import HowItWorks from "@/components/how-it-works";
import CallToAction from "@/components/call-to-action";
import Faqs from "@/components/faq";
import Footer from "@/components/layout/footer";
import Menu from "@/components/layout/menu";
import { Separator } from "@/components/ui/separator";
export default async function Page({ params: { lng } }: any) {
  return (
    <div className={cn(lng == "ar" ? "font-primary" : "font-english")}>
      <Menu lng={lng} />
      <Separator />
      <HomeHero params={lng} />
      <FeatureTours params={lng} />
      <HowItWorks params={lng} />
      <CallToAction params={lng} />
      <Faqs params={lng} />
      <Separator />
      <Footer params={lng} />
    </div>
  );
}
