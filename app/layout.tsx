// app/layout.tsx
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"], // jis weight ki zarurat hai
  display: "swap",
});

export const metadata = {
  title: "Blessings Shop Hub",
  description: "Affiliate product store with admin panel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
