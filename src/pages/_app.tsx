import { type AppType } from "next/app";
import { Inter } from "next/font/google";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import NavBar from "../components/layout";

export const inter = Inter({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-sans",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <NavBar />
      <main className={`font-sans ${inter.variable}`}>
        <Component {...pageProps} />
      </main>
    </>
  );
};

export default api.withTRPC(MyApp);
