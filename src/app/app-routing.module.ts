import { CreatorsComponent } from './components/creators/creators.component';
import { DetailsComponent } from './components/comics/details/details.component';
import { ComicsComponent } from './components/comics/comics.component';
import { CharactersComponent } from './components/characters/characters.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'characters',
    component: CharactersComponent
  },
  {
    path: 'comics',
    component: ComicsComponent,
  },
  {
    path: 'comics/:id',
    component: DetailsComponent,
  },
  {
    path: 'creators',
    component: CreatorsComponent,
  },
  {
    path: '**',
    redirectTo: ''
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
