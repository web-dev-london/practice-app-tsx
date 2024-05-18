import { Box, Container } from "@chakra-ui/react";
import { ChangeEvent, useState, KeyboardEvent } from "react";
import InputWeatherView from "./InputWeatherView";
import { WeatherApi } from "../weather-app/types";
import DescriptionsWeatherView from "./DescriptionsWeatherView";
import './styles.css'

const WeatherView = () => {
    const [search, setSearch] = useState('');
    const [data, setData] = useState<WeatherApi>();

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=imperial&appid=48861af6068117b1d88eab5250c80db6`

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }


    const fetchWeatherData = async (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            const response = await fetch(url);
            const data = await response.json();
            setData(data);
            setSearch('')
        }

    }


    return (
        <>

            <Box
                className="backgroud"
            >
                <Container
                    maxW={'xl'}
                    className={'weather-view'}
                    py={'16px'}
                >
                    <InputWeatherView
                        city={search}
                        setCity={handleInputChange}
                        inputKeyDown={fetchWeatherData}
                    />
                    <DescriptionsWeatherView
                        data={data}
                    />
                </Container>
            </Box>
        </>
    );
}

export default WeatherView;