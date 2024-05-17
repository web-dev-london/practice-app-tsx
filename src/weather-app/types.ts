export interface WeatherApi {
    name: string;
    sys: Sys;
    main: Main;
    weather: Weather[];
    wind: Wind;
}

interface Sys {
    country: string
}

interface Main {
    temp: number;
    feels_like: number;
    humidity: number;
}

interface Wind {
    speed: number;
}

interface Weather {
    main: string;
}

