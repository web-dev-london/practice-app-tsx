import { Button } from "@chakra-ui/react";
import { GameState } from "./utils/GameState";

const Reset = (props: {
    gameState: number;
    handleReset: () => void;
}) => {

    if (props.gameState === GameState.inProgress) {
        return;
    }
    return (
        <>
            <Button
                colorScheme="blue"
                onClick={props.handleReset}
            >
                Reset Game
            </Button>
        </>
    );
}

export default Reset;