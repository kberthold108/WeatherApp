import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./nav/navbar.component";
import { CoreRoutingModule } from "./core.routing.module"

@NgModule({
    declarations: [
        FooterComponent,
        NavbarComponent
    ],
    imports: [
        SharedModule,
        CoreRoutingModule
    ],
    exports: [
        FooterComponent,
        NavbarComponent,
        
    ]
})

export class CoreModule {}