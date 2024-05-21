import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
    ListItem,
    Text,
    Box,
    Badge,
    Button,
    Card,
    CardBody,
    CardFooter,
    Container,
    Heading,
    Stack,
    UnorderedList,
    Image
} from "@chakra-ui/react";
import NavigationView from "../../navigation/NavigationView";
import { GlobalContext } from "../../context/GlobalState";

const DetailView = () => {
    const {
        detailsData,
        setDetailsData,
        favorite,
        handleLinkToFavorite,
    } = useContext(GlobalContext);
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);
                const data = await response.json();
                if (data.data) {
                    setDetailsData(data.data.recipe);
                }
            } catch (error) {
                console.error("Error occured to recipe details:", error);
            }
        };
        fetchData();
    }, [id, setDetailsData]);

    if (!detailsData) {
        return <Text>Loading...</Text>;
    }

    const itemIngredients = detailsData.ingredients?.map((ingredient, index) => (
        <ListItem key={index}>
            <Text as="span" mr={2}>
                {ingredient.quantity} {ingredient.unit}
            </Text>
            <Text as="span">{ingredient.description}</Text>
        </ListItem>
    ));


    return (
        <>
            <Box
            >
                <NavigationView />
            </Box>
            <Container maxW="7xl">
                <Card
                    my={7}
                    direction={{ base: 'column', sm: 'row' }}
                    overflow="hidden"
                    variant="outline"
                    justifyContent="space-between"
                    w="100%"
                    maxW="73%"
                >
                    <Image
                        objectFit="fill"
                        maxW={{ base: '100%', sm: '55%' }}
                        src={detailsData.image_url}
                        alt={detailsData.title}
                    />

                    <Stack>
                        <CardBody>
                            <Text as="span">
                                <Badge p="10px 20px" borderRadius="4px" colorScheme="green">
                                    {detailsData.publisher}
                                </Badge>
                            </Text>
                            <Heading size="md" mt={['10px', '14px']}>
                                {detailsData.title}
                            </Heading>
                            <UnorderedList py="2" styleType="disc">
                                {itemIngredients}
                            </UnorderedList>
                        </CardBody>

                        <CardFooter>
                            <Button
                                variant="solid"
                                colorScheme="blue"
                                onClick={() => handleLinkToFavorite(detailsData)}
                            >
                                {favorite && favorite.findIndex(item => item.id === detailsData.id) !== -1
                                    ? 'Remove from Favorites'
                                    : 'Add to Favorites'}
                            </Button>
                        </CardFooter>
                    </Stack>
                </Card>
            </Container>
        </>
    );
};

export default DetailView;
