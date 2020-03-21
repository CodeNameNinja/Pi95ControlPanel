import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'ships',
    pathMatch: 'full'
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then(m => m.UsersComponentModule)
  },
  {
    path: 'ships',
    loadChildren: () => import('./ships/ships.module').then(m => m.ShipsPageModule)
  },
  {
    path: 'ports',
    loadChildren: () => import('./ports/ports.module').then(m => m.PortsComponentModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
