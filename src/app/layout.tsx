import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "../scss/reset.scss";
import "../scss/global.scss";

import Footer from "@/components/footer/footer";
import Navbar from "@/components/shared/navbar/Navbar";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500"] });

export const metadata: Metadata = {
  title: "Ahmet BIYIKLI",
  description:
    "Ben Ahmet Bıyıklı, front end geliştiriciyim. Tutkum, kullanıcı dostu ve etkileyici web ve mobil deneyimleri oluşturmaktır. İşte benim projelerim ve yeteneklerim. Benimle iletişime geçmekten çekinmeyin!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={poppins.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
