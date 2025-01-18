import { ReactNode } from "react";
import Header from "../components/layout/header";
import './global.css'
import Footer from "../components/layout/footer";


export default function MainLayout({
    children,
}: {
    children: any
}) {


    return (
        <html>
            <body>
                <Header />
                <main>
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    )
}