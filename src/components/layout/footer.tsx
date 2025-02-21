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
                alignItems: 'center'
            }}>
            <Typography color={'white'}>
                Our Contact Information
            </Typography>
            <Stack direction={'row'} gap={3}>
                <Typography color={'white'}>
                    About Project Page?
                </Typography>
                <Typography color={'white'}>
                    GitHub link
                </Typography>
            </Stack>
        </Box>
    )
}