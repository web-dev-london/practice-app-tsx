import { Box } from "@chakra-ui/react";
import './styles.css'

const Strike = (props: {
    classStrike: string
}) => {
    return (
        <>
            <Box
                as={'div'}
                className={`strike ${props.classStrike}`}
            >
            </Box>
        </>
    );
}

export default Strike;