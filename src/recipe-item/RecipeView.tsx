import { FetchData } from "../context/GlobalState";
import { Container, Card, CardBody, Image, Stack, Badge, Heading, Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";


const RecipeView = (props: {
    item: FetchData
}) => {
    return (
        <>
            <Container
                maxW={'7xl'}
            >
                <Card
                    maxW='sm'
                >
                    <CardBody
                    >
                        <Image
                            w={'100%'}
                            h={'300px'}
                            src={props.item.image_url}
                            alt='Recipe Item'
                            borderRadius='lg'
                            objectFit={'cover'}
                        />
                        <Stack mt='6' spacing='3'>

                            <Badge
                                p={'10px 20px'}
                                borderRadius={'4px'}

                                textAlign={'center'}
                                colorScheme={'green'}
                            >
                                {props.item.publisher}
                            </Badge>
                            <Heading size='md'>{props.item.title}</Heading>
                            <NavLink to={`/detailview/${props.item?.id}`}> <Button colorScheme='blue'>View Recipe</Button></NavLink>
                        </Stack>
                    </CardBody>
                </Card>
            </Container>
        </>
    );
}

export default RecipeView;