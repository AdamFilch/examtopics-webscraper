import { ReactNode } from "react";


export default function MainLayout({
    children,
}: {
    children: ReactNode
}) {

    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}