'use client'

import { Box, Button, Typography } from "@mui/material";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ExamDetailPage() {
    const { examcode } = useParams()
    const decodedId = decodeURIComponent(examcode.toString())
    const [currExamPaper, setCurrExamPaper] = useState(null)

    console.log('examTopoicsWEb', currExamPaper)
    useEffect(() => {
        async function fetchExam() {
            try {

                const gettedExamPaper = fetch(`/dumps/exam_papers/${decodedId}`).then(res => res.json()).then((res) => {

                    setCurrExamPaper(res)
                })
            } catch (error) {
                console.error('Error fetching exams:', error);
            }
        }

        fetchExam()


    }, [decodedId, setCurrExamPaper])


    return (
        <Box>
            <Box display="grid" gridTemplateColumns={{ xs: '1fr 3fr', md: '1fr 5fr' }}>

                <Box sx={{
                    height: '80px'
                }}>
                    
                </Box>
                <Typography fontSize={'24px'}>{decodedId}</Typography>



            </Box>
            <Box display="grid" gridTemplateColumns={{ xs: '1fr 3fr', md: '1fr 5fr' }}>

                <Box display={'grid'} gap={2} padding={2}>
                    <Button variant="contained">
                        Questions
                    </Button>
                    <Button variant="contained">
                        Papers
                    </Button>
                </Box>
                <Box>
                    Page
                </Box>
            </Box>

        </Box>
    )
}