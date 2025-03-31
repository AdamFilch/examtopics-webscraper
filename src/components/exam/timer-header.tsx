import { Box, Typography } from "@mui/material";

export function ExamTimerHeader() {
    return (
        <Box>
            <Box sx={{
                display: 'flex',
                justifySelf: 'center'
            }}>
                <Typography>
                    00:00 
                </Typography>
                <Typography>
                    Pause   
                </Typography>
            </Box>
        </Box>
    )
}