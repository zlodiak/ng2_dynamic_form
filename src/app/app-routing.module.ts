import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NformComponent } from './components/nform/nform.component';
import { Nfrom2Component } from './components/nfrom2/nfrom2.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/nform',
    pathMatch: 'full'
  },
  {
    path: 'nform',
    component: NformComponent
  },
  {
    path: 'nform2',
    component: Nfrom2Component
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
