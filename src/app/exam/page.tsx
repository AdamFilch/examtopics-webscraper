'use client'

import { Autocomplete, Box, Button, TextField, Typography } from "@mui/material";
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