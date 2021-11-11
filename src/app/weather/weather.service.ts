import { Injectable } from "@angular/core";
import { EMPTY, from, Observable, of } from "rxjs";
import { CityDashboard, CityWeatherInformation } from "../shared/models/weather.models";


@Injectable()
export class WeatherService {

    getCitys(): Observable<CityDashboard[]> {
        return of(this.mockWeather);
    }

    getCity(id: number): Observable<CityWeatherInformation> {
        const foundCity = this.mockWeather.filter(city => city.id === id);
        return from(foundCity);
    }

    createCity(name: {addCity: string}) {
        const randomMain = ["Clouds", "Sun", "Rain", "Clear"]
        const newCity = {
            coord: {
                lon: -1,
                lat: 1
            },
            weather: [{
                id: 1234,
                main: randomMain[Math.floor(Math.random() * randomMain.length)],
                description: "good",
                icon: "wallE"
            }],
            base: "station",
            main: {
                temp: Math.floor(Math.random() * (320 - 250 + 250) + 320),
                feels_like: Math.floor(Math.random() * (320 - 250 + 250) + 320),
                temp_min: 100,
                temp_max: 100,
                pressure: 100,
                humidity: 100,
                sea_level: 100,
                grnd_level: 100
            },
            visibility: 10000,
            wind: {
                speed: 4.63,
                deg: 220
            },
            clouds: {
                all: 75
            },
            dt: 1636461865,
            sys: {
                type: 2,
                id: 2019646,
                country: "yeahaaa",
                sunrise: 1636441698,
                sunset: 1636474827
            },
            timezone: 2,
            id: Math.floor(Math.random() * (99999999 - 1000000 + 1000000) + 99999999),
            name: name.addCity,
            cod: 200
        }
        this.mockWeather.push(newCity)
    }

    mockWeather: CityWeatherInformation[] = [
        { "coord": { "lon": 12.375, "lat": 51.342 }, "weather": [{ "id": 803, "main": "Clouds", "description": "broken clouds", "icon": "04d" }], "base": "stations", "main": { "temp": 282.18, "feels_like": 279.23, "temp_min": 280.72, "temp_max": 283, "pressure": 1020, "humidity": 77 }, "visibility": 10000, "wind": { "speed": 5.81, "deg": 250, "gust": 5.81 }, "clouds": { "all": 75 }, "dt": 1636383497, "sys": { "type": 2, "id": 18814, "country": "DE", "sunrise": 1636352156, "sunset": 1636385557 }, "timezone": 3600, "id": 6548737, "name": "Leipzig", "cod": 200 },
        { "coord": { "lon": -112.074, "lat": 33.4484 }, "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01n" }], "base": "stations", "main": { "temp": 290.89, "feels_like": 289.42, "temp_min": 286.55, "temp_max": 293.65, "pressure": 1017, "humidity": 27, "sea_level": 1017, "grnd_level": 979 }, "visibility": 10000, "wind": { "speed": 0.61, "deg": 101, "gust": 1.02 }, "clouds": { "all": 5 }, "dt": 1636455517, "sys": { "type": 2, "id": 2030892, "country": "US", "sunrise": 1636466074, "sunset": 1636504190 }, "timezone": -25200, "id": 5308655, "name": "Phoenix", "cod": 200 },
        { "coord": { "lon": -74.006, "lat": 40.7143 }, "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01n" }], "base": "stations", "main": { "temp": 283.81, "feels_like": 282.86, "temp_min": 278.41, "temp_max": 286.56, "pressure": 1019, "humidity": 74 }, "visibility": 10000, "wind": { "speed": 3.09, "deg": 260 }, "clouds": { "all": 1 }, "dt": 1636455338, "sys": { "type": 2, "id": 2039034, "country": "US", "sunrise": 1636457765, "sunset": 1636494225 }, "timezone": -18000, "id": 5128581, "name": "New York", "cod": 200 },
        { "coord": { "lon": 2.3488, "lat": 48.8534 }, "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01d" }], "base": "stations", "main": { "temp": 282.22, "feels_like": 282.22, "temp_min": 280.8, "temp_max": 283.92, "pressure": 1027, "humidity": 85 }, "visibility": 10000, "wind": { "speed": 0.45, "deg": 23, "gust": 1.34 }, "clouds": { "all": 0 }, "dt": 1636455239, "sys": { "type": 2, "id": 2041230, "country": "FR", "sunrise": 1636440619, "sunset": 1636474718 }, "timezone": 3600, "id": 2988507, "name": "Paris", "cod": 200 },
        { "coord": { "lon": -0.1257, "lat": 51.5085 }, "weather": [{ "id": 804, "main": "Clouds", "description": "overcast clouds", "icon": "04d" }], "base": "stations", "main": { "temp": 287.53, "feels_like": 287.01, "temp_min": 285.49, "temp_max": 289.03, "pressure": 1024, "humidity": 76 }, "visibility": 10000, "wind": { "speed": 3.6, "deg": 240 }, "clouds": { "all": 97 }, "dt": 1636454871, "sys": { "type": 2, "id": 2019646, "country": "GB", "sunrise": 1636441698, "sunset": 1636474827 }, "timezone": 0, "id": 2643743, "name": "London", "cod": 200 }
    ];
}