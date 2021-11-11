import mongoose from "mongoose";
import Weather from "./weather.js";

const connectDb = () => {
    return mongoose.connect("mongodb://127.0.0.1:27017/weather-app");
}
export { connectDb, Weather };
