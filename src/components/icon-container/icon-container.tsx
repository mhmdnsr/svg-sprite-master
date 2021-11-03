import React from 'react';
import {Box, Button, ButtonGroup, Center, Flex, SimpleGrid, Text, VStack} from "@chakra-ui/react";
import {DeleteIcon, DownloadIcon} from "@chakra-ui/icons";
import {downloadIcon} from "@services/download.service";


function IconContainer(props: { name: string, icon: string, index: number }) {
    const onDownload = (icon: string, name: string) => {
        downloadIcon({icon: icon, name: name});
    }

    return (
        <Box justifySelf="center" boxShadow="lg" border="2px dashed #353D60" borderRadius="10px" bg="white" title={props.name} w="165px"
             h="165px">
            <VStack spacing={4} align="stretch" w="100%" h="100%">
                <Box className={'icon-container'} borderBottom="1px dashed" w="100%" h="65px" d="flex"
                     justifyContent="center"
                     alignItems="center" dangerouslySetInnerHTML={{__html: props.icon}}>
                </Box>
                <VStack spacing={0} mt="0px !important" align="center" w="100%" h="100px">
                    <Center h="100%" w="100%">
                        <Text fontSize={16} fontWeight={500}>{props.name}</Text>
                    </Center>
                    <Flex w="100%" justifyContent="flex-end" mt="auto !important">
                        <Button leftIcon={<DownloadIcon/>} variant="solid" w="100%"
                                outline="none" outlineColor="transparent" color="secondaryBrand.700"
                                backgroundColor="secondaryBrand.50"
                                _focus={{
                                    outline: "none",
                                    outlineColor: "transparent",
                                    backgroundColor: "secondaryBrand.100"
                                }}
                                _hover={{
                                    outline: "none",
                                    outlineColor: "transparent",
                                    backgroundColor: "secondaryBrand.100"
                                }}
                                borderRadius="0 0 10px 10px"
                                onClick={() => onDownload(props.icon, props.name)}>Download</Button>
                    </Flex>
                </VStack>
            </VStack>
        </Box>
    );
}

export default IconContainer;
