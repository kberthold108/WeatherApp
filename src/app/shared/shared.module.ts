import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSliderModule } from "@angular/material/slider";
import { MatToolbarModule } from "@angular/material/toolbar";
import { DegreeTransformPipe } from "./temp.pipe";


@NgModule({
    declarations: [
        DegreeTransformPipe
    ],
    imports: [
        CommonModule,
        MatSliderModule,
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatFormFieldModule,
        FormsModule,
    ],
    exports: [
        CommonModule,
        MatSliderModule,
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatFormFieldModule,
        FormsModule,
        DegreeTransformPipe,
    ]
})
export class SharedModule {}