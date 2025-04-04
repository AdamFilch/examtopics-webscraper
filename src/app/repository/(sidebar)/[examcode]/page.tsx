'use client'

import { Box, Button, Typography } from "@mui/material";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import PreviewPage from "../../../../components/preview/page";


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
            <Box sx={{
                display: 'flex',
                alignSelf: 'flex-end',
                justifyContent: 'space-between',
                marginRight: 3,
                padding: 2
            }}>

                <Typography fontSize={'28px'} fontStyle={'oblique'} fontWeight={'700'}>{decodedId}</Typography>

                <Box display={'flex'} gap={3}>
                    <Button size="large" variant="outlined">
                        Create a Test
                    </Button>
                    <Button color="error" size="large" variant="contained">
                        Delete
                    </Button>
                </Box>
            </Box>




            <PreviewPage examPaper={currExamPaper} />

        </Box>
    )
}