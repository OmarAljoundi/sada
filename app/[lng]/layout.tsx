import "../globals.css";
import type { Metadata } from "next";
import { Almarai, Inclusive_Sans, Inter } from "next/font/google";
import { dir } from "i18next";
import { languages } from "../i18n/settings";

import { cn } from "@/lib/utils";

const almarai = Almarai({
  subsets: ["arabic"],
  weight: ["300", "400", "700", "800"],
  variable: "--font-ar",
});

const inclusive_Sans = Inclusive_Sans({
  subsets: ["latin-ext"],
  weight: ["400"],
  variable: "--font-en",
});

export async function generateMetadata({
  params,
}: {
  params: { lng: string };
}): Promise<Metadata> {
  if (params.lng == "en") {
    return {
      title: "Sada Travel Agency - Explore the World",
      description:
        "Book your dream vacation with our travel agency. Discover amazing destinations around the globe.",
      keywords: ["Travel", "Tour", "Europ", "Asia", "Booking"],
      colorScheme: "light",
      publisher: "Sada Travel",
      other: {
        "impact-site-verification": "ca39656b-0626-49a0-849d-593027987a30",
      },

      alternates: {
        canonical: "/en",
        languages: {
          "en-US": "/en",
          "ar-SA": "/ar",
        },
      },
    };
  } else {
    return {
      title: "صدى للسفر والسياحة - استكشف العالم",
      description:
        "احجز عطلتك الحلم مع وكالتنا للسفر. اكتشف وجهات رائعة حول العالم.",
      keywords: ["سفر", "سياحة", "اوروبا", "اسيا", "حجز"],
      colorScheme: "light",
      publisher: "صدى للسفر والسياحة",
      other: {
        "impact-site-verification": "ca39656b-0626-49a0-849d-593027987a30",
      },

      alternates: {
        canonical: "/ar",
        languages: {
          "en-US": "/en",
          "ar-SA": "/ar",
        },
      },
    };
  }
}

export async function generateStaticParams() {
  return languages.map((x) => x.value).map((lng) => ({ lng }));
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lng: string };
}) {
  return (
    <html lang={params.lng} dir={dir(params.lng)}>
      <body className={cn(inclusive_Sans.variable, almarai.variable)}>
        {children}
      </body>
    </html>
  );
}
