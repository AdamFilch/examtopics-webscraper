'use client'

import { Autocomplete, Box, Button, ButtonBase, Chip, FormControlLabel, Paper, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import AWS_CERTIFIED_CLOUD_QUESTIONS from 'dumps/exam_papers/AWS Certified Cloud Practitioner CLF-C02.json';
import PROVIDER_LIST from 'dumps/PROVIDER_LIST.json';
import { useState } from "react";
import React from "react";


export default function test() {

    const [selectedExam, setSelectedExam] = useState({
        provider: '',
        exam: '',
        index: null
    })


    return <Box>
        <Typography>Choose the exam you would like to take</Typography>
        <Autocomplete
            disablePortal
            options={['suck', 'lol', 'dick']}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Movie" />}
        />
    </Box>
}
