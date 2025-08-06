//import { Open_Sans } from "next/font/google";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import Header from "../components/Header/Header";
import "./globals.css";

// Inter do Google (online)
//const inter = Open_Sans({
const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

// Roboto local
const roboto = localFont({
    src: "../../public/font/Roboto-Regular.ttf",
    variable: "--font-roboto",
});

export const metadata = {
    title: "NextJS",
    description: "Curso Front-End 2 SENAI",
    icons: {
        icon: "/ico/favicon.ico",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR" className={`${inter.variable} ${roboto.variable}`}>
            <body>
                <Header 
                    titulo="🛒 Loja de Eletrônicos" 
                    subtitulo="Os melhores produtos com os melhores preços!" 
                    quantidade="📊 Total de produtos: 10" 
                />
                <main className="main">{children}</main>
            </body>
        </html>
    );
}