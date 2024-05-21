import { Box, Container, Grid, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import NavigationView from "../../navigation/NavigationView";
import RecipeView from "../../recipe-item/RecipeView";

const FavoriteView = () => {

    const { favorite } = useContext(GlobalContext);

    const recipesView = favorite && favorite.length > 0 ?
        favorite.map((recipe, index) => {
            return (
                <RecipeView key={index} item={recipe} />
            )
        }) : <Text
            fontSize={'20px'}
            fontWeight={'bold'}
            textAlign={'center'}
        >
            Did not add to Favorite.
        </Text>


    return (
        <>
            <Box
            >
                <NavigationView />
            </Box>
            <Container
                maxW={'7xl'}
                py={'2rem'}
            >
                <Grid
                    templateColumns={'repeat(3, 1fr)'}
                    rowGap={7}
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    {recipesView}
                </Grid>
            </Container>
        </>
    );
}

export default FavoriteView;