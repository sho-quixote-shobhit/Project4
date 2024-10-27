import { Box, Button, Text } from '@chakra-ui/react'
import React from 'react'

const Navbar = () => {
    return (
        <Box
            w="100%"
            bg="white"
            color='black'
        >
            <Box
                display="flex"
                w={{ base: '95%', lg: '85%' }}
                m='auto auto'
                justifyContent='space-between'
                p="20px 0px"
            >
                <Box></Box>

                <Box
                    display={{base : 'none' , lg : 'flex'}}
                    justifyContent='center'
                    alignItems='center'
                    gap="30px"
                >
                    <Text cursor='pointer' fontWeight='bold'>Sources</Text>
                    <Text cursor='pointer' fontWeight='bold'>ShowCase</Text>
                    <Text cursor='pointer' fontWeight='bold'>Company</Text>
                    <Text cursor='pointer' fontWeight='bold'>Studio</Text>
                </Box>

                <Box
                    display='flex'
                    justifyContent='flex-end'
                >
                    <Button fontWeight='bold' size='sm' color='white' bg="black" borderRadius="30px" px={5}>
                        Contact Us
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}

export default Navbar