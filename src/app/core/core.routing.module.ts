import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


const routes: Routes = [
    { path: "", loadChildren: () => import("../weather/weather.module").then(m => m.WeatherModule) },

    { path: "dummy", loadChildren: () => import("../dummy-module/dummy.module").then(m => m.DummyModule) },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class CoreRoutingModule {

}

