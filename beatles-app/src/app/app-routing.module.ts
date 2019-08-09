import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AlbumComponent } from './album/album.component';
import { AlbumbarComponent } from './albumbar/albumbar.component';

const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: '/enter-leave' },
  //{ path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    data: {label: 'home', animation: 'home'},
  },
   {
    path: 'header',
    component: HeaderComponent,
  },
  //{ path: '', redirectTo: '/footer', pathMatch: 'full' },
  {
    path: 'footer',
    component: FooterComponent,
  },
  //{ path: '', redirectTo: '/footer', pathMatch: 'full' },
  {
    path: 'album',
    component: AlbumComponent,
  },
  //{ path: '', redirectTo: '/footer', pathMatch: 'full' },
  {
    path: 'albumbar',
    component: AlbumbarComponent,
  },
  { path: '**', redirectTo: 'home' },

];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
