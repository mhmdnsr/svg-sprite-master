import React, {MouseEventHandler, useEffect} from "react";
import {
    Box,
    Button,
    ButtonGroup,
    Flex,
    HStack,
    Image,
    SimpleGrid,
    Slide,
    Spacer,
    useDisclosure
} from "@chakra-ui/react";
import IconContainer from "@components/icon-container/icon-container";
import {downloadAllIcons} from "@services/download.service";
import {CloseIcon, DownloadIcon} from "@chakra-ui/icons";


function IconsControlCenter(props: { icons: { name: string, icon: string }[], onDiscard: MouseEventHandler<HTMLButtonElement> }) {

    const {isOpen, onOpen, onClose} = useDisclosure();

    useEffect(() => {
        if (props.icons.length > 0)
            onOpen();
        else
            onClose();

    }, [props.icons]);

    const onDownloadAll = () => {
        if (props.icons && props.icons.length > 0) {
            downloadAllIcons(props.icons);
        }
    };

    return (
        <Slide direction="bottom" in={isOpen}
               style={{zIndex: 10, position: 'absolute', minHeight: '100vh', overflowX: 'auto', top: 0}}>
            <Box p="40px" minHeight="100vh" bg="white" rounded="0" shadow="md">
                <Flex border="3px solid #2d3452" justifyContent={["center", "center", "space-between"]} alignItems="center" borderRadius="10px" flexWrap="wrap">
                    <Box p="10px" m="0 10px">
                        <Image src="/images/logo.png" w="130px"/>
                    </Box>

                    <Flex p="10px" flexWrap="wrap" justifyContent="center" alignItems="center">
                        <Button m="10px" leftIcon={<DownloadIcon/>} disabled={props.icons.length == 0} onClick={onDownloadAll}
                                variant="solid" colorScheme="secondaryBrand">Download All</Button>
                        <Button m="10px" leftIcon={<CloseIcon/>} onClick={props.onDiscard}
                                variant="outline" colorScheme="secondaryBrand">Discard & Back</Button>
                    </Flex>
                </Flex>


                <SimpleGrid spacing="8" pt="10" pb="10" minChildWidth="165px" textAlign="center"
                    rounded="lg">
                    {props.icons.map((icon, index) => (
                        <IconContainer name={icon.name} icon={icon.icon} index={index} key={`svg-icon-${index}`}/>
                    ))}
                </SimpleGrid>
            </Box>
        </Slide>
    );
}

export default IconsControlCenter;
