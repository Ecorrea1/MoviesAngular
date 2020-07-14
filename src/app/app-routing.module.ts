import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GotyComponent } from './pages/goty/goty.component';


const routes: Routes = [
  {path:'inicio', component: HomeComponent},
  {path:'goty',   component: GotyComponent},
  //This enabled everythings links not found 
  {path:'**',     pathMatch:'full',redirectTo:'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
