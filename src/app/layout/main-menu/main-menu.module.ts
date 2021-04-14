import { NgModule } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MainMenuComponent } from "./main-menu.component";

@NgModule({
    declarations: [
        MainMenuComponent
    ],
    imports: [
      MatToolbarModule
    ],
    exports: [ 
        MainMenuComponent
  ]
  })
  export class MainMenuModule { }