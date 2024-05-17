
import { Text } from "@chakra-ui/react";
import { GameState } from "./utils/GameState";

const GameOver = (props: {
    gameState: number
}) => {
    switch (props.gameState) {
        case GameState.inProgress:
            return <></>
        case GameState.playerOWins:
            return <Text
                as={'p'}
                className="game-over"
            >
                player: O Won
            </Text>;
        case GameState.playerXWins:
            return <Text
                as={'p'}
                className="game-over"
            >
                player: X Won
            </Text>;
        case GameState.draw:
            return <Text
                as={'p'}
                className="game-over"
            >
                Draw
            </Text>;
        default:
            break;
    }
}

export default GameOver;