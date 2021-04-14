import { NgModule } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { SidNavComponent } from "../sid-nav/sid-nav.component";
import { SidNavModule } from "../sid-nav/sid-nav.module";
import { ToolbarComponent } from "./toolbar.component";

@NgModule({
    declarations: [
      ToolbarComponent
    ],
    imports: [
      MatToolbarModule,
      MatIconModule,
      SidNavModule
    ],
    exports: [ 
      ToolbarComponent
  ]
  })
  export class ToolbarModule { }