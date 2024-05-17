import { Container, Heading, Text } from "@chakra-ui/react";
import UseFetchHook from "./UseFetchHook";


const Test = () => {
    const { data, error, loading } = UseFetchHook('https://dummyjson.com/products');


    const productsView = data
        && data.products
        && data.products.length > 0
        && data.products.map((item) => {
            return (
                <Text
                    as={'p'}
                    key={item.id}
                >
                    {item.title}
                </Text>
            )
        })

    const errorMsg = error && <Text as={'p'}>Sorry, Error Occured.</Text>
    const loadingMsg = loading && <Text as={'p'}>Please wait, data is loading...</Text>

    return (
        <>
            {errorMsg}
            {loadingMsg}
            <Container
                maxW={'xl'}
            >
                <Heading
                    fontSize={'20px'}
                    mb={'1rem'}
                >
                    Use Fetch Hook Example!
                </Heading>

                {productsView}
            </Container>
        </>
    );
}

export default Test;