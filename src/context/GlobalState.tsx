import React, {
    createContext,
    Dispatch,
    FormEvent,
    SetStateAction,
    useState
} from "react";
import router from "../main";

interface ReactChildren {
    children: React.ReactNode;
}

export interface FetchData {
    id: string;
    image_url: string;
    publisher: string;
    title: string;
}

interface Ingredient {
    description: string;
    quantity: number;
    unit: string;
}

export interface RecipeContains {
    cooking_time: number;
    id: string;
    image_url: string;
    ingredients: Ingredient[];
    publisher: string;
    servings: number;
    source_url: string;
    title: string;
}

export interface GlobalStateContext {
    searchParam: string;
    setSearchParam: Dispatch<SetStateAction<string>>;
    handleSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>;
    recipes: FetchData[];
    setRecipes: Dispatch<SetStateAction<FetchData[]>>;
    loading: boolean;
    setLoading: Dispatch<SetStateAction<boolean>>;
    error: string;
    setError: Dispatch<SetStateAction<string>>;
    detailsData: RecipeContains | null;
    setDetailsData: Dispatch<SetStateAction<RecipeContains | null>>;
    favorite: RecipeContains[];
    setFavorite: Dispatch<SetStateAction<RecipeContains[]>>;
    handleLinkToFavorite: (arg: RecipeContains) => void;
}

const initialState: GlobalStateContext = {
    searchParam: "",
    setSearchParam: () => { },
    handleSubmit: async () => { },
    recipes: [],
    setRecipes: () => [],
    loading: false,
    setLoading: () => { },
    error: '',
    setError: () => { },
    detailsData: null,
    setDetailsData: () => { },
    handleLinkToFavorite: () => { },
    favorite: [],
    setFavorite: () => [],
};

export const GlobalContext = createContext<GlobalStateContext>(initialState);

const GlobalState = ({ children }: ReactChildren) => {
    const [searchParam, setSearchParam] = useState<string>('');
    const [recipes, setRecipes] = useState<FetchData[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [detailsData, setDetailsData] = useState<RecipeContains | null>(null);
    const [favorite, setFavorite] = useState<RecipeContains[]>([]);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            setLoading(true);
            setError('');
            const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`);
            const data = await response.json();
            setLoading(false);

            if (data.data.recipes) {
                setRecipes(data.data.recipes);
                setSearchParam('');
                router.navigate('/')
            } else {
                setError('No recipes found');
            }
        } catch (error) {
            setLoading(false);
            if (error instanceof Error)
                setError(error.message || 'An error occurred');
        }
    };

    const handleLinkToFavorite = (currentItem: RecipeContains) => {
        setFavorite((prevFavorites) => {
            const isFavorite = prevFavorites.some(item => item.id === currentItem.id);
            if (isFavorite) {
                return prevFavorites.filter(item => item.id !== currentItem.id);
            } else {
                return [...prevFavorites, currentItem];
            }
        });
    };

    const value: GlobalStateContext = {
        searchParam,
        setSearchParam,
        handleSubmit,
        recipes,
        setRecipes,
        loading,
        setLoading,
        error,
        setError,
        detailsData,
        setDetailsData,
        favorite,
        setFavorite,
        handleLinkToFavorite,
    };

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalState;
