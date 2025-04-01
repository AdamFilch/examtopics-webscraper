import { Box, Button } from "@mui/material";


export function RepoSidebar() {
    return (

        <Box display={'flex'} gap={2} padding={2} flexDirection={"column"}>
            <Button variant="contained">
                Questions
            </Button>
            <Button variant="contained">
                Papers
            </Button>
        </Box>

    )
}