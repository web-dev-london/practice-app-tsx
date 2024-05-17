import { Button } from "@chakra-ui/react";
import './styles.css';

const Tile = (props: {
    value: string;
    player: string;
    onClick: () => void;
}) => {

    const hoverClass = props.value === null && props.player !== null
        ? `${props.player.toLowerCase()}-hover` : null;

    return (
        <>
            <Button
                className={`square ${hoverClass}`}
                onClick={props.onClick}
            >
                {props.value}
            </Button>
        </>
    );
}

export default Tile;