import { Box, Button, Input, Text, Textarea } from '@chakra-ui/react'
import React from 'react'

const Contact = () => {
    return (
        <Box
            w="100%"
            color="black"
            bg="white"
            pb={10}
        >
            <Box
                w={{ base: "95%", lg: '85%' }}
                m="auto auto"
                display="flex"
                flexDir="column"
                gap="20px"
            >
                <Text fontSize={{ base: '40px', lg: '60px' }}>Book Your Shoot</Text>

                <Box
                    display="flex"
                    gap="20px"
                    flexDir={{ base: 'column', lg: 'row' }}
                >

                    <Box
                        w={{ base: '100%', lg: '60%' }}
                        border="1px solid black"
                        borderRadius="10px"
                        p="20px 20px"
                        display="flex"
                        flexDir="column"
                        gap="10px"
                        justifyContent='space-between'
                    >
                        <Text fontSize={{ base: '25px', lg: '30px' }}>Book your photoshoot at your convenience</Text>

                        <Box
                            display="flex"
                            justifyContent='space-between'
                            gap="10px"
                        >
                            <Box display="flex" flexDir="column" w="50%">
                                <Text>First Name</Text>
                                <Input type='text' />
                            </Box>
                            <Box display="flex" flexDir="column" w="50%">
                                <Text>Last Name</Text>
                                <Input type='text' />
                            </Box>
                        </Box>

                        <Box display="flex" flexDir="column">
                            <Text>Mobile Number</Text>
                            <Input type="number" />
                        </Box>
                        <Box display="flex" flexDir="column">
                            <Text>Email</Text>
                            <Input type="email" />
                        </Box>
                        <Box display="flex" flexDir="column">
                            <Text>Enter Date</Text>
                            <Input type="date" />
                        </Box>
                        <Box display="flex" flexDir="column">
                            <Text>Enter Time</Text>
                            <Input type="time" />
                        </Box>

                        <Button
                            color='black'
                            bg="pink"
                            borderRadius="10px"
                        >
                            Send Message
                        </Button>
                    </Box>

                    <Box
                        w={{ base: '100%', lg: '40%' }}
                        border="1px solid black"
                        borderRadius="10px"
                        p="20px 20px"
                        display="flex"
                        flexDir="column"
                        gap="10px"
                        justifyContent='space-between'
                    >
                        <Text fontSize={{ base: '25px', lg: '30px' }}>Still have a confusion??</Text>
                        <Box
                            display="flex"
                            justifyContent='space-between'
                            gap="10px"
                        >
                            <Box display="flex" flexDir="column" w="50%">
                                <Text>First Name</Text>
                                <Input type='text' />
                            </Box>
                            <Box display="flex" flexDir="column" w="50%">
                                <Text>Last Name</Text>
                                <Input type='text' />
                            </Box>
                        </Box>

                        <Box display="flex" flexDir="column">
                            <Text>Mobile Number</Text>
                            <Input type="number" />
                        </Box>
                        <Box display="flex" flexDir="column">
                            <Text>Email</Text>
                            <Input type="email" />
                        </Box>
                        <Box>
                            <Text>Message</Text>
                            <Textarea rows = {4} />
                        </Box>
                        <Button
                            bg = "black"
                            color='white'
                            borderRadius="10px"
                        >
                            Send Message
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Contact