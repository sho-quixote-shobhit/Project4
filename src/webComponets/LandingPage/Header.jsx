import { Box, Button, Text, Image } from '@chakra-ui/react';
import React from 'react';
import img from '../../assests/img1.png'

const Header = () => {
    return (
        <Box w="100%" color="black" bg="white">
            <Box
                w={{ base: '95%', lg: '85%' }}
                p={{ base: '60px 0px', lg: '100px 0px' }}
                m="auto"
                display="flex"
                flexDir={{ base: 'column', lg: 'row' }}
                gap={{ base: "40px", lg: '20px' }}
                alignItems="stretch"
            >
                {/* Left Section */}
                <Box
                    flex="1"
                    display="flex"
                    flexDir="column"
                    justifyContent="center"
                    gap="20px"
                >
                    <Text fontSize={{ base: '40px', md : '60px' , lg: '80px' }} lineHeight="1.3">
                        Effortless Photography Services at Your Doorstep
                    </Text>

                    <Text align="center" fontSize={{base : '18px' , lg : '20px'}}>
                        From pickup to delivery, we make your photoshoot seamless.
                    </Text>

                    <Button
                        bg="#F068C2"
                        color="black"
                        border="1px solid black"
                        borderRadius="20px"
                        w="50%"
                    >
                        Book Your Photoshoot
                    </Button>
                </Box>

                {/* Right Section - Circular Image */}
                <Box
                    flex="1"
                    display="flex"
                    justifyContent={{base : 'center' , lg : 'flex-end'}}
                    alignItems="center"
                    bgGradient='linear(to-r, green.200, pink.500)'
                >
                    <Box
                        position="relative"
                        width="100%"
                        maxWidth={{ base: '350px', lg: '500px' }}
                        aspectRatio={1}
                        borderRadius="50%"
                        overflow="hidden"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        className='gradient'
                    >
                        <Image
                            src={img}
                            alt="Immersed Image"
                            objectFit="cover"
                            width="100%"
                            height="100%"
                            mixBlendMode="multiply"
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Header;
