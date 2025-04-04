'use client'
import { Box, Button } from "@mui/material";
import { useRouter } from "next/navigation";


export function RepoSidebar() {
    const router = useRouter();
    return (

        <Box display={'flex'} gap={2} padding={2} flexDirection={"column"}>
            <Button variant="contained" onClick={() => {
                router.replace('/repository')
            }}>
                Questions
            </Button>
            <Button variant="contained" onClick={() => {
                router.replace('/repository/papers')
            }}>
                Papers
            </Button>
        </Box>

    )
}