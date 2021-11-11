import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { BasicCardsComponent } from "./basic-city-card/basic-city-cards.component";
import { CityDetailComponent } from "./city-detail/city-details.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { WeatherRoutingModule } from "./weather.routing.module";
import { WeatherService } from "./weather.service";


@NgModule({
    declarations: [
        HomepageComponent,
        CityDetailComponent,
        BasicCardsComponent
    ],
    imports: [
        SharedModule,
        WeatherRoutingModule,
        HttpClientModule
    ],
    providers: [{provide: WeatherService, useClass: WeatherService}]
})
export class WeatherModule {}