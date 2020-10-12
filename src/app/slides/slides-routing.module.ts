import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SlidesComponent } from './slides.component';
import { SlidesListMap } from './slides-list.module';

@NgModule({
    imports: [RouterModule.forChild([
        {
            path: '',
            component: SlidesComponent,
            children: [
                ...SlidesListMap
            ]
        },
    ])],
})
export class SlidesRoutingModule { }
