'use client'
import { Autocomplete, Box, Button, Card, CardActionArea, CardContent, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Step, StepContent, StepLabel, Stepper, TextField, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { useEffect, useState } from "react";
import { ExamPaperJSON } from "../../../../types/exam";

export default function PapersPage() {

    const [openAddDialog, setOpenAddDialog] = useState(false)
    const [activeStep, setActiveStep] = useState(0)
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


    const createPapersSteps = [
        {
            label: 'Choose an Exam',
            content: (
                <Box>
                    {/* <Autocomplete /> */}
                </Box>
            )
        },
        {
            label: 'Choose the Questions',
            content: (
                <Box>

                </Box>
            )
        },
        {
            label: 'Set test settings',
            content: (
                <Box>

                    <Box>
                        <FormControl>
                            <FormLabel>Here you can set the timer for the test</FormLabel>
                            <RadioGroup>
                                <FormControlLabel value={"3600"} control={<Radio />} label="1 Hour" />
                                <FormControlLabel value={"3600"} control={<Radio />} label="2 Hours" />
                                <FormControlLabel value={"3600"} control={<Radio />} label="30 Minutes" />
                                <FormControlLabel value={"3600"} control={<Radio />} label="15 Minutes" />
                                <FormControlLabel value={"0"} control={<Radio />} label="No Timer" />
                                <Box>
                                    <FormControlLabel value={"custom"} control={<Radio />} label="" />
                                    <TextField label="Custom Timer" variant="standard" />
                                </Box>

                            </RadioGroup>
                        </FormControl>
                    </Box>
                    <Button>Save Test</Button>
                </Box>
            )
        }
    ]

    return (
        <Box>
            <Box sx={{
                display: 'flex',
                gap: 3,
                padding: 3
            }}>
                <Card >
                    <CardActionArea onClick={() => {
                        setOpenAddDialog(true)
                    }}>
                        <CardContent sx={{
                            width: 150,
                            height: 225,
                            alignContent: 'center',
                            alignItems: 'center',
                            display: 'flex',
                            justifyContent: 'center',
                            gap: 3
                        }}>
                            <AddIcon sx={{ fontSize: '35px' }} />
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
            <Dialog open={openAddDialog} onClose={() => setOpenAddDialog(false)} maxWidth={"md"} fullWidth>
                <DialogTitle>
                    <Typography>
                        Add a Test
                    </Typography>
                </DialogTitle>
                <DialogContent>
                    <Stepper activeStep={activeStep} orientation="vertical">
                        {createPapersSteps.map((st) => (
                            <Step>
                                <StepLabel>
                                    {st.label}
                                </StepLabel>
                                <StepContent>
                                    {st.content}
                                </StepContent>
                            </Step>
                        ))}
                    </Stepper>

                </DialogContent>
                <DialogActions>
                    <Button>
                        Back
                    </Button>
                    {activeStep == createPapersSteps.length - 1 ? (
                        <Button>
                            Save
                        </Button>
                    ) : (
                        <Button onClick={() => {
                            setActiveStep((prev) => prev + 1)
                        }}>
                            Next
                        </Button>

                    )}
                </DialogActions>
            </Dialog>
        </Box>
    )
}

// select a test

// automatic division or manual selection for questions

// set test settings

// save test