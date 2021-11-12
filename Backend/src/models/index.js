import mongoose from "mongoose";
import Weather from "./weather.js";

const connectDb = () => {
    return mongoose.connect("mongodb://database:27017/weather-app");
}
export { connectDb, Weather };
