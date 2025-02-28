'use client'

import { Box, Button, Typography } from "@mui/material";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

import PreviewPage from "../preview/page";

export default function ExamDetailPage() {



    const { examcode } = useParams() // This gets whatever is in [examcode]



    

    const decodedId = decodeURIComponent(examcode.toString())
    const [currExamPaper, setCurrExamPaper] = useState([])
    const [selectedMenu, setSelectedMenu] = useState<'papers' | 'questions'>('questions')

    useEffect(() => {
        async function fetchExam() {
            try {

                const gettedExamPaper = await fetch(`/dumps/exam_papers/${decodedId}`).then(res => res.json()).then((res) => {
                    setCurrExamPaper(res)
                })
                
            } catch (error) {
                console.error('Error fetching exams:', error);
            }
        }

        fetchExam()


    }, [decodedId, setCurrExamPaper])

    console.log(currExamPaper)

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

                <Box display={'flex'} gap={2} padding={2} flexDirection={"column"}>
                    <Button variant="contained">
                        Questions
                    </Button>
                    <Button variant="contained">
                        Papers
                    </Button>
                </Box>
                <Box>
                    <PreviewPage examPaper={currExamPaper}/>
                </Box>
            </Box>

        </Box>
    )
}