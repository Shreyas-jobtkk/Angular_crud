// app-routing.module.ts

import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeContainerComponent } from './home-container/home-container.component'
import { HomeContainerComponent2 } from './container/home-container2.component'

const routes: Routes = [
  { path: 'home', component: HomeContainerComponent },
  { path: 'home2', component: HomeContainerComponent2 }
  // Add other routes if needed
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
