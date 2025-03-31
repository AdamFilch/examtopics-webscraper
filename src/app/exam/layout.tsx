import { Box } from "@mui/material"
import { ExamTimerHeader } from "../../components/exam/timer-header"


export default function ExamLayout({
    children
}: {
    children: any
}) {

    return (
        <Box>
            <ExamTimerHeader />
            <Box>
                {children}
            </Box>
        </Box>
    )
}