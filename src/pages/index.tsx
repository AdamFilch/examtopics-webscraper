import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Container, Stack, Typography } from "@mui/material";
import React from "react";

export default function LandingPage() {
    return (
        <Container>
            <Box>
                <Typography>Examtopics</Typography>
                <Typography>Webscraper</Typography>
            </Box>

            <Box sx={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gap: 10
            }}>
                <Card elevation={3} sx={{
                    justifyItems: 'center',
                }}>
                    <CardActionArea>
                        <CardMedia
                            component='img'
                            height={'300px'}
                            image="landing\scraped_html.png"
                            alt="A random Python Script?"
                            sx={{
                                objectPosition: 'left top'
                            }}
                        />
                        <CardContent>

                            <Typography fontSize={'25px'} gutterBottom fontWeight={600}>
                                Scrape the Internet!

                            </Typography>
                            <Typography fontSize={'17px'} sx={{
                            }}>
                                Scrape Exam Topics to find sample questions for your Examination
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card elevation={3} sx={{
                    justifyItems: 'center',

                }}>
                    <CardActionArea>
                        <CardMedia
                            component='img'
                            height={'300px'}
                            image=""
                            alt="Exam Folders?"
                        />
                        <CardContent>
                    <Typography>
                        View Exam Repository

                    </Typography>
                    </CardContent>
                    </CardActionArea>
                </Card>
                <Card elevation={3} sx={{
                    justifyItems: 'center',

                }}>
                    <CardActionArea>
                        <CardMedia
                            component='img'
                            height={'300px'}
                            image=""
                            alt="Simulate?"
                        />
                        <CardContent>
                    <Typography>

                        Simulate Exam
                    </Typography>
                    </CardContent>
                    </CardActionArea>
                </Card>
            </Box>
        </Container>
    )
}