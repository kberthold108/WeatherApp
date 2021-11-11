import { Component, OnDestroy, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { CityDashboard } from "../../shared/models/weather.models";
import { WeatherService } from "../weather.service";



@Component({
    selector: "homepage",
    templateUrl: "./homepage.component.html",
    styleUrls: ["./homepage.component.css"]
})

export class HomepageComponent implements OnInit {
    cities: CityDashboard[];

    constructor(public weatherService: WeatherService) {
    }

    ngOnInit(): void {
        this.getCities();
    }

    onClickSubmit(name) {
       this.weatherService.createCity(name).subscribe((newCity) => {
            console.log(newCity);
            this.getCities();
        });
    }

    getCities() {
        this.weatherService.getCities().subscribe(data =>  this.cities = data);
    }
}