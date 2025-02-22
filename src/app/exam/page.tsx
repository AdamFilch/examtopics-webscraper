'use client'

import { Autocomplete, Box, Button, ButtonBase, Chip, FormControlLabel, Paper, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import AWS_CERTIFIED_CLOUD_QUESTIONS from 'dumps/exam_papers/AWS Certified Cloud Practitioner CLF-C02.json';
import PROVIDER_LIST from 'dumps/PROVIDER_LIST.json';
import { useState } from "react";
import React from "react";


export default function test() {

    const [selectedExam, setSelectedExam] = useState({
        provider: '',
        exams: '',
        index: null
    })


    //to set the question number 
    const [questionNumber, setQuestionNumber] = useState(0)


    //to extract exam provider list from JSON file
    const autoCompleteList = PROVIDER_LIST.map((list) => list.provider)


    //to extract the nested array of exam names from the list of providers
    const exams = PROVIDER_LIST.map((list) => list.exams).flat()

    // const ExList = exams.map((pro) => pro.exam_name)

    // the handle next and handle back function is for the next and back button, increasing the question index, hence changing the questions
    function handleNext() {
        setQuestionNumber((previous) => previous + 1 < AWS_CERTIFIED_CLOUD_QUESTIONS.length ? previous + 1 : previous)

    }

    function handleBack() {
        setQuestionNumber((previous) => previous - 1 > 0 ? previous - 1 : previous)
    }

    const [selectedExamName, setSelectedExamName] = useState('')

    //actual HTML components
    return <Box>

        {/* autocomplete */}

        <Box justifySelf={'center'}>
            <Typography sx={{
                margin: 2
            }}>Choose the exam you would like to take</Typography>
            <Autocomplete
                options={autoCompleteList}
                sx={{
                    width: 300,
                    margin: 2
                }}
                onChange={(event: any, newValue: string | null) => {
                    setSelectedExamName(newValue);
                }}
                renderInput={(params) => <TextField {...params} label="Search for an Exam / Exam Code / Provider " />}
            />

            <div><Typography>Selected Exam: {selectedExamName}</Typography></div>
        </Box>

        {/* Next and back button */}

        <Box justifySelf={'center'} display={'flex'} justifyContent={'space-between'} width={'100%'}>
            <Button onClick={handleBack} sx={{
                margin: 2,
                marginLeft: 5,
                fontSize: 16,
            }}>Back</Button>

            <Button onClick={handleNext} sx={{
                margin: 2,
                marginLeft: 5,
                fontSize: 16,
            }}>Next</Button>
        </Box>

        {/* This is for questions */}

        <Box justifySelf={'center'} display={'flex'} marginBottom={2} marginTop={1} marginLeft={10} marginRight={10}>
            <Box>
                <Typography sx={{
                    fontSize: 18
                }}>{AWS_CERTIFIED_CLOUD_QUESTIONS[questionNumber].question}</Typography>
            </Box>
        </Box>

        {/* This is for answers */}

        <Paper>
            <Box paddingBottom={5} paddingTop={5} fontSize={20}>
                <RadioGroup sx={{
                    marginLeft: 15,
                }}>
                    {AWS_CERTIFIED_CLOUD_QUESTIONS[questionNumber].choices.map((ChoiceNumber) => (
                        <FormControlLabel key={ChoiceNumber} value={ChoiceNumber} control={<Radio />} label={ChoiceNumber} />

                    ))}
                </RadioGroup>
            </Box>
        </Paper>

    </Box>


}
