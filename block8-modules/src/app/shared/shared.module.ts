import { NgModule } from "@angular/core";
import { ColorDirective } from "./directives/color.directive";

@NgModule({
    declarations: [
        ColorDirective
    ],
    imports: [

    ],
    exports: [ColorDirective]
})
export class SharedModule {}