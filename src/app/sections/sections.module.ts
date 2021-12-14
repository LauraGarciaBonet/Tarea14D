import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatsComponent } from './pages/cats/cats.component';
import { DogsComponent } from './pages/dogs/dogs.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { BlogComponent } from './pages/about/blog/blog.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CatsComponent,
    DogsComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    BlogComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    CatsComponent,
    DogsComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    BlogComponent
  ]
})
export class SectionsModule { }
