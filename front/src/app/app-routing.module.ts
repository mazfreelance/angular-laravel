import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { AboutPageComponent } from './Pages/about-page/about-page.component';
import { ContactPageComponent } from './Pages/contact-page/contact-page.component';
import { UserCreateComponent } from './Pages/user-create/user-create.component';
import { UserPageComponent } from './Pages/user-page/user-page.component';
import { UserEditComponent } from './Pages/user-edit/user-edit.component';

const routes: Routes = [
  { path: '', component: HomePageComponent, title: 'Home' },
  { path: 'about', component: AboutPageComponent, title: 'About' },
  { path: 'contact', component: ContactPageComponent, title: 'Contact' },
  { path: 'users', component: UserPageComponent, title: 'Users Lists' },
  { path: 'users/create', component: UserCreateComponent, title: 'User Create' },
  { path: 'users/:id/edit', component: UserEditComponent, title: 'User Edit' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
