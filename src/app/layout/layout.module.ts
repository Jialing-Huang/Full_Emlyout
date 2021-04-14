import { NgModule } from "@angular/core";
import { LayoutComponent } from "./layout.component";
import { ToolbarModule } from "./toolbar/toolbar.module";
import { MainMenuModule } from "./main-menu/main-menu.module";
import { BreadcrumbsModule } from "./breadcrumbs/breadcrumbs.module";
import { LeftFixedMenuModule } from "./left-fixed-menu/left-fixed-menu.module";
import { ContentModule } from "./content/content.module";
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from "@angular/material/sidenav";
import { SidNavModule } from "./sid-nav/sid-nav.module";

@NgModule({
    declarations: [
        LayoutComponent
    ],
    imports: [
        ToolbarModule,
        MainMenuModule,
        BreadcrumbsModule,
        LeftFixedMenuModule,
        ContentModule,
        SidNavModule,
        FlexLayoutModule,
        MatSidenavModule
    ],
    exports: [ 
        LayoutComponent
    ]
  })
  export class LayoutModule { }