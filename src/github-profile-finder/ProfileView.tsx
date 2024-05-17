import { Profile } from "./type"
import { Box, Image, Link, Text } from '@chakra-ui/react';

const ProfileView = (props: {
    user: Profile | undefined;
}) => {
    if (props.user === undefined) {
        return <></>
    }
    const { avatar_url, public_repos, name, login, created_at, location } = props.user;

    const createdDate = new Date(created_at)
    return (
        <>
            <Box
                border={'1px solid'}
                borderColor={'gray'}
                borderRadius={'5px'}
                maxW={'md'}
                p={'1rem'}
                m={'1rem'}
                display={'flex'}
                columnGap={'1.2rem'}
                alignItems={'center'}
                justifyContent={'space-between'}
            >
                <Box
                >
                    <Image
                        border={'2px solid'}
                        borderColor={'plum'}
                        borderRadius={'full'}
                        boxSize={'150px'}
                        alt={'Profile Picture'}
                        src={avatar_url}
                    />
                </Box>
                <Box
                >
                    <Link
                        color={'purple.500'}
                        _hover={{ color: 'blue.500' }}
                        href={`https://github.com/${login}`}
                        isExternal>
                        {name || login}
                    </Link>
                    <Text
                        as={'p'}
                    >
                        User join on {`${createdDate.getDate()} ${createdDate.toLocaleString('en-us', {
                            month: 'short'
                        })} ${createdDate.getFullYear()}`}
                    </Text>

                    <Box

                    >
                        <Text
                            as={'span'}
                            mr={'5px'}
                        >
                            Location:
                        </Text>
                        <Text
                            as={'span'}
                        >
                            {location}
                        </Text>
                    </Box>
                    <Box
                    >
                        <Text
                            as={'span'}
                            mr={'5px'}
                        >
                            Public Reposotories:
                        </Text>
                        <Text
                            as={'span'}
                        >
                            {public_repos}
                        </Text>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default ProfileView;