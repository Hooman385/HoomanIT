import "../globals.css";
import Header from "@/components/layout/Header/Header";
import localFont from "next/font/local";
import Direction from "@/components/radixUi/Direction";
import Footer from "@/components/layout/Footer/Footer";
import CartProvider from "@/redux/features/providers/CartProvider";
import PersistGateProvider from "@/redux/features/providers/PersistGateProvider";
import AuthProvider from "@/components/layout/AuthProvider";

const myFont = localFont({
  src: [
    {
      path: "../../../public/fonts/Shabnam-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Shabnam-Light.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Shabnam-Medium.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Shabnam.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Shabnam-Bold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  display: "swap",
});

export const metadata = {
  title: {
    default: "HoomanIT",
    template: "%s - HoomanIT",
  },
  description: "فروشگاه اینترنتی لوازم و قطعات کامپیوتری",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <Direction>
        <body className={myFont.className}>
          <CartProvider>
            <PersistGateProvider>
              <AuthProvider>
                <Header />
                {children}

                <Footer />
              </AuthProvider>
            </PersistGateProvider>
          </CartProvider>
        </body>
      </Direction>
    </html>
  );
}
