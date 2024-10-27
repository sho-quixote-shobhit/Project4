import { Box, Grid, GridItem, Text, Image } from '@chakra-ui/react';
import React from 'react';
import data from './howitworksdata';

const HowItWorks = () => {
    return (
        <Box
            w="100%"
            p={{ base: '60px 0px', lg: '100px 0px' }}
            color="black"
            bg="white"
        >
            <Box
                w={{ base: '95%', lg: '85%' }}
                m="auto"
                display="flex"
                flexDir="column"
                gap="20px"
            >
                <Text
                    alignSelf="center"
                    fontSize={{ base: '40px', lg: '60px' }}
                >
                    HOW IT WORKS?
                </Text>

                <Grid
                    templateColumns={{ base: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr' }}
                    gap="30px"
                >
                    {data.map((item, index) => (
                        <GridItem key={index}>
                            <Box
                                display="flex"
                                flexDir="column"
                                alignItems="center"
                                justifyContent="space-between"
                                position="relative"
                            >
                                <Text
                                    fontSize="80px"
                                    color="white"
                                    fontWeight="bold"
                                    position="absolute"
                                    top="0"
                                    left="0"
                                    pl={2}
                                >
                                    {item.id}
                                </Text>
                                <Image
                                    src={item.img}
                                    borderRadius="20px"
                                    h="340px"
                                    objectFit="cover"
                                    w="100%"
                                />
                                <Text mt={2} fontSize="24px">{item.title}</Text>
                            </Box>
                        </GridItem>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default HowItWorks;
