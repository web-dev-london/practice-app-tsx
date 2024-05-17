import { Button, Container, HStack, Input, Text } from "@chakra-ui/react"
import { ChangeEvent, FormEvent, useCallback, useEffect, useState } from "react"
import ProfileView from "./ProfileView"
import { Profile } from './type'


const ProfileFinder = () => {
    const [user, setUser] = useState('ab')
    const [userData, setUserData] = useState<Profile>();
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUser(e.target.value);
    }

    const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        fetchUserData()
    }


    const fetchUserData = useCallback(async () => {
        try {
            setLoading(true);
            const response = await fetch(`https://api.github.com/users/${user}`, {
                method: 'Get',
                headers: {
                    'Authorization': 'token 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'
                }
            });
            const data = await response.json();
            console.log(data);
            if (data) {
                setUserData(data)
                setLoading(false)
            }
        } catch (e) {
            setLoading(false)
            let message;
            if (e instanceof Error)
                message = e.message
            else message = String(message)
            setErrorMsg(message)
        }
    }, [user])


    useEffect(() => {
        fetchUserData()
    }, [fetchUserData])


    const loadingMessage = loading && <Text>Please wait, data is loading...</Text>
    const errorMessage = errorMsg && <Text>Sorry, Error Occured...</Text>
    return (
        <>
            {loadingMessage}
            {errorMessage}
            <Container
                p={'10px'}
                maxW={'3xl'}
                display={'flex'}
                flexDir={'column'}
                alignItems={'center'}
            >
                <HStack
                    justifyContent={'center'}
                >
                    <form
                        onSubmit={handleFormSubmit}
                        style={{ display: 'flex' }}
                    >
                        <Input
                            w={'300px'}
                            placeholder="Search Github Username..."
                            type="text"
                            value={user}
                            onChange={handleInputChange}
                        />
                        <Button
                            colorScheme={'blue'}
                            type={'submit'}
                        >
                            Search
                        </Button>
                    </form>
                </HStack>
                <ProfileView
                    user={userData}
                />
            </Container>
        </>
    )
}

/* 
avatar_url, public_repos, name, login, created_at, location
 */

export default ProfileFinder