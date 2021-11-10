import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { BasicCardsComponent } from "./basic-city-card/basic-city-cards.component";
import { CityDetailComponent } from "./city-detail/city-details.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { WeatherRoutingModule } from "./weather.routing.module";


@NgModule({
    declarations: [
        HomepageComponent,
        CityDetailComponent,
        BasicCardsComponent
    ],
    imports: [
        SharedModule,
        WeatherRoutingModule
    ]
    
})
export class WeatherModule {}