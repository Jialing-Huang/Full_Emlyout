import { NgModule } from "@angular/core";
import { MatListModule } from "@angular/material/list";
import { LeftFixedMenuComponent } from "./left-fixed-menu.component";

@NgModule({
    declarations: [
        LeftFixedMenuComponent
    ],
    imports: [
        MatListModule
    ],
    exports: [ 
        LeftFixedMenuComponent
  ]
  })
  export class LeftFixedMenuModule { }