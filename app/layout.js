import Header from "@/components/header/Header";
import "./globals.scss";
import { Roboto } from "next/font/google";
import Footer from "@/components/footer/Footer";
import "./layoutHome.scss";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata = {
  title: {
    template: "%s | Pokemon",
    default: "Pokemon - Choise your pokemon",
  },
  description: "Choise your pokemon",
  keywords: ["pokemon", "покемон", "pikachu", "пикачу"],
  openGraph: {
    title: "Pokemon - Choise your pokemon",
    description: "Choise your pokemon",
    url: "",
    siteName: "Pokemon",
    type: "website",
    images: ["public/images/mataImage.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pokemon - Choise your pokemon",
    description: "Choise your pokemon",
    url: "",
    images: ["public/images/mataImage.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <div className="wrapper">
          <div className="wrapper__header">
            <Header />
          </div>
          <div className="wrapper__content">{children}</div>
          <div className="wrapper__footer">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
