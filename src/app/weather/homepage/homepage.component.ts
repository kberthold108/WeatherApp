import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { CityDashboard } from "../../shared/models/weather.models";
import { WeatherService } from "../weather.service";



@Component({
    selector: "homepage",
    templateUrl: "./homepage.component.html",
    styleUrls: ["./homepage.component.css"]
})

export class HomepageComponent {
    cities$: Observable<CityDashboard[]>;
    
    constructor(public weather:WeatherService) {
        this.cities$ = weather.getCitys();
    }

    onClickSubmit(name) {
        
        this.weather.createCity(name);
    }
}   