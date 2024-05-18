import { Heading, Box, Text } from "@chakra-ui/react";
import { WeatherApi } from "../weather-app/types";
import './styles.css'

const DescriptionsWeatherView = (props: {
    data: WeatherApi | undefined
}) => {
    if (props.data === undefined) {
        return
    }

    const celsius = () => {
        const fahrenheit = props.data && props.data.main.temp;
        if (fahrenheit === undefined) {
            return
        }
        const celsius = (fahrenheit - 32) * 5 / 9
        return celsius.toFixed();
    }

    const city = props.data && props.data.name;
    const country = props.data && props.data.sys.country;
    const temprature = props.data && <Text>{celsius()}°C</Text>
    const weatherMain = props.data && props.data.weather[0].main;
    const feels = props.data && <Text>{props.data.main.feels_like.toFixed()}°F</Text>
    const humidity = props.data && <Text>{props.data.main.humidity}%</Text>
    const wind = props.data && <Text>{props.data.wind.speed} MPH</Text>

    return (
        <>
            <Box
                className={'top'}
            >
                <Box
                    className={'location'}
                >
                    <Box
                        fontSize={'22px'}
                    >
                        {city}
                        <Text
                            ml="1rem"
                            as={'span'}>
                            {country}
                        </Text>
                    </Box>
                </Box>
                <Box
                    className={'temp'}
                >
                    <Heading
                        fontSize={'50px'}
                    >
                        {temprature}
                    </Heading>
                </Box>
                <Box
                    className={'description'}
                >
                    <Text
                    >
                        {weatherMain}
                    </Text>
                </Box>
            </Box>

            {props.data && props.data.name && <Box
                className={'bottom'}
            >
                <Box
                    className={'feels'}
                >
                    <Heading
                        fontSize={'18px'}
                        className="bold"
                    >
                        {feels}
                    </Heading>
                    <Text>Tempreture</Text>
                </Box>
                <Box
                    className={'humidity'}
                >
                    <Heading
                        fontSize={'18px'}
                        className="bold"
                    >
                        {humidity}
                    </Heading>
                    <Text>Humidity</Text>
                </Box>
                <Box
                    className={'wind'}
                >
                    <Heading
                        fontSize={'18px'}
                        className="bold"
                    >
                        {wind}
                    </Heading>
                    <Text>Winds</Text>
                </Box>
            </Box>}
        </>
    );
}



export default DescriptionsWeatherView;