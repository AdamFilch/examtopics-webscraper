import { Box, Button, TextField, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import React from "react";
import AWS_CERTIFIED_CLOUD_QUESTIONS from 'dumps/exam_papers/AWS Certified Cloud Practitioner CLF-C02.json'
import EXAMPLE_QUESTION_DUMP from 'dumps/exam_papers/EXAMPLE_QUESTION_DUMP.json'



export default function test() {

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


