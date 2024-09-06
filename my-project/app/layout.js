import "./globals.css";
import { Roboto } from "next/font/google";
import "@/public/css/header_top.globals.css";
import "@/public/css/main-product.globals.css";
import "@/public/css/footer.globals.css";
import "@/public/css/product_detail.globals.css";
import Header from "@/app/(user)/components/header";
import Footer from "@/app/(user)/components/footer";
const roboto = Roboto({
  weight: ["400", "700"], // Chọn các độ đậm bạn cần
  subsets: ["latin"], // Chọn các ký tự phụ
});
export const metadata = {
  title: "Drink Milk Tea",
  description: "Chào mừng đến với Drink Milk Tea",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
          integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
          crossOrigin="anonymous"
          referrerpolicy="no-referrer"
        />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
