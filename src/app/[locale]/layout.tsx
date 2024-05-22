import type { ILocalePageProps } from "@/types";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/footer";

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: ILocalePageProps["params"];
}>) {
  return (
    <>
      <Navbar locale={params.locale} />
      {children}
      <Footer locale={params.locale} />
    </>
  );
}
