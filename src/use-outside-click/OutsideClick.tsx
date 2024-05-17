import { Box, Container, Heading, Button, Text } from "@chakra-ui/react";
import { useRef, useState } from "react";
import UseOutsideClickHook from "./UseOutsideClickHook";

const OutsideClick = () => {
    const [show, setShow] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);

    UseOutsideClickHook(ref, () => setShow(false))

    const handleClick = () => setShow(!show);

    const contents = show
        ? <Box
            ref={ref}
            as={'div'}
            textAlign={'center'}
            mt={'2rem'}
            border={'1px solid'}
            borderColor={'blue'}
            p={'1rem'}
            borderRadius={'5px'}
        >
            <Heading
                as={'h1'}
                fontSize={'20px'}
                mb={'2rem'}
            >
                This is a popover
            </Heading>
            <Text as={'p'}> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed officia eum soluta eveniet, praesentium eius ea nemo et itaque labore aperiam perspiciatis non, optio laborum deserunt vel cum. Libero, dolore?
                Mollitia quia cumque est asperiores nobis eos enim possimus amet, dicta ipsam quod, officiis earum optio qui obcaecati a facilis voluptatibus modi. Distinctio rem itaque ipsam, vitae ad delectus nesciunt. </Text>
        </Box>
        : <Button
            onClick={handleClick}
        >
            Click to Show
        </Button>

    return (
        <>
            <Container
                maxW={'xl'}
            >
                <Box
                    as={'div'}
                >
                    {contents}
                </Box>
            </Container>
        </>
    );
}

export default OutsideClick;