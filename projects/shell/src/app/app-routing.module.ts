import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'product',
    loadChildren: () => loadRemoteModule({
      remoteEntry:'http://localhost:4004/productEntry.js',
      remoteName:'product',
      exposedModule:'./Module'
    }).then((m) => m.ProductModule)
    // loadChildren: () => import('product/Module').then((m) => m.ProductModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
