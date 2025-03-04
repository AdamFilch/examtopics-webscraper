import { ReactNode } from "react";
import Header from "../components/layout/header";
import './global.css'
import Footer from "../components/layout/footer";
import { Box } from "@mui/material";


export default function MainLayout({
    children,
}: {
    children: any
}) {


    return (
        <html>
            <body>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column', // Stack children vertically
                        width: '100vw',
                        minHeight: '100vh'
                    }}
                >

                    <Header />
                    <main>

                        {children}
                    </main>
                    <Footer />
                </Box>
            </body>
        </html>
    )
}