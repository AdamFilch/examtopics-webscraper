'use client'
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, ButtonBase, Card, CardActionArea, Divider, IconButton, Stack, TextField, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import AWS_CERTIFIED_CLOUD_QUESTIONS from 'dumps/exam_papers/AWS Certified Cloud Practitioner CLF-C02.json'
import EXAMPLE_QUESTION_DUMP from 'dumps/exam_papers/EXAMPLE_QUESTION_DUMP.json'
import { useEffect, useState } from 'react'
import { ExamPaperJSON } from "../../types/exam";
import Link from 'next/link';



export default function RepositoryPage() {

    const [examPapers, setExamPapers] = useState<Record<string, ExamPaperJSON[]>>({});

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

                            setExamPapers((prev) => {
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

            <Box padding={2}>
                <Typography fontSize={'20px'}>Exam Logs</Typography>
                <Typography marginBottom={2}>Below showcases all of the exams that you have scraped. Use the search bar to quickly get your Exam!</Typography>
                <Box display={'flex'} gap={2}>

                    <TextField fullWidth size="small" slotProps={{
                        input: {
                            startAdornment: (<IconButton><SearchIcon /></IconButton>),
                            endAdornment: (<IconButton><CloseIcon /></IconButton>)

                        }
                    }} />
                    <Button variant='contained'>
                        <RefreshIcon />
                    </Button>
                </Box>
            </Box>

            <Stack>
                <Box display={'flex'} gap={3} sx={{
                    border: '1px solid gray',
                    padding: 1,
                }}>

                    <Box width={'100%'} maxWidth={'120px'} textAlign={'end'}>
                        <Typography>Total Questions</Typography>
                    </Box>
                    <Divider orientation="vertical" flexItem />
                    <Box width={'100%'} maxWidth={'200px'}>
                        <Typography>Last Modified</Typography>
                    </Box>
                    <Divider orientation="vertical" flexItem />
                    <Box>
                        <Typography>Exam Paper Code</Typography>
                    </Box>
                </Box>
                {Object.entries(examPapers).map((exam, index) => (

                    <ButtonBase key={index} sx={{
                        display: 'flex',
                        gap: 3,
                        paddingX: 1,
                        paddingY: 0.5,
                        backgroundColor: index % 2 == 0 ? 'lightgray' : 'white',
                        justifyContent: 'start',
                        '&:hover': {
                            backgroundColor: '#1976d2'
                        }
                    }} LinkComponent={Link}
                    href={`/repository/${exam[0]}`}

                    >


                        <Box width={'100%'} maxWidth={'120px'} textAlign={'end'}>
                            <Typography>{exam[1].length}</Typography>
                        </Box>
                        <Divider />
                        <Box width={'100%'} maxWidth={'200px'}>
                            <Typography textAlign={'start'}>

                                ---- ---- ----
                            </Typography>
                        </Box>
                        <Divider />

                        <Box>
                            <Typography>{exam[0].replace('.json', '')}</Typography>
                        </Box>
                    </ButtonBase>
                ))}
            </Stack>
        </Box>
    )
}