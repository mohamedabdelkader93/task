import { Routes } from '@angular/router';
import { HighlightsComponent } from './highlights';
import { DetailsComponent } from './details';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '',      component: HighlightsComponent },
  { path: 'highlights',  component: HighlightsComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: '**',    component: NoContentComponent },
];
