'use client'

import { Box, List, ListItem, ListItemButton } from '@mui/material'
import React, { useState } from 'react'

export default function PreviewPage({ 
    examPaper 
}: { 
    examPaper: any,
 }) {
    const [thisQuestion, setThisQuestion] = useState(null)
    
    console.log(examPaper)
    
    return (
        <Box
            sx={{
                display: 'grid',
                gridTemplateColumns: '1fr 3fr', // Always display the list and the Question/Answer div side by side
                gap: 1.5,
                height: '100vh',
                overflow: 'hidden',
                padding: 2,
                backgroundColor: '#e0f7fa',
            }}
        >
            {/* Exam List Box */}
            <Box
                sx={{
                    border: '0px solid black',
                    borderRadius: '8px',
                    overflowY: 'auto',
                    height: '98%',
                    paddingRight: '10px',
                    '&::-webkit-scrollbar': {
                        width: '10px',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        backgroundColor: '#d3d3d3',
                        borderRadius: '10px',
                        border: '2px solid #e0f7fa',
                    },
                    '&::-webkit-scrollbar-track': {
                        backgroundColor: '#f1f1f1',
                        borderRadius: '10px',
                    },
                }}
            >
                <List
                    sx={{
                        padding: 0,
                        listStyleType: 'none',
                    }}
                >
                    {examPaper.map((pro, idx) => (
                        <ListItem key={idx} disablePadding>
                            <ListItemButton
                                onClick={() => {
                                    setThisQuestion(pro)
                                }}
                                sx={{
                                    backgroundColor: '#1976d2',
                                    padding: '15px',
                                    marginBottom: '10px',
                                    borderRadius: '8px',
                                    border: '1px solid #b3e5fc',
                                    color: '#ffffff',
                                    fontSize: '16px',
                                    fontWeight: '500',
                                    transition: 'background-color 0.3s ease',
                                    '&:hover': {
                                        backgroundColor: '#1565c0',
                                        cursor: 'pointer',
                                    },
                                    '&:active': {
                                        backgroundColor: '#0d47a1',
                                    },
                                    '&:focus': {
                                        outline: '2px solid #1976d2',
                                    },
                                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                                }}
                            >
                                {pro.title}
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>

            {/* Question and Answer Box */}

            <Box
                sx={{
                    border: '0px solid black',
                    borderRadius: '8px',
                    padding: 2.1,
                    height: '94%', // Ensure this box occupies full height
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    overflowY: 'auto',
                    backgroundColor: '#ffffff',
                    paddingRight: '10px',
                    '&::-webkit-scrollbar': {
                        width: '8px',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        backgroundColor: '#d3d3d3',
                        borderRadius: '10px',
                        border: '2px solid #e0f7fa',
                    },
                    '&::-webkit-scrollbar-track': {
                        backgroundColor: '#f1f1f1',
                        borderRadius: '10px',
                    },
                }}
            >
                {/* Question Box */}
                <Box
                    sx={{
                        border: '0px solid #b3e5fc',
                        padding: 2.5,
                        fontSize: 'calc(1.0vw + 14px)', // Make font size of question responsive
                        minFontSize: '12px', // Prevent font from getting too small
                    }}
                >
                    {thisQuestion?.question}
                </Box>

                {/* Choices Box */}
                <Box
                    sx={{
                        border: '0px solid #b3e5fc',
                        padding: 2.5,
                        fontSize: 'calc(1.0vw + 10px)', // Choices font slightly smaller than question
                        minFontSize: '8px',
                    }}
                >
                    The Choices are:
                    <List>
                        {thisQuestion?.choices.map((pro, idx) => (
                            <ListItem key={idx} disablePadding>
                                <ListItemButton
                                    sx={{
                                        backgroundColor: '#f0f4c3',
                                        padding: 2.5,
                                        marginBottom: 1,
                                        borderRadius: '8px',
                                        transition: 'background-color 0.3s ease',
                                        '&:hover': {
                                            backgroundColor: '#c5e1a5',
                                        },
                                        '&:active': {
                                            backgroundColor: '#afb42b',
                                        },
                                    }}
                                >
                                    {pro}
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>

                {/* Answer Box */}
                <Box
                    sx={{
                        border: '0px solid #b3e5fc',
                        padding: 2.5,
                        fontSize: 'calc(1.0vw + 12px)', // Answer font size similar to choices
                        minFontSize: '8px',
                    }}
                >
                    The Answer is: {thisQuestion?.answer}
                </Box>
            </Box>
        </Box >
    )
}
