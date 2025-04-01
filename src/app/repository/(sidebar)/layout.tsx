import { Box } from "@mui/material";
import { PropsWithChildren } from "react";
import { RepoSidebar } from "../../../components/repository/sidebar";


export default function RepositoryLayout({ children }: {
    children: any
}) {
    return (
        <Box display="grid" gridTemplateColumns={{ xs: '1fr 3fr', md: '1fr 5fr' }}>
            <RepoSidebar />

            <Box>
                {children}
            </Box>



        </Box>
    )
}