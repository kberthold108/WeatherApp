import { Component, Input } from "@angular/core";
import { CityDashboard } from "../../shared/models/weather.models";
import { WeatherService } from "../../shared/weather.service";


@Component({
    selector: "basic-cards",
    templateUrl: "./basic-city-cards.component.html",
    styleUrls: ["./basic-city-cards.component.css"]
})

export class BasicCardsComponent {
    @Input() city: CityDashboard;

    constructor(public weatherService: WeatherService) {

    }


}