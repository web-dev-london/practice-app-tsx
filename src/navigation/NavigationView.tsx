import { NavLink } from 'react-router-dom';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
    Avatar,
    Box,
    Button,
    Container,
    Flex,
    HStack,
    IconButton,
    Input,
    Menu,
    MenuButton,
    Stack,
    useColorModeValue,
    useDisclosure
} from '@chakra-ui/react';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const NavigationView = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { searchParam, setSearchParam, handleSubmit } = useContext(GlobalContext)

    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Container
                    maxW={'7xl'}
                >
                    <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                        <IconButton
                            size={'md'}
                            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                            aria-label={'Open Menu'}
                            display={{ md: 'none' }}
                            onClick={isOpen ? onClose : onOpen}
                        />
                        <HStack spacing={8} alignItems={'center'}>
                            <NavLink
                                to={'/'}
                            >
                                Logo
                            </NavLink>
                            <HStack
                                as={'nav'}
                                spacing={4}
                                display={{ base: 'none', md: 'flex' }}
                            >
                                <NavLink
                                    to={'/favoriteview'}
                                >
                                    Favorite
                                </NavLink>
                                <NavLink
                                    to={'/detailview/:'}
                                >
                                    Detail
                                </NavLink>
                                <NavLink
                                    to={'/about'}
                                >
                                    About Us
                                </NavLink>
                            </HStack>
                        </HStack>
                        <Flex
                            alignItems={'center'}
                            columnGap={5}
                        >
                            <form
                                onSubmit={handleSubmit}
                            >
                                <Input
                                    size={'sm'}
                                    placeholder={'Search'}
                                    borderRadius={'5px'}
                                    type={'text'}
                                    value={searchParam}
                                    onChange={(e) => setSearchParam(e.target.value)}
                                />
                            </form>
                            <Menu>
                                <MenuButton
                                    as={Button}
                                    rounded={'full'}
                                    variant={'link'}
                                    cursor={'pointer'}
                                    minW={0}>
                                    <Avatar
                                        size={'sm'}
                                        src={
                                            'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                                        }
                                    />
                                </MenuButton>
                            </Menu>
                        </Flex>
                    </Flex>
                    {isOpen ? (
                        <Box pb={4} display={{ md: 'none' }}>
                            <Stack as={'nav'} spacing={4}>
                                <NavLink
                                    to={'/favoriteview'}
                                >
                                    Favorite
                                </NavLink>
                                <NavLink
                                    to={'/detailview'}
                                >
                                    Detail
                                </NavLink>
                                <NavLink
                                    to={'/about'}
                                >
                                    About Us
                                </NavLink>
                            </Stack>
                        </Box>
                    ) : null}
                </Container>
            </Box>
        </>
    );
}

export default NavigationView;