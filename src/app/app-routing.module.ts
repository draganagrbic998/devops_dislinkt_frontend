import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Role, Route } from './utils/route';

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
