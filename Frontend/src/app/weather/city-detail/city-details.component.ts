import { Component } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { EMPTY, Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { CityDashboard } from "../../shared/models/weather.models";
import { WeatherService } from "../weather.service";


@Component({
    templateUrl: "./city-details.component.html",
    styleUrls: ["./city-details.component.css"]
})

export class CityDetailComponent {
    city$: Observable<CityDashboard>
    errorMessage: string
    constructor(private route: ActivatedRoute, private weather: WeatherService) { }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.city$ = this.weather.getCity(Number(params["id"])).pipe(
                catchError((err) => {
                    this.errorMessage = err.error;
                    return EMPTY;
                })
            )
        })
    }
}