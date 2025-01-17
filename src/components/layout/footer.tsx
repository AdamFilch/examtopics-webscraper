import { Box, Stack, Typography } from "@mui/material";


export default function Footer() {



    return (
        <Box
        sx={{
            backgroundColor: '#1976d2',
            height: 50,
            paddingX: 3,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems:'center'
        }}>
            <Typography>
                Our Contact Information
            </Typography>
            <Stack direction={'row'} gap={3}>

            <Typography>
                About Project Page?
            </Typography>
            <Typography>
                GitHub link
            </Typography>
            </Stack>
        </Box>
    )
}