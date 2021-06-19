import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
	imports: [
		RouterModule.forRoot([
    {
        path: 'slides',
        loadChildren: () => import('./slides/slides.module').then((m) => m.SlidesModule),
    },
    { path: '', redirectTo: 'slides/mockups', pathMatch: 'full' },
], { relativeLinkResolution: 'legacy' }),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
