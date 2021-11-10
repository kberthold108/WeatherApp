import { Component } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Observable } from "rxjs";
import { CityWeatherInformation } from "../../shared/models/weather.models";
import { WeatherService } from "../../shared/weather.service";


@Component({
    templateUrl: "./city-details.component.html",
    styleUrls: ["./city-details.component.css"]
})

export class CityDetailComponent {
    city$: Observable<CityWeatherInformation>
    constructor(private route: ActivatedRoute, private weather: WeatherService) {}

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.city$ = this.weather.getCity(Number(params["id"]))
        })
    }
}