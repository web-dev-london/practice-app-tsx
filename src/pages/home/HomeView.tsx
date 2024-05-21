import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { Container, Grid, Text } from "@chakra-ui/react";
import RecipeView from '../../recipe-item/RecipeView';


const HomeView = () => {
    const { recipes, error, loading } = useContext(GlobalContext);

    const recipesView = recipes && recipes.length > 0
        ? recipes.map((recipe, index) => {
            return (
                <RecipeView
                    key={index}
                    item={recipe}
                />
            )
        })
        : <Text
            fontSize={'20px'}
            fontWeight={'bold'}
            textAlign={'center'}
        >
            Please Type to Search.
        </Text>


    const loadingMsg = loading && <Text>Please wait, page is loading...</Text>
    const errorMessage = error && <Text>Sorr, an unexpected error occured.</Text>
    return (
        <>
            {loadingMsg}
            {errorMessage}
            <Container
                maxW={'7xl'}
                py={'2rem'}
            >
                <Grid
                    templateColumns={['repeat(1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
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

export default HomeView;