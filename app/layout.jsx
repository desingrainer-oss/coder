import { Inter } from "next/font/google";
import "./globals.css";
import { ChatProvider } from "@/components/ChatContext";
import ChatWidget from "@/components/ChatWidget";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Coders Solution – Partner Oficial Salesforce",
  description:
    "Partner Oficial de Salesforce. Implementamos, optimizamos y escalamos Salesforce para empresas.",
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="font-sans antialiased">
        <ChatProvider>
          {children}
          <ChatWidget />
        </ChatProvider>
      </body>
    </html>
  );
}
