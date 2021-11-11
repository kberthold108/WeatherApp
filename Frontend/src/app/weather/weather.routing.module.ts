import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CityDetailComponent } from "./city-detail/city-details.component";
import { HomepageComponent } from "./homepage/homepage.component";


const routes: Routes = [
    {
        path: "",
        redirectTo: "/homepage",
        pathMatch: "full"
    },
    {
        path: 'homepage',
        component: HomepageComponent
    },
    {
        path: "city/:id",
        component: CityDetailComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WeatherRoutingModule { }