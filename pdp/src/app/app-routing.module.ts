import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PdpContentComponent } from './pdp-content/pdp-content.component';

const routes: Routes = [
  { path: 'product/:id', component: PdpContentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
