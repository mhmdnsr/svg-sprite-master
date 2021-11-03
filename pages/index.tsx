import React, {DragEvent, useEffect, useRef, useState} from "react";
import {Box, Center, chakra, Circle, Flex, Image, Link, Text} from "@chakra-ui/react";
import spriteToSvgService from "@services/sprite-to-svg.service";
import IconsControlCenter from "@components/icons-control-center/icons-control-center";


function Home() {

    const [file, setFile] = useState<File | null>(null);
    const [icons, setIcons] = useState<{ name: string, icon: string }[]>([]);

    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (file) {
            spriteToSvgService(file).then((generatedIcons) => {
                setIcons(generatedIcons)
            });
        }
    }, [file]);

    const onDiscard = () => {
        setIcons([]);
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    }

    const onDropFile = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        const files = event.dataTransfer.files;
        if (files.length > 1 && files[0]) {
            event.dataTransfer.clearData();
        } else {
            let draggedFile = files[0];
            if (draggedFile.type == 'image/svg+xml') {
                setFile(files[0]);
            } else {
                event.dataTransfer.clearData();
            }
        }
    };

    const selectFileOnClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    return (
        <>
            <Center onClick={selectFileOnClick} h="100vh" maxH="100vh" minH="100vh" w="100vw" cursor="pointer"
                    onDrop={onDropFile}
                    onDragOver={(e) => e.preventDefault()}
                    onDragEnter={(e) => e.preventDefault()}
                    onDragLeave={(e) => e.preventDefault()}>
                <chakra.input display="none" type='file' accept='image/svg+xml' ref={fileInputRef}
                              onChange={(e) => setFile(() => {
                                  if (e?.target?.files) {
                                      return e.target.files[0];
                                  }
                                  return null;
                              })}/>
                <Center h="calc(100% - 10px)" w="calc(100% - 10px)" border="3px dashed #353D60" borderRadius="5px">
                    <Flex h="100%" w="100%" direction="column" justifyContent="center" alignItems="center">
                        <Text fontWeight="500" fontSize="17px" color="#353D60">Drag or Click to select SVG Sprite to
                            parse it</Text>
                        <Center h="100%" w="100%">
                            <Image src="/images/logo.png" w={["250px", "500px"]} rounded="md"/>
                        </Center>
                    </Flex>
                </Center>
            </Center>
            {icons.length > 0 &&
            <IconsControlCenter icons={icons} onDiscard={onDiscard}/>
            }
            <Circle w="30px" h="30px" position="absolute" top="10px" right="10px" zIndex="15">
                <Link w="100%" h="100%" href="https://github.com/mhmdnsr/svg-sprite-master" isExternal _focus={{outline: "none"}}>
                    <Image src="/images/github.svg" color="transparent"/>
                </Link>
            </Circle>
        </>
    );
}

export default Home;
