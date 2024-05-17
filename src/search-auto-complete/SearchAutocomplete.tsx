import { Container, Input, Text } from "@chakra-ui/react";
import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import SearchView from "./SearchView";
import { Posts } from "./types";



const SearchAutocomplete = () => {
    const [post, setPost] = useState('')
    const [postData, setPostData] = useState<Posts[]>([]);
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const [findPost, setFindPost] = useState<Posts[]>([])

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value.toLowerCase()
        setPost(query)
        if (query.length > 1) {
            const filteredItem = postData.filter((item) => item.title.toLowerCase().indexOf(query) > -1)
            setFindPost(filteredItem)
        }
    }

    const handleItemClick = (e: MouseEvent<HTMLLIElement>) => {
        setPost(e.currentTarget.innerText)
        setFindPost([])
        console.log(e.currentTarget.innerText);
    }


    const fetchListOfPosts = async () => {
        try {
            setLoading(true);
            const response = await fetch('https://dummyjson.com/posts');
            const data = await response.json();

            if (data && data.posts && data.posts.length > 0) {
                setPostData(data.posts)
                setLoading(false)
                setErrorMsg(null)
            }

        } catch (e) {
            setLoading(false);
            let message;
            if (e instanceof Error) message = e.message
            else message = String(message);
            setErrorMsg(message)
        }
    }

    useEffect(() => {
        fetchListOfPosts()
    }, [])

    const loadingMessage = loading
        && <Text
            as={'p'}
        >
            Please wait, data is loading...
        </Text>

    const errorMessage = errorMsg
        && <Text
            as={'p'}
        >
            Sorry, Error Occured...
        </Text>


    return (
        <>
            {loadingMessage}
            {errorMessage}
            <Container
                maxW={'3xl'}
                mt={'2rem'}
                textAlign={'center'}
            >
                <Input
                    mb={'1rem'}
                    maxW={'30rem'}
                    placeholder="Type to search..."
                    value={post}
                    onChange={handleInputChange}
                />
                <SearchView
                    view={findPost}
                    handleClick={handleItemClick}
                />
            </Container>
        </>
    )
}

export default SearchAutocomplete