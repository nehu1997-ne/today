import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AboutComponent } from './components/pages/about/about.component';
// import { ContactComponent } from './components/pages/contact/contact.component';
// import { HomeComponent } from './components/pages/home/home.component';
// import { ProductComponent } from './components/pages/product/product.component';

const routes: Routes = [


  // {path:'home', component:HomeComponent},
  // {path: 'about', component:AboutComponent},
  // {path:'contact', component:ContactComponent},
  // {path:'product', component:ProductComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
