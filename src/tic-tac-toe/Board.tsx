import { Box, Stack } from "@chakra-ui/react";
import Tile from "./Tile";
import './styles.css';
import Strike from "./Strike";

const Board = (props: {
    tiles: string[];
    player: string;
    classStrike: string
    handleTileClick: (arg: number) => void;
}) => {
    return (
        <>
            <Stack
                as={'div'}
                className={'board'}
                gap={0}
                mb={'1rem'}
            >
                <Box>
                    <Tile
                        value={props.tiles[0]}
                        player={props.player}
                        onClick={() => props.handleTileClick(0)}
                    />
                    <Tile
                        value={props.tiles[1]}
                        player={props.player}
                        onClick={() => props.handleTileClick(1)}
                    />
                    <Tile
                        value={props.tiles[2]}
                        player={props.player}
                        onClick={() => props.handleTileClick(2)}
                    />
                </Box>
                <Box>
                    <Tile
                        value={props.tiles[3]}
                        player={props.player}
                        onClick={() => props.handleTileClick(3)}
                    />
                    <Tile
                        value={props.tiles[4]}
                        player={props.player}
                        onClick={() => props.handleTileClick(4)}
                    />
                    <Tile
                        value={props.tiles[5]}
                        player={props.player}
                        onClick={() => props.handleTileClick(5)}
                    />
                </Box>
                <Box>
                    <Tile
                        value={props.tiles[6]}
                        player={props.player}
                        onClick={() => props.handleTileClick(6)}
                    />
                    <Tile
                        value={props.tiles[7]}
                        player={props.player}
                        onClick={() => props.handleTileClick(7)}
                    />
                    <Tile
                        value={props.tiles[8]}
                        player={props.player}
                        onClick={() => props.handleTileClick(8)}
                    />
                </Box>
                <Strike
                    classStrike={props.classStrike}
                />
            </Stack>
        </>
    );
}

export default Board;