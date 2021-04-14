import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatSidenavModule } from "@angular/material/sidenav";
import { ContentModule } from "../content/content.module";
import { SidNavComponent } from "./sid-nav.component";

@NgModule({
    declarations: [
        SidNavComponent
    ],
    imports: [
        MatSidenavModule,
        ContentModule,
        CommonModule    
    ],
    exports: [ 
        SidNavComponent
  ]
  })
  export class SidNavModule { }