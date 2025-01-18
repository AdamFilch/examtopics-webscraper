'use client'

import { Autocomplete, Box, Button, ButtonBase, Chip, Container, Paper, Stack, TextField, Typography } from "@mui/material"
import PROVIDER_LIST from 'dumps/PROVIDER_LIST.json'
import { useState } from "react"
import fuzzysort from 'fuzzysort'


export default function ScrapePage() {

    const [selectedExam, setSelectedExam] = useState({
        provider: '',
        exam: '',
        index: null
    })

    const providers = PROVIDER_LIST.map((pro) => pro.provider)
    const exams = PROVIDER_LIST.map((pro) => pro.exams).flat()


    function handleSearch(input: string, options) {
        const exam_fuzzy = fuzzysort.go(input, exams, { keys: ['exam_name', 'exam_code'], threshold: 0.5, limit: 15 }).map((fuzz) => fuzz.obj.exam_name)

        const providers_fuzzy = fuzzysort.go(input, providers, { threshold: 0.5, limit: 15 }).map((fuzz) => fuzz.target)

        return [...providers_fuzzy, ...exam_fuzzy].sort()

    }

    return (
        <Box maxWidth={'1600px'} justifySelf={'center'} marginY={5}>

            <Box justifySelf={'center'} display={'flex'} marginBottom={3}>
                <Chip sx={{
                    alignSelf: 'center',
                    minWidth: '100px',
                    fontSize: '18px'
                }} label={selectedExam.provider} />
                <Box sx={{
                    minWidth: '500px',
                    marginX: 4,
                    justifyItems: 'center',
                    alignContent: 'center'
                }}>
                    <Typography fontSize={'20px'}>
                        {selectedExam.exam}
                    </Typography>

                </Box>
                <Button size="large" disabled={selectedExam.exam == ''}>
                    Scrape!
                </Button>
            </Box>

            <Stack gap={3}>
                <Box>
                    <Autocomplete
                        fullWidth
                        sx={{
                            width: '1200px',
                            justifySelf: 'center'
                        }}
                        onChange={(e, v) => {
                            if (providers.includes(v)) {
                                const filteredObj = PROVIDER_LIST.filter((fil) => fil.provider == v)
                                setSelectedExam({ exam: '', provider: filteredObj[0].provider, index: filteredObj[0].index })
                            } else {
                                const filteredObj = PROVIDER_LIST.filter((fil) => fil.exams.some((ex) => ex.exam_name == v || ex.exam_code == v))

                                setSelectedExam({ exam: v, provider: filteredObj[0].provider, index: filteredObj[0].index })
                            }

                        }}
                        options={providers}
                        filterOptions={(filtered, state) => {
                            return handleSearch(state.inputValue, filtered)
                        }}
                        renderInput={(params) => <TextField {...params} label="Search for an Exam / Exam Code / Provider " />}
                    />
                </Box>


                <Box display={'grid'} gridTemplateColumns={'1.2fr 2fr'} gap={3}>
                    <Paper>
                        <Box display={'flex'} flexWrap={"wrap"} gap={1} justifyContent={'space-around'} margin={2}>
                            {PROVIDER_LIST.map((pro, i) => (
                                <Chip key={i} label={pro.provider} color={selectedExam.provider == pro.provider ? 'primary' : 'default'} onClick={() => {
                                    if (selectedExam.provider != pro.provider) {
                                        setSelectedExam({ exam: '', provider: pro.provider, index: pro.index })
                                    } else {
                                        setSelectedExam({ exam: '', provider: '', index: null })
                                    }
                                }}

                                />
                            ))}

                        </Box>


                    </Paper>
                    <Paper>
                        {selectedExam.index && (
                            <Box>
                                {PROVIDER_LIST[selectedExam.index - 1].exams.map((exam, i) => (
                                    <ButtonBase key={i} sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'start',
                                        height: 45,
                                        width: '100%',
                                        gap: 2,
                                        paddingX: 2,
                                        '&:hover': {
                                            backgroundColor: '#1976d2'
                                        }
                                    }} onClick={() => {
                                        if (selectedExam.exam != exam.exam_name) {
                                            setSelectedExam({ ...selectedExam, exam: exam.exam_name })
                                        } else {
                                            setSelectedExam({ ...selectedExam, exam: exam.exam_name })
                                        }
                                    }}>

                                        <Typography textOverflow={'ellipsis'}>{exam.exam_name}</Typography>
                                        {exam.popular && (
                                            <>
                                                <Typography>&bull;</Typography>
                                                <Chip label="Popular" color="info" />
                                            </>
                                        )}
                                    </ButtonBase>
                                ))}

                            </Box>

                        )}
                    </Paper>
                </Box>
            </Stack>
        </Box>
    )
}

