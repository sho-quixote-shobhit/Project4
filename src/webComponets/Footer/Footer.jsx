import { Box , Text } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
    return (
        <Box
            w = "100%"
            color = "black"
            bg = "white"
        >
            <Box
                w = {{base : '95%' , lg : '85%'}}
                m = "auto auto"
                display="flex"
                justifyContent="center"
                alignItems="center"
                h = "400px"
            >
                <Text fontSize="50px">
                    Footer
                </Text>
            </Box>
        </Box>
    )
}

export default Footer