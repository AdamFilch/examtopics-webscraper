'use client'

import { Box, List, ListItem, ListItemButton } from '@mui/material'
import React, { useState } from 'react'
import AWS_CERTIFIED_CLOUD_QUESTIONS from 'dumps/exam_papers/AWS Certified Cloud Practitioner CLF-C02.json'
import EXAMPLE_QUESTION_DUMP from 'dumps/exam_papers/EXAMPLE_QUESTION_DUMP.json'
import { title } from 'process'


export default function PreviewPage() {
    console.log(AWS_CERTIFIED_CLOUD_QUESTIONS)
    const [thisQuestion, setThisQuestion] = useState(null)


    return (
        <Box sx={{
            display: 'grid',
            gridTemplateColumns: '30% 70%'
        }}>
            <Box>
                <List>
                    {AWS_CERTIFIED_CLOUD_QUESTIONS.map((pro) => (

                        <ListItem key={pro.title} disablePadding>
                            <ListItemButton onClick={() => {
                                setThisQuestion(pro)

                            }}

                                sx={{
                                    border: "1px solid black",
                                    padding: 2.5
                                }}>

                                {pro.title}

                            </ListItemButton>
                        </ListItem>
                    )
                    )}

                </List>
            </Box>

            <Box>
                {thisQuestion?.question}

                <Box>
                    The Choices are:
                    <List>
                        {thisQuestion?.choices.map((pro) => (

                            <ListItem key={pro.choices} disablePadding>
                                {pro}
                            </ListItem>
                        )
                        )}

                    </List>
                </Box>

                <Box>
                    The Answer is: {thisQuestion?.answer}
                </Box>

            </Box>
        </Box>

    )
}
