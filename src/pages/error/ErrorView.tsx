import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import { Container, Box, Heading, Text } from "@chakra-ui/react";


const ErrorView = () => {
    const error = useRouteError() as Error;

    if (!isRouteErrorResponse(error)) {
        return;
    }

    return (
        <>
            <Container
                maxW={'7xl'}
            >
                <Box
                    p={'2rem'}
                >
                    <Heading
                        fontSize={'24px'}
                    >
                        Oops!
                    </Heading>
                    <Text
                        as={'p'}
                        fontSize={'18px'}
                    >
                        Sorry, an unexpected error has occured.
                    </Text>
                    <Text>{error.statusText || error.message}</Text>

                </Box>
            </Container>
        </>
    );
}

export default ErrorView;