import { Box, Input } from "@chakra-ui/react";
import { ChangeEvent, KeyboardEvent } from 'react';

const InputWeatherView = (props: {
    city: string;
    setCity: (e: ChangeEvent<HTMLInputElement>) => void;
    inputKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;

}) => {
    return (
        <>
            <Box>
                <Input
                    type={'text'}
                    value={props.city}
                    onChange={props.setCity}
                    placeholder="Enter City Name"
                    onKeyDown={props.inputKeyDown}
                />
            </Box>
        </>
    );
}

export default InputWeatherView;