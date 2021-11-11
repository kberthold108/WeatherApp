interface Coordinates {
    lon: number
    lat: number
}

interface Weather {
    id: number
    main: string
    description: string
    icon: string
}

interface Main {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
    sea_level?: number
    grnd_level?: number
}

interface Wind {
    speed: number,
    gust?: number
    deg: number
}

interface Clouds {
    all: number
}

interface SystemInformation {
    type: number
    id: number
    country: string,
    sunrise: number
    sunset: number
}

export interface CityWeatherInformation {
    coord: Coordinates
    weather: Weather[]
    base: string
    main: Main
    visibility: number
    wind: Wind
    clouds: Clouds
    dt: number
    sys: SystemInformation
    timezone: number
    id: number
    name: string
    cod: number
}

export interface CityDashboard {
    weather: Weather[]
    main: Main
    name: string
    id: number
}