'use client'

import { Box, Button, Card, TextField, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import AWS_CERTIFIED_CLOUD_QUESTIONS from 'dumps/exam_papers/AWS Certified Cloud Practitioner CLF-C02.json'
import EXAMPLE_QUESTION_DUMP from 'dumps/exam_papers/EXAMPLE_QUESTION_DUMP.json'
import { useEffect, useState } from 'react'
import { ExamPaperJSON } from "../../types/exam";


export function test() {



    console.log(AWS_CERTIFIED_CLOUD_QUESTIONS)
    const amount = AWS_CERTIFIED_CLOUD_QUESTIONS.length
    const exampl_question_dump = EXAMPLE_QUESTION_DUMP.length
    return <Box sx={{
        display: 'flex',
        justifyContent: 'center'
    }}>

        <Box>
            <Typography> There are {amount} exam questions </Typography>
            <Typography> There are {exampl_question_dump} exam questions </Typography>
        </Box>


    </Box>
}


export default function RepositoryPage() {

    const [examPapers, setExamPapers] = useState<Record<string, ExamPaperJSON[]>>({});


    console.log('examPopers', examPapers)
    useEffect(() => {
        async function fetchExams() {
            try {
                // Fetch the list of JSON files
                const response = await fetch('/api/exams');
                const data = await response.json();


                if (data.files) {
                    // Fetch each JSON file
                    const jsonPromises = data.files.map((file: string) =>
                        fetch(`dumps/exam_papers/${file}`).then(res => res.json()).then((res) => {

                            setExamPapers((prev) =>  {
                                const updatedList = {
                                    ...prev,
                                    [file]: res
                                }
                                return updatedList
                            })
                        })
                    );
                }
            } catch (error) {
                console.error('Error fetching exams:', error);
            }
        }

        fetchExams();
    }, []);
    return (
        <Box>

            <Typography>Below showcases all of the exams that you have scraped</Typography>

            <Box>

            </Box>
        </Box>
    )
}