const express = require("express");
const cors = require('cors')
const axios = require("axios").default;
const app = express();
const port = 3000;

app.use(cors({
    origin: "http://localhost:4200"
}))
app.use(express.json())

app.get("/api/getCities", async (req, res) => {
    if(database.length === 0) {
        try {
            await prepopulateDatabase();
        } catch(err) {
            console.log(err);
            res.send(err);
        }
    }
    res.json(database);
})

app.get("/api/getCity/:id", (req, res) => {
    const {id} = req.params;
    const foundCity = database.find(city => city.id === Number(id));
    
    if (!foundCity) {
        res.status(404).send(`City with id ${id} doesn't exist.`);
    }
    res.json(foundCity);
})

app.post("/api/addCity", async (req, res) => {
    console.log("Entiring addCity");
    const {name} = req.body;
    try {
        const response  = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=50881c1bb15318f7f608bd26e8861879`);
        const data = response.data;
        database.push(data);
        res.json(data);
    } catch (err) {
        if (err.response.status === 404) {
            res.status(404).send(`City with name ${name} cannot be found.`);
        }
        res.send(err);
    }
})

app.listen(port, () => {
    console.log("online on localhost:" + port);
})

async function prepopulateDatabase() {
    for (const city of prePopulatedCities) {
        try {
            const response  = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=50881c1bb15318f7f608bd26e8861879`);
            const data = response.data;
            database.push(data);
        } catch(err) {
            throw Error(err);
        }
    }
}

const prePopulatedCities = ["Leipzig", "Phoenix", "London", "Paris", "New York"];
const database = [];
