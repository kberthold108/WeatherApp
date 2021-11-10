import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: "temp"})

export class DegreeTransformPipe implements PipeTransform {
    transform(value: number, type: string): number {
        switch(type) {
            case "cel": return Number((value - 273.15).toFixed(2))
            case "fahr": return Number(((value - 273) * 1.8 + 32).toFixed(2))
            default: return value
        }
    }
}