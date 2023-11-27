// app-routing.module.ts

import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeContainerComponent } from './home-container/home-container.component'

const routes: Routes = [
  { path: 'home', component: HomeContainerComponent }
  // Add other routes if needed
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
