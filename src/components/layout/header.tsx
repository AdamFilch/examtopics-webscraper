import { AppBar, Box, Button, Typography } from "@mui/material";
import Link from "next/link";


export default function Header() {
    return (
        <AppBar position="static" sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 50,
            paddingX: 2
        }}>
            <Box display={'flex'} gap={1}>
                <Button
                    LinkComponent={Link}
                    href="/"
                    sx={{
                        textTransform: 'none'

                    }}>
                    <Typography color={'white'} >Examtopics Webscrapper</Typography>
                </Button>
            </Box>

            <Box gap={2} display={'flex'} color={'white'} >
                <Button
                    LinkComponent={Link}
                    href="/scrape"
                    sx={{
                        textTransform: 'none'
                    }}>
                    <Typography color={'white'}>
                        Scrape

                    </Typography>
                </Button >
                <Button
                    LinkComponent={Link}
                    href="/repository"
                    sx={{
                        textTransform: 'none'
                    }}>
                    <Typography color={'white'}>

                        Your Repository
                    </Typography>
                </Button>
                <Button
                    LinkComponent={Link}
                    href="/exam"
                    sx={{
                        textTransform: 'none'
                    }}>
                    <Typography color={'white'}>

                        Test Yourself
                    </Typography>
                </Button>
            </Box>
        </AppBar>
    )
}