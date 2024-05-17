import { Box, Container, Heading, Input, Text } from "@chakra-ui/react";
import { ChangeEvent, useState, KeyboardEvent } from "react";
import { WeatherApi } from "./types";
import axios from 'axios'
import './styles.css'




const WeatherView = () => {
    const [search, setSearch] = useState("");
    const [data, setData] = useState<WeatherApi>();


    const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=imperial&appid=48861af6068117b1d88eab5250c80db6`

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    const handleFetchData = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            axios.get(url).then((response) => {
                setData(response.data)

            })
            setSearch('');
        }
    }

    function celsius() {
        const fahrenheit = data && data.main.temp;
        if (fahrenheit === undefined) {
            return
        }
        const celsius = (fahrenheit - 32) * 5 / 9;
        return celsius.toFixed()
    }


    const city = data && data.name
    const country = data && data.sys.country
    const temprature = data && <Text>{celsius()}°C</Text>
    const weatherMain = data && data.weather[0].main
    const feels = data && <Text>{data.main.feels_like.toFixed()}°F</Text>
    const humidity = data && <Text>{data.main.humidity}%</Text>
    const wind = data && <Text>{data.wind.speed.toFixed()}MPH</Text>


    return (
        <>
            <Box
                className={'backgroud'}
            >
                <Container
                    maxW={'lg'}
                    className={'weather-view'}
                >
                    <Input
                        value={search}
                        onChange={handleInputChange}
                        onKeyDown={handleFetchData}
                        type={'text'}
                        placeholder={'Enter City'}
                    />
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
                                    ml={'1rem'}
                                    as={'span'}
                                >
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

                    {data
                        && data.name
                        && <Box
                            className={'bottom'}
                        >
                            <Box
                                className={'feels'}
                            >
                                <Heading
                                    fontSize={'18px'}
                                    className={'bold'}
                                >
                                    {feels}
                                </Heading>
                                Fahrenheit
                            </Box>
                            <Box
                                className={'humidity'}
                            >
                                <Heading
                                    fontSize={'18px'}
                                    className={'bold'}
                                >
                                    {humidity}
                                </Heading>
                                Humidity
                            </Box>
                            <Box
                                className={'wind'}
                            >
                                <Heading
                                    fontSize={'18px'}
                                    className={'bold'}
                                >
                                    {wind}
                                </Heading>
                                Wind
                            </Box>
                        </Box>}
                </Container>
            </Box>
        </>
    );
}

export default WeatherView;