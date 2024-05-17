import laptop from './img/labtop.jpg';
import { Stack, HStack, IconButton, Heading, Box, Image, Text } from
    "@chakra-ui/react"
import { CloseIcon } from "@chakra-ui/icons";



const ModalContent = (props: {
    handleToggle: () => void
}) => {
    return (
        <>
            <Stack
                onClick={props.handleToggle}
                backgroundColor={'rgba(0,0,0,0.3)'}
                textAlign={'center'}
                p={4}
                position={'fixed'}
                w={'100vw'}
                h={'100vh'}
            >
                <HStack
                    position={'absolute'}
                    top={'50%'}
                    left={'50%'}
                    gap={'2rem'}
                    transform={'translate(-50%, -50%)'}
                    onClick={(e) => {
                        e.stopPropagation()
                    }}
                >
                    <Box
                    >
                        <Image
                            w={'300px'}
                            h={'200px'}
                            src={laptop}
                            alt="Laptop on the Table"
                        />
                    </Box>
                    <Box
                        display={'flex'}
                        flexDir={'row-reverse'}
                        justifyContent={'space-between'}
                        maxW={'50%'}
                    >

                        <IconButton
                            colorScheme='gray'
                            aria-label='Search database'
                            onClick={props.handleToggle}
                            icon={<CloseIcon />}
                        />

                        <Box
                        >
                            <Heading
                                fontSize={'1.5rem'}
                                color={'black'}
                                mb={'0.8rem'}
                            >
                                MacBook Air
                            </Heading>
                            <Text
                                as={'p'}
                                color={'black'}
                                fontSize={'15px'}
                            >
                                The MacBook Air is a line of laptop computers developed and manufactured by Apple since 2008. It features a thin, light structure in a machined aluminum case and currently either a 13-inch or 15-inch screen.
                            </Text>
                        </Box>
                    </Box>
                </HStack>
            </Stack>
        </>
    )
}

export default ModalContent