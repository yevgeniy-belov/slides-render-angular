import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SlidesComponent } from './slides.component';
import { SlidesListMap } from './slides-list.module';
import { WelcomeComponent } from '../welcome/welcome.component';

@NgModule({
    imports: [RouterModule.forChild([
        {
            path: '',
            component: SlidesComponent,
            children: [
                ...SlidesListMap
            ]
        },
        { path: '**', component: WelcomeComponent },
    ])],
})
export class SlidesRoutingModule { }
