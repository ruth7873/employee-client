import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "genderIcon"
})
export class PipeIconGender implements PipeTransform {
    transform(value: string): string {
        if (value == "Male")
            return "man"
        return "woman"
    }
}