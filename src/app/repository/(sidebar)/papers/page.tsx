import { Box, Card, CardActionArea, CardContent, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

export default function PapersPage() {
    return (
        <Box>
            <Box sx={{
                display: 'flex',
                gap: 3,
                padding: 3
            }}>
                <Card >
                    <CardActionArea>
                        <CardContent sx={{
                            width: 150,
                            height: 225,
                            alignContent: 'center',
                            alignItems: 'center',
                            display: 'flex',
                            justifyContent: 'center',
                            gap: 3
                        }}>
                            <AddIcon sx={{ fontSize: '35px'}} />
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card>
                    <CardActionArea>
                        <CardContent sx={{
                            width: 150,
                            height: 225,
                            alignContent: 'center',
                            alignItems: 'center',
                            display: 'flex',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            gap: 3
                        }}>

                        <Typography>Test name</Typography>
                        <Typography>X Questions</Typography>
                        <Typography>60 Min</Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Box>
        </Box>
    )
}