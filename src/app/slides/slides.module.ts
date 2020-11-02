import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlidesList } from './slides-list.module';
import { SlidesListMap } from './slides-list.module';
import { SlidesComponent } from './slides.component';
import { RouterModule } from '@angular/router';
import { UiComponentsModule } from '../shared/ui-components/ui-components.module';
import { FormsModule } from '@angular/forms';
import { ClickOutsideModule } from 'ng-click-outside';
import { SlidesRoutingModule } from './slides-routing.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsModule } from '../../../../../components/components.module';


@NgModule({
    declarations: [
        SlidesList,
        SlidesComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        UiComponentsModule,
        RouterModule,
        SlidesRoutingModule,
        ClickOutsideModule,
        DragDropModule,
        ComponentsModule,
        NgbModule
    ],
    entryComponents: [
        SlidesList
    ],
    exports: [
        UiComponentsModule,
        ComponentsModule,
        SlidesComponent,
        NgbModule
    ]
})

export class SlidesModule { }
