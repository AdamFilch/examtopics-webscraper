import { Box, Card, CardActionArea, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

export default function PapersPage() {
    return (
        <Box>
            <Box>
                <CardActionArea>
                    <Card>
                        <AddIcon />
                    </Card>
                </CardActionArea>
                <CardActionArea>
                    <Card>
                        <Typography>Test name</Typography>
                        <Typography>X Questions</Typography>
                        <Typography>60 Min</Typography>
                    </Card>
                </CardActionArea>
            </Box>
        </Box>
    )
}