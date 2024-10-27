import { Box, Button, Grid, GridItem, Image, Text } from '@chakra-ui/react'
import React from 'react'
import img from '../../assests/img2.png'

import data from './bookshootdata'

const BookShoot = () => {
    return (
        <Box
            w="100%"
            bg="white"
            color="white"
        // p = {{base : '60px 0px' , lg : '100px 0px'}}
        >
            <Box
                w={{ base: '95%', lg: '85%' }}
                display="flex"
                m='auto auto'
            >

                <Box w={{ base: '0%', lg: '40%' }}>
                    <Image
                        src={img}
                        w="80%"
                    />
                </Box>

                <Box w={{ base: '100%', lg: '60%' }}
                    display='flex'
                    justifyContent={{base : 'center' , lg : 'flex-end'}}
                    alignItems='center'
                >
                    <Box
                        display='flex'
                        flexDir='column'
                        gap="20px"
                    >
                        <Grid
                            templateColumns={{ base: '1fr', md: '1fr 1fr' }}
                        >
                            {data.map((item, index) => (
                                <GridItem key={index}>
                                    <Box
                                        display="flex"
                                        flexDir="column"
                                        alignItems="center"
                                        textAlign="center"
                                        p={5}
                                        m={5}
                                        maxWidth="350px"
                                        gap="15px"
                                        borderRadius="10px"
                                        boxShadow="md"
                                        _hover={{ boxShadow: 'lg', transform: 'scale(1.01)' }}
                                        transition="all 0.3s"
                                        color='black'
                                    >
                                        <item.icon size={40} />
                                        <Text fontSize="lg" fontWeight="bold" mb={2}>
                                            {item.title}
                                        </Text>
                                        <Text>{item.text}</Text>
                                    </Box>
                                </GridItem>
                            ))}
                        </Grid>

                        <Button
                            bg="#F068C2"
                            color="black"
                            border="1px solid black"
                            borderRadius="20px"
                            w={{base : '60%' , lg : '40%'}}
                            alignSelf='center'
                        >
                            Book Your Photoshoot
                        </Button>
                    </Box>


                </Box>

            </Box>
        </Box>
    )
}

export default BookShoot