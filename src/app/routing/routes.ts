import { Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { EditComponent } from '../edit/edit.component';
import { PersonDetailsComponent } from '../person-details/person-details.component';

export const routes: Routes = [
  {
    path: 'home', component: HomeComponent,
    children: [
      { path: '', component: PersonDetailsComponent },
      { path: 'edit/:id', component: EditComponent },
      { path: 'create', component: EditComponent },
    ]
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
