// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// UI (Bootstrap)
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Routing
import { RouterModule } from '@angular/router';

// Services
import * as Services from 'app/services';

// Components
import { AppComponent } from 'app/app.component';
import * as SharedComponents from 'app/shared';
import * as ViewComponents from 'app/views';
import * as SheetComponents from 'app/views/cheat-sheets';



@NgModule({
    // Modules
    imports: [
        BrowserModule,
        RouterModule.forRoot([]),
        FormsModule,
        HttpClientModule,
        NgbModule.forRoot(),
    ],
    // Components
    declarations: [
        AppComponent,
        ViewComponents.NavComponent,
        ViewComponents.IntroComponent,
        ViewComponents.OverviewComponent,
        ViewComponents.MainComponent,
        ViewComponents.CreditsComponent,
        ViewComponents.FooterComponent,
        SharedComponents.CheatSheetComponent,
        SharedComponents.FactorioIconComponent,
        SheetComponents.BasicPowerComponent,
        SheetComponents.BeltThroughputComponent,
        SheetComponents.CargoWagonTransferComponent,
        SheetComponents.CommonRatiosComponent,
        SheetComponents.FluidWagonTransferComponent,
        SheetComponents.InserterThroughputComponent,
        SheetComponents.InserterCapacityBonusComponent,
        SheetComponents.LinksComponent,
        SheetComponents.MaterialProcessingComponent,
        SheetComponents.MiningComponent,
        SheetComponents.ModulesAndBeaconsComponent,
        SheetComponents.NuclearPowerComponent,
        SheetComponents.OilRefiningComponent,
        SheetComponents.ProductivityModulePayoffsComponent,
        SheetComponents.ScienceComponent,
        SheetComponents.TipsComponent,
        SheetComponents.TrainSpeedComponent
    ],
    // Services
    providers: [
        Services.DataService,
        Services.SheetCollapseToggleService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
