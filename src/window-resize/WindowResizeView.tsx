import { Container, Heading, Text } from "@chakra-ui/react";
import useWindowSizeHook from "./useWindowSizeHook";

const WindowResizeView = () => {
    // Hook
    const { width, height } = useWindowSizeHook()

    return (
        <>
            <Container
                textAlign={'center'}
                maxW={'lg'}
            >
                <Heading
                    as={'h1'}
                    fontSize={'22px'}
                    mb={'1.5rem'}
                >
                    Use Window Resize Custom Hook.
                </Heading>
                <Text
                    as={'p'}
                >
                    Width is {width}
                </Text>
                <Text
                    as={'p'}
                >
                    Height is  {height}
                </Text>
            </Container>
        </>
    );
}

export default WindowResizeView;