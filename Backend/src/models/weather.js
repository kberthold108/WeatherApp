import mongoose from "mongoose";

const weatherSchema = new mongoose.Schema({
    weather: [{
        id: Number,
        main: String,
        description: String,
        icon: String
    }],
    main: {
        temp: Number,
        feels_like: Number,
        temp_min: Number,
        temp_max: Number,
        pressure: Number,
        humidity: Number,
        sea_level: Number,
        grnd_level: Number
    },
    name: String,
    id: Number
})

const Weather = mongoose.model("Weather", weatherSchema);

export default Weather;