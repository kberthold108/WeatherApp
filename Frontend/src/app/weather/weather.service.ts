import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CityDashboard, CityWeatherInformation } from "../shared/models/weather.models";
import { HttpClient } from "@angular/common/http"


@Injectable()
export class WeatherService {

    baseUrl: string = "http://localhost:3000/api";

    constructor(private http: HttpClient) { }

    getCities(): Observable<CityDashboard[]> {
        return this.http.get<CityDashboard[]>(`${this.baseUrl}/getCities`);
    }

    getCity(id: number): Observable<CityDashboard> {
        return this.http.get<CityDashboard>(`${this.baseUrl}/getCity/${id}`);
    }

    createCity(newCity: { addCity: string }): Observable<CityDashboard> {
        return this.http.post<CityDashboard>(`${this.baseUrl}/addCity`, { name: newCity.addCity });  
    }
}