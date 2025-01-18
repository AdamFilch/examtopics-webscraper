'use client'

import { Autocomplete, Box, Chip, Container, Paper, Stack, TextField, Typography } from "@mui/material"
import PROVIDER_LIST from 'dumps/PROVIDER_LIST.json'
import { useState } from "react"


export default function ScrapePage() {

    const [selectedExam, setSelectedExam] = useState({
        provider: '',
        exam: '',
        index: null
    })



    const providers = PROVIDER_LIST.map((pro) => pro.provider)

    function handleSearch() {

    }



    return (
        <Box maxWidth={'1600px'}justifySelf={'center'} marginY={5}>
            <Typography>Type an Exam or </Typography>


            <Stack gap={3}>
                <Box>
                    <Autocomplete
                    fullWidth
                    sx={{
                        width: '1200px',
                        justifySelf: 'center'
                    }}
                    options={providers}
                    renderInput={(params) => <TextField {...params} label="Search for an Exam / Exam Code / Provider " />}
                    />
                </Box>


                <Box display={'grid'} gridTemplateColumns={'1.2fr 2fr'} gap={3}>
                    <Paper>
                    <Box display={'flex'} flexWrap={"wrap"} gap={1} justifyContent={'space-around'} margin={2}>
                        {PROVIDER_LIST.map((pro, i) => (
                            <Chip key={i} label={pro.provider} color={selectedExam.provider == pro.provider ? 'primary' : 'default'} onClick={() => {
                                if (selectedExam.provider != pro.provider) {
                                    setSelectedExam({...selectedExam, provider: pro.provider, index: pro.index})
                                } else {
                                    setSelectedExam({ ...selectedExam, provider: '', index: null})
                                }
                            }}
                            
                            />
                        ))}

                    </Box>


                    </Paper>
                    <Paper>
                        {selectedExam.index && (
                        <Box>
                            {PROVIDER_LIST[selectedExam.index - 1].exams.map((exam,i) => (
                            <Box key={i} display={'flex'} alignItems={'center'}>
                                    <Typography textOverflow={'ellipsis'}>{exam.exam_name}</Typography>
                                    {exam.popular && (
                                        <Chip label="Popular" color="info" />
                                    )}
                                </Box>
                            ))}

                        </Box>

                        )}


                    </Paper>
                </Box>
            </Stack>
        </Box>
    )
}

