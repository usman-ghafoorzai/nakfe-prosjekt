import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PageHeroCarouselProvider } from "@/components/PageHeroCarouselProvider";
import { donationContentByLocale } from "@/content/donation";
import { footerContentByLocale } from "@/content/footer";
import { navigationContent } from "@/content/navigation";
import { pageHeroBackgroundImages } from "@/content/pageHeroImages";
import { siteContent } from "@/content/site";
import { getLocale } from "@/lib/locale";
import { metadataBase, siteTitle } from "@/lib/metadata";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();

  return {
    metadataBase,
    title: siteTitle,
    description: siteContent[locale].description,
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const navigation = navigationContent[locale];

  return (
    <html lang={locale} className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-background text-foreground font-sans">
        <PageHeroCarouselProvider imageCount={pageHeroBackgroundImages.length}>
          <Navbar
            content={navigation}
            donationContent={donationContentByLocale[locale]}
            locale={locale}
          />
          <main className="flex-1">
            {children}
          </main>
          <Footer
            content={footerContentByLocale[locale]}
            navigationItems={navigation.items}
          />
        </PageHeroCarouselProvider>
        <Analytics />
      </body>
    </html>
  );
}
