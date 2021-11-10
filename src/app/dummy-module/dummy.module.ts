import { NgModule } from "@angular/core";
import { DummyComponent } from "./dummy.component";
import { DummyRoutingModule } from "./dummy.routing.module";

@NgModule({
    declarations: [
        DummyComponent
    ],
    imports: [
        DummyRoutingModule
    ]
})
export class DummyModule {}