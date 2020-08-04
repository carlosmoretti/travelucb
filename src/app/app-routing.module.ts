import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full"},
  { path: "home", loadChildren: () => import('./pages/homepage/homepage.module').then(e=>e.HomepageModule) },
  { path: "travel", loadChildren: () => import('./pages/travel/travel.module').then(d=>d.TravelModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
