import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./sections/pages/about/about.component";
import { BlogComponent } from "./sections/pages/about/blog/blog.component";
import { CatsComponent } from "./sections/pages/cats/cats.component";
import { ContactComponent } from "./sections/pages/contact/contact.component";
import { DogsComponent } from "./sections/pages/dogs/dogs.component";
import { HomeComponent } from "./sections/pages/home/home.component";


const routes: Routes=[
  {
    path:'',
    component: HomeComponent,
    pathMatch:'full'
  },
  {
    path:'cats',
    component: CatsComponent
  },
 {
   path:'dogs',
  component: DogsComponent
},
{
  path:'contact',
  component: ContactComponent
},
{
  path:'about',
  component: AboutComponent,
  children:[
  {
    path:'blog',
    component:BlogComponent
  }
]

},
{
  path:'**',
  redirectTo:''
}
]

@NgModule({
  imports:[
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})

export class AppRoutingModule{}
