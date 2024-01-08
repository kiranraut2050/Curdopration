import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnotherPageComponent } from './another-page/another-page.component';


const routes: Routes = [
  { path: 'another-page', component: AnotherPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
