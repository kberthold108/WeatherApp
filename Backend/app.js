import { connectDb, Weather } from "./src/models/index.js";
import express from 'express';
import cors from "cors"
import axios from "axios"
const app = express();
const port = 3000;

app.use(cors({
    origin: "http://localhost:4200"
}))
app.use(express.json())

app.get("/api/getCities", async (req, res) => {
    const cities = await Weather.find();
    res.json(cities);
})

app.get("/api/getCity/:id", async (req, res) => {
    const { id } = req.params;
    const foundCity = await Weather.findOne({ id: id });

    if (!foundCity) {
        res.status(404).send(`City with id ${id} doesn't exist.`);
    }
    res.json(foundCity);
})

app.post("/api/addCity", async (req, res) => {
    const { name } = req.body;
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=50881c1bb15318f7f608bd26e8861879`);
        const data = response.data;
        const cityWeather = new Weather({
            weather: [{
                id: data.weather[0].id,
                main: data.weather[0].main,
                description: data.weather[0].description,
                icon: data.weather[0].icon
            }],
            main: {
                temp: data.main.temp,
                feels_like: data.main.feels_like,
                temp_min: data.main.temp_min,
                temp_max: data.main.temp_max,
                pressure: data.main.pressure,
                humidity: data.main.humidity,
                sea_level: data.main.sea_level,
                grnd_level: data.main.grnd_level
            },
            name: data.name,
            id: data.id
        });
        cityWeather.save((err, city) => {
            if (err) {
                console.error(err);
            }
            console.log(`${city.name} saved to the database`);
        });
        res.json(data);
    } catch (err) {
        if (err.response.status === 404) {
            res.status(404).send(`City with name ${name} cannot be found.`);
        }
        res.send(err);
    }
})

connectDb().then(async () => {
    Weather.count(async function (err, count) {
        if (count) {
            return;
        }
        await prepopulateDatabase();
    });
    app.listen(port, () => {
        console.log("online on localhost:" + port);
    })
})

async function prepopulateDatabase() {
    for (const city of prePopulatedCities) {
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=50881c1bb15318f7f608bd26e8861879`);
            const data = response.data;
            const cityWeather = new Weather({
                weather: [{
                    id: data.weather[0].id,
                    main: data.weather[0].main,
                    description: data.weather[0].description,
                    icon: data.weather[0].icon
                }],
                main: {
                    temp: data.main.temp,
                    feels_like: data.main.feels_like,
                    temp_min: data.main.temp_min,
                    temp_max: data.main.temp_max,
                    pressure: data.main.pressure,
                    humidity: data.main.humidity,
                    sea_level: data.main.sea_level,
                    grnd_level: data.main.grnd_level
                },
                name: data.name,
                id: data.id
            })
            cityWeather.save((err, city) => {
                if (err) {
                    console.error(err);
                }
                console.log(`${city.name} saved to the database`);
            })
        } catch (err) {
            throw Error(err);
        }
    }
}

const prePopulatedCities = ["Leipzig", "Phoenix", "London", "Paris", "New York"];
